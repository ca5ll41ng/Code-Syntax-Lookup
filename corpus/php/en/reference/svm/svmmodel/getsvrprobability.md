---
id: "en-php-function-svmmodel-getsvrprobability"
language: "php"
lang: "en"
category: "function"
name: "SVMModel::getSvrProbability"
title: "Get the sigma value for regression types"
signature: "public float SVMModel::getSvrProbability()"
module: "svm"
source_url: "https://www.php.net/manual/en/svmmodel.getsvrprobability.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the sigma value for regression types

## Description

```php
public float SVMModel::getSvrProbability()
```

For regression models, returns a sigma value. If there is no probability information or the model is not SVR, 0 is returned.

## Parameters

This function has no parameters.

## Return Values

Returns a sigma value
