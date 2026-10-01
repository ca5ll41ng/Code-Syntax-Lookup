---
id: "en-php-function-svm-train"
language: "php"
lang: "en"
category: "function"
name: "SVM::train"
title: "Create a SVMModel based on training data"
signature: "public SVMModel svm::train(array $problem, [array $weights = ...])"
module: "svm"
source_url: "https://www.php.net/manual/en/svm.train.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a SVMModel based on training data

## Description

```php
public SVMModel svm::train(array $problem, [array $weights = ...])
```

Train a support vector machine based on the supplied training data.

## Parameters

- **`$problem`** — The problem can be provided in three different ways. An array, where the data should start with the class label (usually 1 or -1) then followed by a sparse data set of dimension => data pairs. A URL to a file containing a SVM Light formatted problem, with the each line being a new training example, the start of each line containing the class (1, -1) then a series of tab separated data values shows as key:value. A opened stream pointing to a data source formatted as in the file above.
- **`$weights`** — Weights are an optional set of weighting parameters for the different classes, to help account for unbalanced training sets. For example, if the classes were 1 and -1, and -1 had significantly more example than one, the weight for -1 could be 0.5. Weights should be in the range 0-1.

## Return Values

Returns an SVMModel that can be used to classify previously unseen data. Throws SVMException on error
