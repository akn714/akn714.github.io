// Embedded blogs data (to avoid CORS issues with file:// protocol)
const BLOGS_DATA = {
  "blogs": [
    {
      "id": "nlp-zero-to-hero",
      "title": "NLP: Zero to Hero",
      "date": "Jan 29, 2026",
      "readTime": "12 min read",
      "excerpt": "A comprehensive guide to mastering Natural Language Processing from basics to advanced concepts.",
      "file": "nlp-zero-to-hero.md"
    },
    {
      "id": "text-preprocessing-nlp",
      "title": "Text Preprocessing in NLP",
      "date": "Jan 19, 2026",
      "readTime": "10 min read",
      "excerpt": "Lessons learned from frontend failures to backend scaling challenges.",
      "file": "text-preprocessing-nlp.md"
    },
    {
      "id": "bag-of-words-nlp",
      "title": "Bag of Words in NLP",
      "date": "Nov 18, 2025",
      "readTime": "4 min read",
      "excerpt": "Bag of Words (BoW) is a simple and commonly used technique in Natural Language Processing (NLP) for text representation.",
      "file": "bag-of-words-nlp.md"
    },
    {
      "id": "osi-model-deep-dive",
      "title": "OSI Model Deep Dive",
      "date": "Jul 4, 2025",
      "readTime": "4 min read",
      "excerpt": "A detailed breakdown of the OSI model with real data flow and device roles.",
      "file": "osi-model-deep-dive.md"
    },
    {
      "id": "guide-for-github-contribution",
      "title": "A Guide for GitHub Contributions",
      "date": "Dec 30, 2024",
      "readTime": "1 min read",
      "excerpt": "A step-by-step guide to contribute to open source projects on GitHub.",
      "file": "guide-for-github-contribution.md"
    },
    {
      "id": "api-key-authentication-nodejs",
      "title": "API Key Authentication in Node.js",
      "date": "Dec 23, 2024",
      "readTime": "3 min read",
      "excerpt": "A step-by-step guide to implementing API Key authentication for securing your Node.js APIs.",
      "file": "api-key-authentication-nodejs.md"
    },
    {
      "id": "connect-two-machine-using-ssh",
      "title": "Connect Two Machines Using SSH",
      "date": "Dec 16, 2024",
      "readTime": "1 min read",
      "excerpt": "A step-by-step guide to securely connect two machines using SSH protocol.",
      "file": "connect-two-machine-using-ssh.md"
    },
    {
      "id": "git-for-beginners",
      "title": "Git for Beginners",
      "date": "Dec 16, 2024",
      "readTime": "3 min read",
      "excerpt": "A basic guide to get started with Git for version control.",
      "file": "git-for-beginners.md"
    },
    {
      "id": "custom-linux-command",
      "title": "Create a Custom Command in Linux/Bash",
      "date": "Apr 28, 2024",
      "readTime": "1 min read",
      "excerpt": "A quick guide on how to create your own custom commands in Linux using bash scripting.",
      "file": "custom-linux-command.md"
    }
  ]
};

// Embedded markdown content (to avoid fetch issues with file:// protocol)
const MARKDOWN_CONTENT = {
  "nlp-zero-to-hero.md": `
  # NLP (Zero to Hero)

This article is a complete end-to-end guide to **Natural Language Processing (NLP)**, starting from raw text and basic preprocessing techniques, moving through classical machine learning approaches, and finally reaching modern deep learning and transformer-based models like **BERT**. The goal is to build strong conceptual foundations while maintaining practical intuition.

## Table of Contents
1. Introduction to NLP
2. Why is NLP Required?
3. Levels of NLP (Learning Path)
4. Stages of an NLP Pipeline
5. Basic Terminologies Used in NLP
6. Example Use Case: Sentiment Analysis
7. Text Preprocessing
   * Building a Corpus
   * Tokenization
   * Stopword Removal
   * Stemming vs Lemmatization
8. Converting Text to Vectors (Feature Extraction)
   * One Hot Encoding (OHE)
   * Bag of Words (BoW)
   * TF-IDF
9. Word Embeddings using Deep Learning
   * Word2Vec
   * CBOW
   * Skip-gram
   * Average Word2Vec
10. Neural Network Architectures for NLP
    * RNN
    * LSTM RNN
    * Transformers
    * BERT
11. Summary and Learning Roadmap

---

## 1. Introduction to NLP

Natural Language Processing (NLP) is a field of Artificial Intelligence that enables machines to understand, interpret, and generate human language. Since human language is unstructured, ambiguous, and context-dependent, NLP combines linguistics, statistics, machine learning, and deep learning to make sense of text and speech data.

Examples of NLP applications include:

* Search engines
* Chatbots and virtual assistants
* Sentiment analysis
* Language translation
* Text summarization

---

## 2. Why is NLP Required?

Computers do not understand human language in its raw form. They only work with numbers. NLP is required to:

* Convert unstructured text into numerical representations
* Extract meaningful patterns from language
* Automate understanding of large-scale textual data

Without NLP, tasks like analyzing reviews, detecting spam, or building conversational AI systems would not be possible.

---

## 3. Levels of NLP (Learning Path)

NLP concepts can be understood as a progression of levels:


| BERT                                                                     |
| ------------------------------------------------------------------------ |
| Transformers                                                             |
| Bidirectional LSTM, Encoders, Decoders                                   |
| Text Preprocessing 4 -> Word Embeddings (Sequential, Embedding)          |
| RNN, LSTM RNN, GRU RNN                                                   |
| ML (something)                                                           |
| Text Preprocessing 3 -> Word2Vec, Avg Word2Vec                           |
| Text Preprocessing 2 -> BoW, TF-IDF, Uni-grams, Bi-grams, N-grams        |
| Text Preprocessing 1 -> Tokenization, Lemmatization, StopWords, Stemming |

This layered structure shows how NLP evolved from simple statistical methods to deep contextual language models.

---

## 4. Stages of an NLP Pipeline

A typical NLP pipeline consists of:

1. Data collection
2. Text preprocessing
3. Feature extraction / embeddings
4. Model training
5. Evaluation and deployment

Each stage builds on the previous one and directly impacts model performance.

---

## 5. Basic Terminologies Used in NLP

#### Words / Tokens

The smallest meaningful units of text after tokenization. Ex. \`cat\`, \`man\`, etc.

#### Vocabulary

The **vocabulary** is the set of all unique words present in the corpus.

#### Documents

A **document** is an individual text unit, usually a sentence or paragraph.

Example:
\`\`\`
"The cat sat on the mat."
\`\`\`

#### Corpus

A **corpus** is the complete collection of text data/documents.

Example:

* Corpus = D1 + D2 + D3 + D4

\`\`\`python
corpus = [
    'The cat sat on the mat.',
    'The dog chased the cat.',
    'The mat was soft and fluffy.'
]
\`\`\`

---

>### Interview Concept: Training vs Validation vs Testing
>* **Training dataset**: Used to train the model
>* **Validation dataset**: Used to tune hyperparameters (this dataset is a part of training dataset)
>* **Testing dataset**: Used to evaluate final model performance

---

## 6. Example Use Case: Sentiment Analysis

Sentiment analysis determines whether a piece of text expresses a positive or negative sentiment.

| Document | Text                 | Output |
| -------- | -------------------- | ------ |
| D1       | The food is good     | 1      |
| D2       | The food is not good | 0      |
| D3       | Pizza is amazing     | 1      |
| D4       | Pizza is not amazing | 0      |

This is typically modeled as a **binary classification** problem.

---

## 7. Text Preprocessing

Text preprocessing converts raw text into a clean, structured and numeric format suitable for training models.

### Steps in Text Preprocessing

1. Building a corpus
2. Cleaning and normalizing text
3. Converting text into vectors

### Building a Corpus

A corpus is represented as a list of sentences:

Example:
\`\`\`python
corpus = [
    'The cat sat on the mat.',
    'The dog chased the cat.',
    'The mat was soft and fluffy.'
]
\`\`\`

### Tokenization
Tokenization splits sentences into individual words or tokens.

**Types of Tokenization**<br>
1. Word Tokenization: Splits a sentence into words or word-like units.
2. Sentence Tokenization: Splits a block of text into individual sentences.

### Stopword Removal
Stopwords are commonly occurring words (like \`is\`, \`the\`, \`and\`, \`to\`) that add little meaning and are often removed before building corpus to reduce vocabulary size.

### Stemming vs Lemmatization

**Stemming** reduces words to a root form, which may not be meaningful.
Ex.
\`\`\`
Finally, Final, Finalist -> Fina (This may not have any meaning)
\`\`\`

**Lemmatization** converts words to their dictionary form with meaning preserved.
Ex.
\`\`\`
Finally, Final, Finalist -> Final (This will have meaning)
\`\`\`

| Technique     | Advantage        | Disadvantage | Use Case              |
| ------------- | ---------------- | ------------ | --------------------- |
| Stemming      | Fast             | Meaning lost | Spam filtering        |
| Lemmatization | Meaningful words | Slower       | Chatbots, translation |

---

## 8. Converting Text to Vectors

Since ML models work with numbers, text must be converted into vectors.
> vectors -> numeric representation of words

### One Hot Encoding (OHE)
One Hot Encoding or OHE is a technique in NLP that converts the words into vectors based on the frequency of the word occurrence in the sentence.

*Example:*

\`\`\`python
# We get this from step 1 (building corpus)
corpus = [
    'The cat sat on the mat.',
    'The dog chased the cat.',
    'The mat was soft and fluffy.'
]
\`\`\`

Then,
\`\`\`python
vocabulary = ['The', 'cat',  'sat', 'on', 'the', 'mat', 'dog', 'chased', 'was', 'soft', 'and', 'fluffy']
\`\`\`

Then, One Hot Encoding =>
\`\`\`
Sentences 1:
The: [0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
cat: [0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 1. 0.]
sat: [0. 0. 0. 0. 0. 1. 0. 0. 0. 0. 0. 0. 0.]
on: [0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 1. 0. 0.]
the: [0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
mat.: [0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 1.]

Sentences 2:
The: [0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
dog: [0. 0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
chased: [1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
the: [0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
cat.: [0. 0. 0. 0. 0. 0. 0. 0. 0. 1. 0. 0. 0.]

Sentences 3:
The: [0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
mat: [0. 0. 0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0.]
was: [0. 0. 0. 0. 0. 0. 1. 0. 0. 0. 0. 0. 0.]
soft: [0. 0. 0. 0. 0. 0. 0. 1. 0. 0. 0. 0. 0.]
and: [0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
fluffy.: [0. 0. 0. 0. 0. 0. 0. 0. 1. 0. 0. 0. 0.]
\`\`\`


| Advantages             | Disadvantages                                                  |
| ---------------------- | -------------------------------------------------------------- |
| 1. Simple to implement | 1. Sparse Matrix (matrix in which most of the values are '0's) |
| 2. Intutive            | 2. OOV (Out of Vocabulary)                                     |
|                        | 3. Not fixed size of sentences                                 |


### Bag of Words (BoW)
Now, let's talk about the 2nd technique in NLP to convert words into vector representation.

Bag of Words or BoW in short, represents text into vector representations using word frequencies, ignoring grammar and word order.

>**Why it is different from One Hot Encoding (OHE)?**
The corpus used in OHE includes StopWords (words like 'the', 'is', 'on'), but in the corpus of Bag of Words, the StopWords are removed.


| Advantages             | Disadvantages                        |
| ---------------------- | ------------------------------------ |
| 1. Simple and Intutive | 1. Sparsity                          |
| girl                   | 2. OOV (Out of Vocabulary)           |
| boy                    | 3. Ordering of the words are changed |
|                        | 4. Semantic meaning is lost          |

*For better understanding of BoW, refer my blog 'Bag of Words in NLP' here [here](https://akn714.github.io/posts/blog.html?id=bag-of-words-nlp).*

### TF-IDF
TF-IDF or  is the 3rd technique in NLP to convert words into vectors. TF-IDF improves BoW by capturing word importance.

* TF measures frequency within a document
* IDF reduces the weight of common words

#### Steps involved in TF-IDF
- Step 1: Apply stopwords on the corpus
- Step 2: Calculate the frequencies of all the words in the corpus
- Step 3: Calculate TF and IDF for all the remaining words in the corpus
- Step 4: Create a sparse matrix by calculating \`TFxIDF\` of all the words

![image](./content/images/tf-idf.png)

| **Advantages**                 | **Disadvantages**    |
| ------------------------------ | -------------------- |
| 1. Intutive                    | 1. Sparcity          |
| 2. Word importance is captured | 2. Out of vocabulary |

---

## 9. Word Embeddings using Deep Learning
Word embeddings map words into dense vector spaces where semantic similarity/meaning is preserved.

**Techniques used:**
- Word2Vec
	- CBoW
	- Skip Grams
- Average Word2Vec

### Word2Vec
Word2Vec is a word embedding technique in natural language processing (NLP) that allows words to be represented as vectors in a continuous vector space. It works on the principle that words with similar meanings should have similar vector representations.

#### CBOW (Continuous Bag of Words)
![cbow](./content/images/cbow.png)

- CBOW takes multiple context words arounsd a missing word and tries to guess the missing (center) word.  
- Goal of CBoW is to predict the **target word** using its surrounding **context words**
- Faster and works well for frequent words
- In simple terms: **“Given neighbors → predict the center word.”**


*for better understanding of CBoW, you can refer to 'Word2Vec — CBOW (implementation explained)' article on medium [here](https://medium.com/@harshtherocking/word2vec-cbow-implementation-explained-3b7ee6dbcd32)*

#### Skip-grams
![skip-grams](./content/images/skip-grams.png)

The Skip gram predicts the surrounding context words within specific window given current word. The input layer contains the current word and the output layer contains the context words. The hidden layer contains the number of dimensions in which we want to represent current word present at the input layer.
* In short predicts surrounding context words using the center word
* Performs better on rare words.


---

### Average Word2Vec
Average Word2Vec represents a sentence as a vector by taking the average of the Word2Vec embeddings of all the words in that sentence, enabling sentence-level representation from word embeddings.

---

## 10. Neural Network Architectures for NLP

### RNN (Recurrent Neural Network)

RNNs process sequences by maintaining a hidden state that captures past information.

![rnn](./content/images/rnn.png)

**Applications**:

* Sentiment analysis
* Text generation
* Time-series prediction

**Limitation**: Vanishing gradient problem

>**Vanishing Gradient Problem**
The vanishing gradient problem is when training signals (gradients) become tiny as they travel backward through many layers in a deep neural network, essentially telling early layers to "stop learning" because their weights barely change, halting training progress

**Types of RNN**:
1. One to One
	- Image Classification
2. One to Many
	- Music Generation
	- Text Generation
	- Movie Recommendation
3. Many to One
	- Sentiment Analysis
	- Predict Next Day Sale
4. Many to Many
	- Language Translation
	- Question Answering
	- Chatbots

![types of rnn](./content/images/types-of-rnn.png)

---

### LSTM RNN

![lstm rnn](./content/images/lstm-rnn-neuron.png)

LSTMs solve RNN limitations using gates:

* Forget gate
* Input gate
* Output gate

***Why LSTM RNN instead of RNN?***
1. There is Vanishing Gradient problem or dead neuron in RNN.
2. Huge gap between contexts info's in RNN.
	- Not able to understand if something is related to something
	- Like 'My name is XYZ and I like chocolate', Here 'I' refers to 'XYZ', but RNNs are not able to process this information.

---

### Transformers

Transformers remove recurrence and rely on **self-attention** to model relationships between words in parallel. They form the foundation of modern NLP systems.

---

### BERT

BERT (Bidirectional Encoder Representations from Transformers) understands context from both left and right directions. It is pre-trained on large corpora and fine-tuned for downstream NLP tasks.

---

## 11. Summary and Learning Roadmap

* Start with text preprocessing and classical vectorization
* Learn word embeddings and sequence models
* Understand attention, transformers, and BERT
* Apply concepts to real-world NLP projects

This progression takes you from **zero** to a strong **NLP practitioner** with solid theoretical and practical understanding.

  `,
  "text-preprocessing-nlp.md": `
## Text preprocessing
1. OHE (One Hot Encoding)
2. Bag of Words (BOW)
3. TF-IDF (Term Frequency - Inverse Document Frequency)
4. Word2Vec

##### Basic Terminologies used in NLP
1. CORPUS
	- This is a paragraph which contains all the dataset (like all the text)
	- Paragraph -> D1 + D2 + D3 + D4
2. Documents
	- This is sentence
	- D1, D2, D3, D4 -> Document
3. Vocabulary
	- Total number of unique words from which input is been created
4. Words -> Words

###### Example: Sentiment Analysis

| Documents | Text                 | O/P |
| --------- | -------------------- | --- |
| D1        | The food is good     | 1   |
| D2        | The food is not good | 0   |
| D3        | Pizza is amazing     | 1   |
| D4        | Pizza is not amazing | 0   |

### 1. OHE (One Hot Encoding)

corpus = [
    'The cat sat on the mat.',
    'The dog chased the cat.',
    'The mat was soft and fluffy.'
]

Then, vocabulary = ['The', 'cat',  'sat', 'on', 'the', 'mat', 'dog', 'chased', 'was', 'soft', 'and', 'fluffy']

Then, One Hot Encoding =>
\`\`\`
Sentences 1:
The: [0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
cat: [0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 1. 0.]
sat: [0. 0. 0. 0. 0. 1. 0. 0. 0. 0. 0. 0. 0.]
on: [0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 1. 0. 0.]
the: [0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
mat.: [0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 1.]
Sentences 2:
The: [0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
dog: [0. 0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
chased: [1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
the: [0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
cat.: [0. 0. 0. 0. 0. 0. 0. 0. 0. 1. 0. 0. 0.]
Sentences 3:
The: [0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
mat: [0. 0. 0. 0. 1. 0. 0. 0. 0. 0. 0. 0. 0.]
was: [0. 0. 0. 0. 0. 0. 1. 0. 0. 0. 0. 0. 0.]
soft: [0. 0. 0. 0. 0. 0. 0. 1. 0. 0. 0. 0. 0.]
and: [0. 1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]
fluffy.: [0. 0. 0. 0. 0. 0. 0. 0. 1. 0. 0. 0. 0.]
\`\`\`

| Advantages             | Disadvantages                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------- |
| 1. Simple to implement | 1. Sparse Matrix (matrix in which in one row, there only one '1' and rest all are '0's) |
| 2. Intutive            | 2. OOV (Out of Vocabulary)                                                              |
|                        | 3. Not fixed size of sentences                                                          |
|                        | 4. Semantic meaning between words is not captured                                       |
### 2. Bag of Words

**Procedure:**
Step 1: Remove unnecessary words using stopwords
Step 2: Get the frequencies of all the remaining from the corpus
Step 3: Make a sparce matrix as shown in the 2nd table below

**Example:**
D1 -> He is a good boy -> good boy
D2 -> She is a good girl -> good girl
D3 -> Boy and Girl are good -> boy girl good
*in the second phase we have removed unnecessary words using stopwords

| Vocabulary | Frequency |
| ---------- | --------- |
| good       | 3         |
| girl       | 2         |
| boy        | 2         |

*below table is the final output of bag of words, f1, f2, f3 -> features

|       | f1   | f2   | f3  | O/P |
| ----- | ---- | ---- | --- | --- |
| ->    | good | girl | boy |     |
| Doc 1 | 1    | 1    | 0   |     |
| Doc 2 | 1    | 0    | 1   |     |
| Doc 3 | 1    | 1    | 0   |     |

| Advantages             | Disadvantages                        |
| ---------------------- | ------------------------------------ |
| 1. Simple and Intutive | 1. Sparsity                          |
| girl                   | 2. OOV (Out of Vocabulary)           |
| boy                    | 3. Ordering of the words are changed |
|                        | 4. Semantic meaning is lost          |

  `,

  "bag-of-words-nlp.md": `
  Natural Language Processing (NLP) looks complex from the outside: embeddings, transformers, RNNs, attention, etc.
But every great system starts from a simple idea.
One of the most fundamental (and surprisingly powerful) techniques in NLP is **Bag of Words (BoW)**.

This article explains BoW in a clean, intuitive way, and shows how to implement it in Python with and without stemming.
Perfect for students, beginners, and anyone strengthening their NLP foundation.

#### Table of Content:

1.  What is Bag of Words?
2.  How to implement Bag of Words in python.
3.  Why stemming is important?
4.  BoW with and without stemming.
5.  Full python code of BoW with stemming.
6.  Why BoW Creates Huge Sparse Matrices

### 1. What Is Bag of Words?
-------------------------

In a nutshell, **Bag of Words is a numerical representation of text**.

Instead of dealing with sentences as raw strings, BoW converts them into **vectors of word occurrences**.

#### How it works (simple intuition)

Take the sentence:

\`\`\`
I love reading Dune.
\`\`\`

And another:

\`\`\`
I love science fiction.
\`\`\`

BoW looks at all unique words:

\`\`\`
["i", "love", "reading", "dune", "science", "fiction"]
\`\`\`

Then it builds vectors based on the word occurrence:

\`\`\`
| Sentence               | i | love | reading | dune | science | fiction |
| ---------------------- | - | ---- | ------- | ---- | ------- | ------- |
| I love reading Dune    | 1 | 1    | 1       | 1    | 0       | 0       |
| I love science fiction | 1 | 1    | 0       | 0    | 1       | 1       |
\`\`\`

Each row = sentence
Each column = word
Each cell = count / presence of that word

so,

\`\`\`
I love reading Dune    => 1 1 1 1 0 0
I love science fiction => 1 1 0 0 1 1
\`\`\`

This allows machine learning models to understand text as numbers.

### 2. How to Implement Bag of Words in Python
-------------------------------------------

We’ll use **NLTK** for preprocessing and **scikit-learn** for generating vectors.

#### Step 1: Import Tools

\`\`\`python
import nltk
import re
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import CountVectorizer
nltk.download('stopwords')
nltk.download('punkt')
\`\`\`

#### Step 2: Load and tokenize text

\`\`\`python
paragraph = open('dune_Messiah.txt', 'r', encoding='utf-8').read()
sentences = nltk.sent_tokenize(paragraph)
\`\`\`

\`nltk.sent_tokenize\` is a function within the Natural Language Toolkit (NLTK) library in Python. Its primary purpose is sentence tokenization, which involves splitting a given text into a list of individual sentences.

#### Step 3: Preprocess sentences

*   Remove special characters
*   Lowercase all the words
*   Remove stopwords (all unnecessary words that don’t contribute to the meaning of the sentence like ‘all’, ‘at’, ‘his’, etc.)

\`\`\`python
stop_words = set(stopwords.words('english'))
corpus = []
for doc in sentences:
    doc = re.sub('[^a-zA-Z]', ' ', doc).lower()
    doc = doc.split()
    doc = [word for word in doc if word not in stop_words]
    corpus.append(' '.join(doc))
\`\`\`

#### Step 4: Create the BoW model

\`\`\`python
cv = CountVectorizer()
X = cv.fit_transform(corpus).toarray()
\`\`\`

Now \`X\` is a **sparse matrix** where:

*   rows = sentences
*   columns = words (or ngrams) in your vocabulary

### 3. Why Stemming Is Important
-----------------------------

**Stemming reduces words to their base/root form.**

Example:

\`\`\`
| Word    | Stem |
| ------- | ---- |
| running | run  |
| runs    | run  |
| ran     | run  |
| runner  | run  |
\`\`\`

Without stemming, these are treated as **different features**, making your vocabulary unnecessarily large.

### Why stemming helps:

*   Reduces vocabulary size
*   Groups similar word forms together
*   Improves ML model accuracy
*   Helps when dataset is small
*   Reduces sparsity in BoW/TF-IDF

### You don’t need stemming:

*   When using modern embeddings (GPT, BERT, Word2Vec)
*   When your model is large enough
*   When meaning changes across word forms (rare)

### 4. BoW With vs Without Stemming
--------------------------------

### Without Stemming

Sentence:

\`\`\`
He is running fast and ran past everyone.
\`\`\`

After preprocessing:

\`\`\`
running fast ran past everyone
\`\`\`

Vocabulary:

\`\`\`
running, ran, past, fast, everyone
\`\`\`

All word forms treated separately.

### With Stemming

Using PorterStemmer:

\`\`\`
from nltk.stem import PorterStemmer
ps = PorterStemmer()
doc = [ps.stem(word) for word in doc]
\`\`\`

The sentence becomes:

\`\`\`
run fast run past everyon
\`\`\`

Vocabulary:

\`\`\`
run, fast, past, everyon
\`\`\`

Now “running” and “ran” map to the same feature (“run”), reducing dimensionality and improving consistency.

### 5. Full Code: BoW with Stemming
--------------------------------

\`\`\`python
import nltk
import re
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
nltk.download('stopwords')
nltk.download('punkt')
paragraph = open('dune_Messiah.txt', 'r', encoding='utf-8').read()
sentences = nltk.sent_tokenize(paragraph)
stop_words = set(stopwords.words('english'))
ps = PorterStemmer()
corpus = []
for doc in sentences:
    doc = re.sub('[^a-zA-Z]', ' ', doc).lower()
    doc = doc.split()
    doc = [ps.stem(word) for word in doc if word not in stop_words]
    corpus.append(' '.join(doc))
cv = CountVectorizer()
X = cv.fit_transform(corpus).toarray()
\`\`\`

### 6. Why BoW Creates Huge Sparse Matrices
----------------------------------------

If you choose something like:

\`\`\`python
CountVectorizer(ngram_range=(3,3))
\`\`\`

You’re generating **trigrams (3-word sequences)**.

Even a small corpus generates **thousands of unique trigrams**.

So you end up with a matrix like:

\`\`\`
(500 sentences × 20,000 trigrams)
\`\`\`

Most trigrams do not appear in most sentences → matrix is 99.8% zeros so it is called **sparse matrix**.

This is normal.

### 7. Should You Use BoW Today?
-----------------------------

BoW is still useful for:

*   Quick experiments
*   Classical ML models (SVM, Naive Bayes)
*   Small datasets
*   Explainable NLP tasks
*   Keyword-based models

But it has limitations:

*   Ignores word order
*   Very sparse
*   Large vocabulary
*   No semantic understanding

Modern NLP uses **embeddings** instead (Word2Vec, GloVe, BERT, GPT).

But understanding BoW is essential because it forms the foundation of everything else.

Final Thoughts
--------------

Bag of Words is simple but powerful and once you understand it, a lot of NLP concepts suddenly make sense.

Use this knowledge as the foundation for TF-IDF, n-grams, embeddings, and later, deep NLP models.
  `,

  "osi-model-deep-dive.md": `
  In this blog you will learn the core concept of how data is transferred from one computer to another in a network through OSI model. It includes step-by-step data transformation across the 7 layers of OSI, involvement of switches and routers, and how data looks at each step.

**Overview of the OSI Model**

| Layer | Name         | Function                              | Example Protocols |
| ----- | ------------ | ------------------------------------- | ----------------- |
| 7     | Application  | End-user app interaction              | HTTP, SMTP        |
| 6     | Presentation | Encryption, formatting, compression   | TLS, SSL          |
| 5     | Session      | Manages sessions and connections      | NetBIOS, RPC      |
| 4     | Transport    | Reliable delivery, segmentation       | TCP, UDP          |
| 3     | Network      | Logical addressing and routing        | IP, ICMP          |
| 2     | Data Link    | Physical addressing (MAC) and framing | Ethernet          |
| 1     | Physical     | Transmission of bits over the medium  | Cables, Wi-Fi     |

### Full End-to-End Data Transfer (Computer 1 → Computer 2)

Scenario:

*   Computer 1 IP: \`192.168.1.2\`, MAC: \`AA:AA:AA:AA:AA:AA\`
*   Computer 2 IP: \`192.168.2.2\`, MAC: \`BB:BB:BB:BB:BB:BB\`
*   Router MAC (in): \`11:11:11:11:11:11\`, MAC (out): \`22:22:22:22:22:22\`

Devices:

*   Switch 1 (Layer 2 device) between Computer 1 and Router
*   Router (Layer 3 device) between Switch 1 and Switch 2
*   Switch 2 (Layer 2 device) between Router and Computer 2

### **Computer 1: Data Creation (All 7 Layers)**

1. **Application Layer (L7)**

*   Data: \`”Hello, Computer 2!”\`

2. **Presentation Layer (L6)**

*   Encrypts or formats data (e.g., SSL/TLS)
*   Output: Encrypted Data Blob

3. **Session Layer (L5)**

*   Opens a session if needed (e.g., via cookies, handshakes)

4. **Transport Layer (L4)**

*   Adds TCP header (port numbers, sequence, ACK)
*   Output: \`TCP Segment\`

5. **Network Layer (L3)**

*   Adds IP header with:
*   Source IP: \`192.168.1.2\`
*   Destination IP: \`192.168.2.2\`
*   Output: \`IP Packet\`

6. **Data Link Layer (L2)**

*   Adds MAC header with:
*   Source MAC: \`AA:AA:AA:AA:AA:AA\`
*   Destination MAC: \`11:11:11:11:11:11\` (Router MAC)
*   Output: \`Ethernet Frame\`

7. **Physical Layer (L1)**

*   Transmits bits over the cable to Switch 1

### **Switch 1 (Layer 2 Device)**

*   Reads only the MAC header (Layer 2)
*   Forwards the frame based on MAC table
*   Does **not modify** the frame
*   Sends the frame to the **Router**

### Router (Layer 3 Device)

1. **Receives the Ethernet Frame**

*   MAC Destination = Router’s MAC → Accepts it

2. **Strips Layer 2 Header (Ethernet)**

*   Keeps the **IP Packet** (L3 and above remain unchanged)

3. **Reads Destination IP (**\`**192.168.2.2**\`**)**

*   Finds next hop (Computer 2 in this case)

4. **Uses ARP to find MAC of Computer 2** → \`BB:BB:BB:BB:BB:BB\`

5. **Builds a New Ethernet Frame**:

*   Source MAC: \`22:22:22:22:22:22\` (Router’s outgoing interface)
*   Destination MAC: \`BB:BB:BB:BB:BB:BB\`
*   Wraps original IP Packet

6. **Sends new frame to Switch 2**

### Switch 2 (Layer 2 Device)

*   Reads Layer 2 (Ethernet frame)
*   Forwards based on MAC table to Computer 2
*   Does not alter the frame

### Computer 2: Data Reception (Layer 1 → Layer 7)

1.  **Physical Layer (L1)**

*   Receives the raw bits

2. **Data Link Layer (L2)**

*   Reads MAC header
*   Destination MAC matches → Accepts the frame
*   Strips MAC header

3. **Network Layer (L3)**

*   Reads IP header
*   Destination IP matches → Accepts the packet
*   Strips IP header

4. **Transport Layer (L4)**

*   Uses TCP header to reassemble and manage data

5. **Session Layer (L5)**

*   Maintains/ends the session

6. **Presentation Layer (L6)**

*   Decrypts and decodes the data

7. **Application Layer (L7)**

*   Presents \`”Hello, Computer 2!”\` to the user/app

### Summary Table of Data Formats at Each Layer


| Layer | Sender                         | Router (Intermediate)              | Receiver                     |
| ----- | ------------------------------ | ---------------------------------- | ---------------------------- |
| L1    | Bits                           | Bits                               | Bits                         |
| L2    | Ethernet Frame (MAC to Router) | Ethernet Frame (MAC to Computer 2) | Ethernet Frame (MAC to Self) |
| L3    | IP Packet                      | IP Packet (same)                   | IP Packet                    |
| L4    | TCP Segment                    | TCP Segment                        | TCP Segment                  |
| L5    | Session Data                   | Session Data                       | Session Data                 |
| L6    | Encrypted Data                 | Encrypted Data                     | Decrypted Data               |
| L7    | Message: "Hello"               | -                                  | Message: "Hello"             |

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ruwnuhT-9i1rFMetKc7hPg.jpeg)

### Key Takeaways

*   **Computers implement all 7 OSI layers** to fully understand and generate end-to-end communication.
*   **Switches work at Layer 2**, forward frames based on MAC addresses.
*   **Routers work at Layer 3**, route packets based on IP addresses.
*   **Only routers and end devices read IP addresses** — switches do not.
*   **MAC address changes hop-by-hop**, IP address stays constant.
*   **Each layer encapsulates the data**, and the reverse happens on the receiving end.

Hope you understood how actually data transfer from one computer to another work under the hood in a network.
  `,

  "guide-for-github-contribution.md": `
  Hey, let’s see how you can contribute to open-source projects on Github.

Follow the below steps to do open-source contributions.

*   Step 1 : Fork the project repository into your Github account in which you want to contribute.
*   Step 2 : Clone the repository into your local machine

\`\`\`bash
git clone [your forked repository url]
\`\`\`

*   Step 3 : Make changes to the repository in local and commit them.

\`\`\`bash
git add .
git commit -m [commit message]
\`\`\`

*   Step 4 : Push the updated code to your github.

\`\`\`bash
git push
\`\`\`

*   step 5 : Now, open a new pull request (PR) in the ‘pull request’ section of the actual repository.
*   step 6 : Everything is set now, if author of the actual project accepts the pull request then he/she will pull the changes from your remote forked repository to the main branch of the actual project repository.

Hope you have now understood the process of open-source contributions. Now you are ready to do open-source contributions on Github.
  `,

  "api-key-authentication-nodejs.md": `
  APIs (Application Programming Interfaces) allow applications to communicate and exchange data. However, securing your API is crucial to prevent unauthorized access. One popular method is using **API Key Authentication**, where clients are provided a unique key to access their API. This blog will guide you through creating API Key authentication for a Node.js API, step by step.

### Prerequisites

To follow this guide, ensure you have:

1.  **Node.js** installed on your system.
2.  A basic understanding of JavaScript.
3.  Familiarity with REST APIs.

### Step 1: Set Up Your Node.js Project

1.  Create a new project directory and initialize it with npm:

\`\`\`
mkdir api-key-auth
cd api-key-auth
npm init -y
\`\`\`

2. Install the necessary packages:

\`\`\`
npm install express body-parser
\`\`\`

### Step 2: Create the Basic API

1.  Create an \`index.js\` file in your project directory.
2.  Add the following code to set up a basic Express server:

\`\`\`
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
});
\`\`\`

3. Run your server:

\`\`\`
node index.js
\`\`\`

Visit \`http://localhost:3000\` in your browser to see the message.

### Step 3: Implement API Key Authentication

1.  Initializing a ‘users' variables to save all the users that are assigned API keys.

\`\`\`
const users = {
    // 'ae53df': { userId: 1, name: 'Alice' }
};
\`\`\`

**2. Generate API Keys**: Writing a function ‘genKey' to generate unique hex decimal keys for users.

\`\`\`
function genKey(x) {
    let key;
    do {
        key = Math.floor(Math.random() * 16**x).toString(16).padStart(x, '0');
    } while (users[key]);
    
    return key;
}
\`\`\`

3. **Middleware for API Key Validation**: Create a middleware to validate API keys.

\`\`\`
// Middleware to validate API keys
const validateApiKey = (req, res, next) => {
    const apiKey = req.headers['authorization'];
    if (!apiKey || !users[apiKey]) {
        return res.status(401).json({ error: 'Invalid or missing API key' });
    }
    req.user = users[apiKey];
    next();
};
\`\`\`

4. **Secure an API Endpoint**: Apply the middleware to secure specific routes.

\`\`\`
// Secure route
app.get('/secure-data', validateApiKey, (req, res) => {
    res.json({ message: 'This is secure data.', user: req.user });
});
\`\`\`

you can also use below code to apply secure access to all the route below this line.

\`\`\`
app.use(validateApiKey);
// all the routes below will require api key to get access
app.get('/secure-data', (req, res) => {
    res.json({ message: 'This is secure data.', user: req.user });
});
\`\`\`

### Step 4: Getting an API key

write a route to get an API key

\`\`\`
let id = 0;
app.get('/get-key', (req, res) => {
    const key = genKey();
    const username = req.body.name;
    
    users[key] = { userId: id, name: username};
    res.json({
        "api-key": key
    });
});
\`\`\`

Now, the your server will look like this…

\`\`\`
// index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// users data
const users = {
    // 'ae53df': { userId: 1, name: 'Alice' }
};
// function to generate unique api keys
function genKey() {
    let key;
    do {
        key = Math.floor(Math.random() * 16**10).toString(16).padStart(10, '0');
    } while (users[key]);
    
    return key;
}
// Middleware to validate API keys
const validateApiKey = (req, res, next) => {
    const apiKey = req.headers['authorization'];
    if (!apiKey || !users[apiKey]) {
        return res.status(401).json({ error: 'Invalid or missing API key' });
    }
    req.user = users[apiKey];
    next();
};
// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});
let id = 0;
// Route to generate new api key
app.get('/get-key', (req, res) => {
    const key = genKey();
    const username = req.body.name;
    
    users[key] = { userId: id++, name: username};
    res.json({
        "api-key": key
    });
});
// Adding validateApiKey middleware
app.use(validateApiKey);
// all the routes below will require api key to get access
app.get('/secure-data', (req, res) => {
    res.json({ message: 'This is secure route.', user: req.user });
});
// Start the server
const PORT = 3000;
const IP = '127.0.0.1';
app.listen(PORT, IP, () => {
    console.log(\`Server running on http://\${IP}:\${PORT}\`);
});
\`\`\`

### Step 5: Test the API

1.  start the server

\`\`\`bash
node index.js
\`\`\`

2. Go to terminal and try to make a GET request to \`/secure-data\`route using ‘curl'

\`\`\`bash
curl -X GET http://localhost:3000/secure-data
\`\`\`

you will get an error message \`{“error”:”Invalid or missing API key”}\` .

3. Generate an API key.

\`\`\`bash
curl -X GET http://localhost:3000/get-key -H "Content-Type: application/json" -d '{"name": "Bob"}'
\`\`\`

an API key for user ‘Bob' will be generated

\`\`\`bash

{"api-key":"4e751556a3"}
\`\`\`

4. Now, try to access the \`/secure-data\` route with this API key.

\`\`\`bash
curl -X GET http://localhost:3000/secure-data -H "Authorization: 4e751556a3"
\`\`\`

you will now get access to the secure route

\`\`\`bash
{"message":"This is secure data.","user":{"userId":2,"name": "Bob"}}
\`\`\`

Thanks for reading my blog!

Hope you learned a new thing today!
  `,
  
  "connect-two-machine-using-ssh.md": `
  Let’s name the 2 machines WM1and WM2 which means windows machine 1 and windows machine 2.

In this blog we will access WM1 from WM2. (WM1 -> target, WM2 -> host)

So, install OpenSSH Server in WM1 and OpenSSH Client in WM2 (To do so you have to visit settings > optional features > add optional features > install OpenSSH Server).

**Step1:**

Generating SSH keys in WM2 (host).

\`\`\`bash
ssh-keygen -t ed25519 -C '[email address]'
\`\`\`

by executing this command, 2 files will be generated, one with .pub extension and other with no extension

*   .pub represents public key
*   and file with no extension represents private key

**Step2:**

Copy the .pub file from WM2 (host) to WM1 (target), this file should be stored in \`~/.ssh/\` folder in WM1.

**Step3:**

Now, everything is set, try logging in to WM1 from WM2.

\`\`\`bash
ssh [user username of pc2]@[ip address of pc2]
\`\`\`

example:

\`\`\`bash
ssh user@192.168.14.5
\`\`\`

Now, you can access shell of WM1 (target) from WM2 (host) without any password.
  `,

  "git-for-beginners.md": `
  Git is a version control system, it basically means that it is a tool that is used in development to store your project file and folders safely and securely.

Before getting started, let's install Git in your laptop.

Step1: Download the Git from [this](https://git-scm.com/downloads) website according to your Operating System.

Step2: After downloading it simply install it with default settings.

Step3: Now, you have installed git.

### **Configuring your Git to connect with your Github account**

You have to run only 2 commands to configure your git.

\`\`\`
git config --global user.name [your github username]
\`\`\`

Run the above command with your Github username.

\`\`\`
git config --global user.email [your email]
\`\`\`

Run the above command with your email by which you have registered on Github.

Now, you can verify these configurations by running the below commands.

\`\`\`
git config --global user.name
git config --global user.email
\`\`\`

Your git is now configured. You are now good to go!

### **Getting started with Git**

Let's say you already have a project. let's use Git on it.

First, open your terminal and navigate to your project and initialize Git in it through the below command.

\`\`\`
cd /path/to/your/project
git init
\`\`\`

Now, you are ready to use Git in your project.

### **Git stages**

There are 4 stages in Git.

1.  Untracked
2.  Unmodified
3.  Modified
4.  Staged

![git log](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*b4h57sjytoT1cUpPLk3q6A.png)

You can learn more about these stages in [this](https://medium.com/opendev-blog/the-three-stages-of-git-16565bfa67e5) blog.

### **Git commands**

There are commonly 10 commands you need to learn in Git, mostly these commands are used in development.

1.  git add
2.  git commit
3.  git log
4.  git status
5.  git restore
6.  git pull
7.  git push
8.  git diff
9.  git config
10.  git remote

**git add**

This command is used to send files to unmodified area.

\`\`\`
git add .
\`\`\`

**git commit**

> commit basically means a check point.

This command is used to commit all the changed or in other words save the changed project.

\`\`\`
git commit -m '[message]'
\`\`\`

you have to type a message to specify the changes you made in the commit, it can be anything by which you can identify the changes made like ‘added package.json file', ‘moved all the images to /images folder', etc.

**git log**

This command is used to list all the commits made in the project.

\`\`\`
git log
\`\`\`

**git status**

This command show what files were changed in the project and is the files are untracked, modified or unmodified.

\`\`\`
git status
\`\`\`

**git restore**

This command is used to restore the previous checkpoint of a file if it was changed accidentally.

\`\`\`
git restore
\`\`\`

**git pull**

This command is used to pull commits from remote repository.

\`\`\`
git pull
\`\`\`

**git push**

This command is used to upload commits from local to remote repository.

\`\`\`
git push
git push -u origin main # when pushing commits from local for the first time
\`\`\`

**git diff**

This command is used to check the changes made in the file.

\`\`\`
git diff [filename]
\`\`\`

**git config**

This command is used to configure git in local.

\`\`\`
git config --global user.name [github username] # set username
git config --global user.email [github account email] # set user email
git config user.name # display username
git config user.email # display user email
\`\`\`

**git remote**

This command is used to add a remote repository to a local repo.

\`\`\`
git remote add origin [github repository link] # set remote repository
git remote -v # display remote repository
\`\`\`

### Guide to connect your Github account to Git

step 1: generate a ssh key: \`ssh-keygen -t ed25519 -C "[your email]"\`, at \`[your email]\` type the email through which you are signed-in on github.com

step 2: evalute the key: \`eval "\$(ssh-agent -s)"\`

step 3: add key to ssh: \`ssh-add ~/.ssh/id_ed25519\`

step 4: go to \`~/.ssh\` and copy the public key from \`id_ed25519.pub\` file

step 5: paste the copied public key to [github keys](https://github.com/settings/keys)

step 6: now you can push and pull from github to your local

**note:** type \`yes\` if asked \`Are you sure you want to continue connecting (yes/no/[fingerprint])?\` during pushing the code first time (To push the code for first time use \`git push -u origin main\`)
  `,

  "custom-linux-command.md": `
  Here are a few basic steps that you can follow to write your own custom command in bash.

**step 1:** open terminal

**step 2:**
\`\`\`bash
nano ~/.bashrc
\`\`\`
If \`.bashrc\` does not exists in \`~\` (root) directory then crate one using the below commands and follow the next step
\`\`\`bash
cd ~
touch .bashrc
\`\`\`

**step 3:**

write your custom command in \`.bashrc\` file
\`\`\`bash
alias [your custom command name]: echo hello
\`\`\`

**step 4:**

After editing the file, save it and exit.

Then, enter the below command in terminal to execute \`.bashrc\` file
\`\`\`bash
source ~/.bashrc
\`\`\`

### Writing custom commands in bash using bash functions
follow the similar steps as above to write custom commands, just you have to change the step 3, instead of \`alias\` you have to write a function in bash language in \`.bashrc\` file.

write a function as below

\`\`\`bash
# syntax
# function [custom command name](){
#    # do stuff
# }

# example
function hello(){
    echo hello-world
}
\`\`\`

Now, we can access the above example function in terminal by typing the below command

\`\`\`bash
[foo@parrot]─[~/coding] \$hello

# output
[foo@parrot]─[~/coding]
hello-world
\`\`\`

#### Taking parameters in custom command

we can take parameters in custom command by using \$1 , \$2 , \$3 , etc.

**example:**<br>
\`\`\`bash
function hello(){
    echo hello again \$1
}

# output
[foo@parrot]─[~/coding] hello bar
hello again bar
\`\`\`

we can take as many parameters as you want using \`\$1\` , \`\$2\` , \`\$3\` , etc.
  `
};