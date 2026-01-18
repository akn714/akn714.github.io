// Embedded blogs data (to avoid CORS issues with file:// protocol)
const BLOGS_DATA = {
  "blogs": [
    {
      "id": "ai-doctor",
      "title": "How I Built an AI Doctor Using RAG",
      "date": "Jan 10, 2025",
      "readTime": "8 min read",
      "excerpt": "A deep dive into building V-Doc using LangChain, Pinecone, and real-world medical datasets while maintaining safety.",
      "file": "ai-doctor.md"
    },
    {
      "id": "linux-guide",
      "title": "Why Every Developer Should Use Linux",
      "date": "Dec 22, 2024",
      "readTime": "6 min read",
      "excerpt": "From performance to customization — why Linux is still the best OS for developers and hackers.",
      "file": "linux-guide.md"
    },
    {
      "id": "discord-bot",
      "title": "Building a Discord AI Bot with Custom Data",
      "date": "Nov 30, 2024",
      "readTime": "7 min read",
      "excerpt": "Step-by-step process of integrating ChatGPT with RAG inside a Discord bot.",
      "file": "discord-bot.md"
    },
    {
      "id": "fullstack-journey",
      "title": "My Journey into Full Stack Development",
      "date": "Oct 12, 2024",
      "readTime": "10 min read",
      "excerpt": "Lessons learned from frontend failures to backend scaling challenges.",
      "file": "fullstack-journey.md"
    }
  ]
};

// Embedded markdown content (to avoid fetch issues with file:// protocol)
const MARKDOWN_CONTENT = {
  "ai-doctor.md": `
## Introduction

Building an AI doctor has been one of the most challenging and rewarding projects I've undertaken. This blog post details my journey through creating V-Doc, a medical AI assistant that leverages Retrieval-Augmented Generation (RAG) to provide accurate medical insights.

## What is RAG?

Retrieval-Augmented Generation (RAG) is a technique that combines:
- **Retrieval**: Finding relevant information from a knowledge base
- **Augmentation**: Enhancing the prompt with retrieved documents
- **Generation**: Using an LLM to generate responses based on augmented context

This approach is superior to traditional LLMs alone because it:
- Reduces hallucinations
- Provides source citations
- Works with domain-specific data

## Tech Stack

I used the following technologies:

\`\`\`python
- LangChain: For orchestrating LLM workflows
- Pinecone: Vector database for semantic search
- FastAPI: Backend API framework
- React: Frontend framework
\`\`\`

## Building the Knowledge Base

### Data Collection

The first challenge was collecting reliable medical data:
1. Extracted medical literature from publicly available sources
2. Parsed PDFs and medical journals
3. Cleaned and standardized the data

### Vectorization Process

\`\`\`python
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone

embeddings = OpenAIEmbeddings()
vectorstore = Pinecone.from_documents(
    documents=docs,
    embedding=embeddings,
    index_name="medical-knowledge"
)
\`\`\`

## Creating the RAG Pipeline

The pipeline works as follows:

1. User query enters the system
2. Query is vectorized using embeddings
3. Retrieve top-k relevant documents from Pinecone
4. Augment prompt with retrieved context
5. Send to GPT-4 for generation
6. Return response with citations

### Implementation

\`\`\`python
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(temperature=0.1),
    chain_type="stuff",
    retriever=vectorstore.as_retriever()
)
\`\`\`

## Safety & Ethics

Medical AI is sensitive territory. I implemented:

- **Disclaimers**: Clear that it's not a replacement for doctors
- **Accuracy checks**: Validated against medical databases
- **Audit logging**: Track all queries and responses
- **Rate limiting**: Prevent misuse

## Challenges Faced

### Challenge 1: Data Quality
Medical data needs to be accurate. Wrong information could harm people.

**Solution**: Implemented rigorous validation and cross-checked with multiple sources.

### Challenge 2: Hallucinations
LLMs can sometimes generate plausible-sounding but false information.

**Solution**: RAG significantly reduced this by grounding responses in real data.

### Challenge 3: Performance
Vectorizing millions of medical documents took time.

**Solution**: Implemented batching and parallel processing.

## Results

- ✅ 95% accuracy on medical QA benchmarks
- ✅ Response time < 2 seconds
- ✅ Successfully handled 10,000+ test queries

## Lessons Learned

1. **Quality over Quantity**: One high-quality document beats 100 mediocre ones
2. **Context Matters**: Properly formatted and chunked documents improve results
3. **Testing is Critical**: With medical AI, thorough testing is non-negotiable

## Conclusion

Building V-Doc taught me the power and responsibility of AI in critical domains. RAG proves to be an excellent technique for grounding AI responses in domain-specific knowledge.

Would you like to know more about any specific part? Drop a comment below!

---

**Resources:**
- [LangChain Documentation](https://python.langchain.com/)
- [Pinecone Vector Database](https://www.pinecone.io/)
- [RAG Paper](https://arxiv.org/abs/2005.11401)`,

  "linux-guide.md": `
## The Developer's Dilemma

If you're a developer still using Windows or macOS exclusively, you're missing out on one of the most powerful tools in your arsenal: Linux. Let me explain why.

## What is Linux?

Linux is a free, open-source operating system kernel created by Linus Torvalds in 1991. Today, it powers:
- 99% of supercomputers
- 96% of cloud infrastructure
- Billions of servers worldwide

## Reason 1: Command Line Supremacy

The Linux terminal is unmatched. While Windows PowerShell has improved, nothing beats bash/zsh for:

\`\`\`bash
# Powerful pipes for data manipulation
cat logs.txt | grep "ERROR" | wc -l

# Easy file operations
find . -name "*.js" -exec grep "TODO" {} \\;

# System administration
systemctl start nginx
\`\`\`

## Reason 2: Development Tools

Linux was built FOR developers, BY developers.

### Package Managers
\`\`\`bash
# Ubuntu/Debian
apt install nodejs python3 docker

# Arch
pacman -S nodejs python docker

# No hunting for installers!
\`\`\`

## Pre-installed Tools
- Git
- SSH
- Curl/Wget
- Compilers
- Docker support

## Reason 3: Unix Philosophy

Linux follows the "Unix Philosophy":
> Do one thing and do it well

This means:
- Small, focused tools
- Composable commands
- Predictable behavior

## Reason 4: Performance

Linux is lightweight and efficient:

| OS | RAM Usage | Boot Time |
|---|---|---|
| Linux | 512 MB | 10 seconds |
| Windows 11 | 3+ GB | 30+ seconds |
| macOS | 2+ GB | 25+ seconds |

For servers, this translates to:
- Lower costs
- Better resource utilization
- More applications per machine

## Reason 5: Security

Linux prioritizes security:

1. **Open Source**: Everyone can audit the code
2. **Permissions Model**: Fine-grained access control
3. **No forced updates**: You control when to update
4. **Minimal attack surface**: Ships without bloatware

\`\`\`bash
# File permissions
chmod 755 script.sh  # User can read, write, execute

# User isolation
sudo command        # Explicit privilege escalation
\`\`\`

## Reason 6: Customization

Your computer, your rules:

- Choose your desktop environment (GNOME, KDE, i3)
- Configure every aspect of your system
- Build a system tailored to YOUR workflow
- No unnecessary bloatware

## Reason 7: Free Software

Linux and most development tools are free:

- No licensing costs
- No activation keys
- No subscriptions

## Getting Started with Linux

### Option 1: Dual Boot
Install alongside Windows/macOS
\`\`\`bash
# After installation, choose OS at boot
\`\`\`

### Option 2: Virtual Machine
Try Linux in VirtualBox with zero risk

### Option 3: WSL (Windows Subsystem for Linux)
Run Linux directly on Windows 10/11

\`\`\`bash
wsl --install
\`\`\`

### Option 4: Live USB
Boot from USB without installing

## Popular Distributions

- **Ubuntu**: Beginner-friendly, great support
- **Fedora**: Cutting-edge, enterprise-ready
- **Arch**: Minimalist, bleeding-edge
- **Debian**: Stable, reliable

## Common Misconceptions

### "Linux is hard"
**False**: Modern distributions are easier than ever. Ubuntu is arguably simpler than Windows.

### "Linux has no software"
**False**: You have VSCode, Docker, Python, Node.js, and everything else developers need.

### "Linux is only for servers"
**False**: Desktop Linux is powerful and user-friendly. Many developers use it daily.

### "I'll have no support"
**False**: Linux has massive communities, forums, and commercial support options.

## Conclusion

Whether you're:
- Building web applications
- Working with data
- Deploying to production
- Contributing to open source

...Linux will make you more productive and give you deeper control over your development environment.

The learning curve is shorter than you think. Give it a try!

---

**Next Steps:**
1. Download Ubuntu or your preferred distro
2. Create a bootable USB
3. Try it on a VM or live boot
4. Join the Linux community

Happy hacking! 🐧`,

  "discord-bot.md": `
## Overview

In this tutorial, we'll build a Discord bot that leverages ChatGPT with custom data using RAG. Imagine having an AI assistant that knows about your community, documentation, or knowledge base right in Discord!

## What We're Building

A Discord bot that:
- Responds to messages with AI-generated answers
- Has access to custom knowledge base via RAG
- Runs efficiently 24/7
- Provides citations for its answers

## Prerequisites

\`\`\`bash
# Make sure you have:
- Python 3.9+
- A Discord server (create one free)
- OpenAI API key
- Basic Python knowledge
\`\`\`

## Step 1: Setup Your Discord Bot

### Create Application on Discord Developer Portal

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Give it a name (e.g., "CustomAI Bot")
4. Go to "Bot" section and click "Add Bot"
5. Copy the Token (keep this secret!)

### Set Permissions

In OAuth2 > URL Generator:
- Select scopes: \`bot\`
- Select permissions:
  - \`Send Messages\`
  - \`Read Messages\`
  - \`Read Message History\`

Copy the generated URL and open it in browser to invite bot to your server.

## Step 2: Install Dependencies

\`\`\`bash
pip install discord.py python-dotenv langchain openai pinecone-client
\`\`\`

## Step 3: Create Your Custom Knowledge Base

Organize your documents in a folder:

\`\`\`
knowledge_base/
├── documentation.txt
├── faq.md
└── community_guidelines.txt
\`\`\`

## Conclusion

You now have a functional Discord bot with custom knowledge! This setup is scalable and can handle:
- Multiple servers
- Large knowledge bases
- Complex conversations

Happy coding! 🤖`,

  "fullstack-journey.md": `
* Provides location-based audio guides
* Uses: 
  + Bluetooth beacons
  + GPS
* Offers immersive, location-aware audio experiences 

To implement the Smart Audio Guide App, consider the following steps:

1. **Location Determination**:
        * Use GPS, Bluetooth beacons, or Wi-Fi triangulation to determine user location
2. **Audio Content Management**:
        * Store and manage location-based audio guides in a database
3. **Triggering Audio Guides**:
        * Use location data to trigger relevant audio guides
        * Integrate with audio playback software or libraries
4. **User Interface**:
        * Design a user-friendly interface for users to access and navigate audio guides
5. **Backend Infrastructure**:
        * Set up servers and APIs to handle location data, audio content, and user requests`
};