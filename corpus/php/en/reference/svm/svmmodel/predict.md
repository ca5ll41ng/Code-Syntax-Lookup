---
id: "en-php-function-svmmodel-predict"
language: "php"
lang: "en"
category: "function"
name: "SVMModel::predict"
title: "Predict a value for previously unseen data"
signature: "public float SVMModel::predict(array $data)"
module: "svm"
source_url: "https://www.php.net/manual/en/svmmodel.predict.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predict a value for previously unseen data

## Description

```php
public float SVMModel::predict(array $data)
```

This function accepts an array of data and attempts to predict the class or regression value based on the model extracted from previously trained data.

## Parameters

- **`$data`** — The array to be classified. This should be a series of key => value pairs in increasing key order, but not necessarily continuous.

## Return Values

Float the predicted value. This will be a class label in the case of classification, a real value in the case of regression. Throws SVMException on error

## See Also

 `SVM::train()`
