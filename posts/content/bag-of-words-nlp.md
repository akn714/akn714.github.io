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

```
I love reading Dune.
```

And another:

```
I love science fiction.
```

BoW looks at all unique words:

```
["i", "love", "reading", "dune", "science", "fiction"]
```

Then it builds vectors based on the word occurrence:

```
| Sentence               | i | love | reading | dune | science | fiction |
| ---------------------- | - | ---- | ------- | ---- | ------- | ------- |
| I love reading Dune    | 1 | 1    | 1       | 1    | 0       | 0       |
| I love science fiction | 1 | 1    | 0       | 0    | 1       | 1       |
```

Each row = sentence
Each column = word
Each cell = count / presence of that word

so,

```
I love reading Dune    => 1 1 1 1 0 0
I love science fiction => 1 1 0 0 1 1
```

This allows machine learning models to understand text as numbers.

### 2. How to Implement Bag of Words in Python
-------------------------------------------

We’ll use **NLTK** for preprocessing and **scikit-learn** for generating vectors.

#### Step 1: Import Tools

```python
import nltk
import re
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import CountVectorizer
nltk.download('stopwords')
nltk.download('punkt')
```

#### Step 2: Load and tokenize text

```python
paragraph = open('dune_Messiah.txt', 'r', encoding='utf-8').read()
sentences = nltk.sent_tokenize(paragraph)
```

`nltk.sent_tokenize` is a function within the Natural Language Toolkit (NLTK) library in Python. Its primary purpose is sentence tokenization, which involves splitting a given text into a list of individual sentences.

#### Step 3: Preprocess sentences

*   Remove special characters
*   Lowercase all the words
*   Remove stopwords (all unnecessary words that don’t contribute to the meaning of the sentence like ‘all’, ‘at’, ‘his’, etc.)

```python
stop_words = set(stopwords.words('english'))
corpus = []
for doc in sentences:
    doc = re.sub('[^a-zA-Z]', ' ', doc).lower()
    doc = doc.split()
    doc = [word for word in doc if word not in stop_words]
    corpus.append(' '.join(doc))
```

#### Step 4: Create the BoW model

```python
cv = CountVectorizer()
X = cv.fit_transform(corpus).toarray()
```

Now `X` is a **sparse matrix** where:

*   rows = sentences
*   columns = words (or ngrams) in your vocabulary

### 3. Why Stemming Is Important
-----------------------------

**Stemming reduces words to their base/root form.**

Example:

```
| Word    | Stem |
| ------- | ---- |
| running | run  |
| runs    | run  |
| ran     | run  |
| runner  | run  |
```

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

```
He is running fast and ran past everyone.
```

After preprocessing:

```
running fast ran past everyone
```

Vocabulary:

```
running, ran, past, fast, everyone
```

All word forms treated separately.

### With Stemming

Using PorterStemmer:

```
from nltk.stem import PorterStemmer
ps = PorterStemmer()
doc = [ps.stem(word) for word in doc]
```

The sentence becomes:

```
run fast run past everyon
```

Vocabulary:

```
run, fast, past, everyon
```

Now “running” and “ran” map to the same feature (“run”), reducing dimensionality and improving consistency.

### 5. Full Code: BoW with Stemming
--------------------------------

```python
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
```

### 6. Why BoW Creates Huge Sparse Matrices
----------------------------------------

If you choose something like:

```python
CountVectorizer(ngram_range=(3,3))
```

You’re generating **trigrams (3-word sequences)**.

Even a small corpus generates **thousands of unique trigrams**.

So you end up with a matrix like:

```
(500 sentences × 20,000 trigrams)
```

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