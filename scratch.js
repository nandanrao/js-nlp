const fs = require('fs')
const papa = require('papaparse')
const _ = require('lodash')
const natural = require('\
var res = papa.parse(fs.readFileSync('migrant_labelled.csv', 'utf-8'), { header: true})
var data = res.data.slice(0, 4123)
var train = data.slice(0,3500)
var test = data.slice(3500)

var classifier = new natural.BayesClassifier();
train.forEach(({label, body}) => classifier.addDocument(body, label))
classifier.train()

var guesses = test.map(({body, label}) => classifier.classify(body))
var labels = test.map(({body, label}) => label)
