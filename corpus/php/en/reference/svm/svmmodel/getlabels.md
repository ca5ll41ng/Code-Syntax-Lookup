---
id: "en-php-function-svmmodel-getlabels"
language: "php"
lang: "en"
category: "function"
name: "SVMModel::getLabels"
title: "Get the labels the model was trained on"
signature: "public array SVMModel::getLabels()"
module: "svm"
source_url: "https://www.php.net/manual/en/svmmodel.getlabels.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the labels the model was trained on

## Description

```php
public array SVMModel::getLabels()
```

Return an array of labels that the model was trained on. For regression and one class models an empty array is returned.

## Parameters

This function has no parameters.

## Return Values

Return an array of labels

## See Also

 `SVMModel::getNrClass()`
