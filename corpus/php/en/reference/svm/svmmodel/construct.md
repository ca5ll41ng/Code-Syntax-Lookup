---
id: "en-php-function-svmmodel-construct"
language: "php"
lang: "en"
category: "function"
name: "SVMModel::__construct"
title: "Construct a new SVMModel"
signature: "public SVMModel::__construct([string $filename = ...])"
module: "svm"
source_url: "https://www.php.net/manual/en/svmmodel.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new SVMModel

## Description

```php
public SVMModel::__construct([string $filename = ...])
```

Build a new SVMModel. Models will usually be created from the SVM::train function, but then saved models may be restored directly.

## Parameters

- **`$filename`** — The filename for the saved model file this model should load.

## Errors/Exceptions

Throws a `SVMException` on error

## See Also

 `SVMModel::load()`
