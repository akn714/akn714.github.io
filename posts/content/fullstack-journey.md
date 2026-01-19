
# NLP for ML and DL

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

