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

The smallest meaningful units of text after tokenization. Ex. `cat`, `man`, etc.

#### Vocabulary

The **vocabulary** is the set of all unique words present in the corpus.

#### Documents

A **document** is an individual text unit, usually a sentence or paragraph.

Example:
```
"The cat sat on the mat."
```

#### Corpus

A **corpus** is the complete collection of text data/documents.

Example:

* Corpus = D1 + D2 + D3 + D4

```python
corpus = [
    'The cat sat on the mat.',
    'The dog chased the cat.',
    'The mat was soft and fluffy.'
]
```

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
```python
corpus = [
    'The cat sat on the mat.',
    'The dog chased the cat.',
    'The mat was soft and fluffy.'
]
```

### Tokenization
Tokenization splits sentences into individual words or tokens.

**Types of Tokenization**<br>
1. Word Tokenization: Splits a sentence into words or word-like units.
2. Sentence Tokenization: Splits a block of text into individual sentences.

### Stopword Removal
Stopwords are commonly occurring words (like `is`, `the`, `and`, `to`) that add little meaning and are often removed before building corpus to reduce vocabulary size.

### Stemming vs Lemmatization

**Stemming** reduces words to a root form, which may not be meaningful.
Ex.
```
Finally, Final, Finalist -> Fina (This may not have any meaning)
```

**Lemmatization** converts words to their dictionary form with meaning preserved.
Ex.
```
Finally, Final, Finalist -> Final (This will have meaning)
```

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

```python
# We get this from step 1 (building corpus)
corpus = [
    'The cat sat on the mat.',
    'The dog chased the cat.',
    'The mat was soft and fluffy.'
]
```

Then,
```python
vocabulary = ['The', 'cat',  'sat', 'on', 'the', 'mat', 'dog', 'chased', 'was', 'soft', 'and', 'fluffy']
```

Then, One Hot Encoding =>
```
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
```


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
- Step 4: Create a sparse matrix by calculating `TFxIDF` of all the words

![image](./content/images/tf-idf.png)

| $$ \text{Term Frequency} = \frac{\text{Number of repeated occurrences of the word}}{\text{Total number of words in the sentence}} $$ |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| $$ \text{IDF} = \log_c \left( \frac{\text{no. of sentences}}{\text{no. of sentences containing the word}} \right) $$                 |
| $$ TF-IDF = TF \times IDF $$                                                                                                         |


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

![lstm rnn](./images/content/lstm-rnn-neuron.png)

LSTMs solve RNN limitations using gates:

* Forget gate
* Input gate
* Output gate

***Why LSTM RNN instead of RNN?***
1. There is Vanishing Gradient problem or dead neuron in RNN.
2. Huge gap between contexts info's in RNN.
	- Not able to understand if something is related to something
	- Like 'My name is XYZ and I like chocolate', Here 'I' refers to 'XYZ', but RNNs are not able to process this information.

*for better understanding read colah's blog on LSTM [here](https://colah.github.io/posts/2015-08-Understanding-LSTMs/)

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
