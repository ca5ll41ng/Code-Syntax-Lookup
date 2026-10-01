---
id: "en-php-function-svmmodel-predict-probability"
language: "php"
lang: "en"
category: "function"
name: "SVMModel::predict_probability"
title: "Return class probabilities for previous unseen data"
signature: "public float SVMModel::predict_probability(array $data)"
module: "svm"
source_url: "https://www.php.net/manual/en/svmmodel.predict-probability.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return class probabilities for previous unseen data

## Description

```php
public float SVMModel::predict_probability(array $data)
```

This function accepts an array of data and attempts to predict the class, as with the predict function. Additionally, however, this function returns an array of probabilities, one per class in the model, which represent the estimated chance of the data supplied being a member of that class. Requires that the model to be used has been trained with the probability parameter set to true.

## Parameters

- **`$data`** — The array to be classified. This should be a series of key => value pairs in increasing key order, but not necessarily continuous.
- **`$probabilities`** — The supplied value will be filled with the probabilities. This will be either null, in the case of a model without probability information, or an array where the index is the class name and the value the predicted probability.

## Return Values

Float the predicted value. This will be a class label in the case of classification, a real value in the case of regression. Throws SVMException on error

## See Also

 `SVM::predict()`
