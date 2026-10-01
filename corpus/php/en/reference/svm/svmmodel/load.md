---
id: "en-php-function-svmmodel-load"
language: "php"
lang: "en"
category: "function"
name: "SVMModel::load"
title: "Load a saved SVM Model"
signature: "public bool SVMModel::load(string $filename)"
module: "svm"
source_url: "https://www.php.net/manual/en/svmmodel.load.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Load a saved SVM Model

## Description

```php
public bool SVMModel::load(string $filename)
```

Load a model file ready for classification or regression.

## Parameters

- **`$filename`** — The filename of the model.

## Return Values

Throws SVMException on error. Returns true on success.

## See Also

 `SVMModel::save()`
