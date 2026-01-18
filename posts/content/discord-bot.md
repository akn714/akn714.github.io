# Building a Discord AI Bot with Custom Data

## Overview

In this tutorial, we'll build a Discord bot that leverages ChatGPT with custom data using RAG. Imagine having an AI assistant that knows about your community, documentation, or knowledge base right in Discord!

## What We're Building

A Discord bot that:
- Responds to messages with AI-generated answers
- Has access to custom knowledge base via RAG
- Runs efficiently 24/7
- Provides citations for its answers

## Prerequisites

```bash
# Make sure you have:
- Python 3.9+
- A Discord server (create one free)
- OpenAI API key
- Basic Python knowledge
```

## Step 1: Setup Your Discord Bot

### Create Application on Discord Developer Portal

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Give it a name (e.g., "CustomAI Bot")
4. Go to "Bot" section and click "Add Bot"
5. Copy the Token (keep this secret!)

### Set Permissions

In OAuth2 > URL Generator:
- Select scopes: `bot`
- Select permissions:
  - `Send Messages`
  - `Read Messages`
  - `Read Message History`

Copy the generated URL and open it in browser to invite bot to your server.

## Step 2: Install Dependencies

```bash
pip install discord.py python-dotenv langchain openai pinecone-client
```

## Step 3: Create Your Custom Knowledge Base

Organize your documents in a folder:

```
knowledge_base/
├── documentation.txt
├── faq.md
└── community_guidelines.txt
```

## Step 4: Build the Bot

### Initialize Pinecone and Load Data

```python
from langchain.document_loaders import DirectoryLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
import pinecone

# Load documents
loader = DirectoryLoader('./knowledge_base', glob='**/*.txt')
documents = loader.load()

# Split into chunks
text_splitter = CharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
docs = text_splitter.split_documents(documents)

# Create embeddings and vectorstore
embeddings = OpenAIEmbeddings()
pinecone.init(api_key="YOUR_PINECONE_KEY", environment="us-west1-gcp")
vectorstore = Pinecone.from_documents(
    docs,
    embeddings,
    index_name="discord-knowledge"
)
```

### Create the Discord Bot

```python
import discord
from discord.ext import commands
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

# Initialize bot
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

# Initialize RAG chain
qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(temperature=0.7),
    chain_type="stuff",
    retriever=vectorstore.as_retriever()
)

@bot.event
async def on_ready():
    print(f"✅ Bot logged in as {bot.user}")

@bot.event
async def on_message(message):
    # Ignore bot's own messages
    if message.author == bot.user:
        return
    
    # Only respond to mentions or specific channel
    if bot.user.mentioned_in(message):
        async with message.channel.typing():
            try:
                # Get response from RAG chain
                response = qa_chain.run(message.content)
                
                # Discord has 2000 char limit
                if len(response) > 1900:
                    response = response[:1897] + "..."
                
                await message.reply(response)
            except Exception as e:
                await message.reply(f"❌ Error: {str(e)}")
    
    await bot.process_commands(message)

@bot.command()
async def ask(ctx, *, question):
    """Ask the bot a question"""
    async with ctx.typing():
        try:
            response = qa_chain.run(question)
            if len(response) > 1900:
                response = response[:1897] + "..."
            await ctx.send(f"**Q:** {question}\n**A:** {response}")
        except Exception as e:
            await ctx.send(f"❌ Error: {str(e)}")

# Run the bot
bot.run(os.getenv("DISCORD_TOKEN"))
```

### Environment Variables (.env)

```
DISCORD_TOKEN=your_bot_token_here
OPENAI_API_KEY=your_openai_key_here
PINECONE_API_KEY=your_pinecone_key_here
```

## Step 5: Deploy Your Bot

### Option 1: Keep it Running Locally (for testing)

```bash
python bot.py
```

### Option 2: Deploy to a Server

```bash
# Using systemd on Linux
sudo nano /etc/systemd/system/discord-bot.service
```

```ini
[Unit]
Description=Discord AI Bot
After=network.target

[Service]
ExecStart=/usr/bin/python3 /path/to/bot.py
Restart=always
User=discord

[Install]
WantedBy=multi-user.target
```

## Testing Your Bot

In your Discord server:

```
@YourBot What's the project status?
!ask Tell me about the community guidelines
```

## Advanced Features

### Add Conversation Memory

```python
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory()
qa_chain = ConversationRetrievalChain.from_llm(
    llm=OpenAI(),
    retriever=vectorstore.as_retriever(),
    memory=memory
)
```

### Rate Limiting

```python
from discord.ext import tasks
import datetime

user_cooldowns = {}

@bot.event
async def on_message(message):
    user_id = message.author.id
    
    if user_id in user_cooldowns:
        time_diff = datetime.datetime.now() - user_cooldowns[user_id]
        if time_diff.seconds < 5:
            await message.reply("Please wait before asking again!")
            return
    
    user_cooldowns[user_id] = datetime.datetime.now()
```

## Monitoring and Logging

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('bot.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

@bot.event
async def on_message(message):
    logger.info(f"Message from {message.author}: {message.content}")
```

## Common Issues

### Bot Not Responding
- Check if bot has permissions in the channel
- Verify token is correct
- Check if intents are enabled

### Rate Limit Errors
- Add delays between requests
- Implement exponential backoff
- Use Redis for distributed rate limiting

## Conclusion

You now have a functional Discord bot with custom knowledge! This setup is scalable and can handle:
- Multiple servers
- Large knowledge bases
- Complex conversations

Next steps:
- Improve your knowledge base
- Add more commands
- Implement analytics
- Deploy to production

Happy coding! 🤖
