slidenumbers: true
autoscale: true

# NLP with Javascript!

---

# Natural Language Processing

Turning language into numbers

---


# Preprocessing

* This is key. Lowercase? Split? Tokenize? Stem? Lemmatization?
* Most of your work is spent considering preprocessing

---


# Tokenizing


```{js}
WordTokenizer().tokenize("She said 'hello'.")
// ['She', 'said', 'hello']
```

---


# Stemming

* "gaming" -> "game"
* "game" -> "game"

---

# Lemmatization

Like stemming but takes into account the part-of-speach

---

# Word Count Vector

* Make a vector, where each index represents a word, and the value represents

```{js}
bow("boar like chocolate", voc)
// [ 0, 1, 1, 0, 0, 1, 0, 0, 0 ]
bow("Ragu is great and I like it", voc))
// [ 1, 1, 0, 1, 1, 0, 1, 0, 0 ]
```

---

# TFIDF

* This is a word count, but we down-weight words that are common, and upweight words that are rare.

---


# Naive Bayes

Why is it naive? Doesn't take into account correlations.

---

# Naive Bayes

Train-time:

1. Consider a given word ('foo')
2. Count the number of times foo shows up in class A
3. Count the number of times foo shows up in class B

---

# Naive Bayes

Predict-time:
1. Get an array of words
2. For each word, see how many times it shows up in each class
3. Turn this into a probability.
4. Guess the class with the highest probability

---


# Naive Bayes

Example:

* "foo": { A: 5, B: 2 }, "beach": {A:1, B:1}
* "foo goes to the beach"

$$
\frac{(5/7 + 1/2) }{9}
$$

---

# Errors!

The most important in all ML is measuring our error.

---


# Train/Test set

This is the magic of ML

---


# Overfitting

This is why we have a test set!

---


# Cross-Validation

* It has pluses and minuses
* Better use of training data (more accurate predictor, closer to actual predictor you will use in production)
* Less-strong theoretical guarantees

---


# Precision and Recalll

* These are two common measurements.
* Precision measures "of all the 1's you guessed, how many were actually 1's"
* Recall measures "of all the 1's that exist, how many did you guess were 1"

---

# More!

* Word Embeddings, RNN's, etc..

---

# Workshop

https://github.com/nandanrao/js-nlp

* Add precision/recall
* Try another classifier
* Add precprocessing (twitter! http tags!)
* Other libraries!
