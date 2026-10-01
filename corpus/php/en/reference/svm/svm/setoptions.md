---
id: "en-php-function-svm-setoptions"
language: "php"
lang: "en"
category: "function"
name: "SVM::setOptions"
title: "Set training parameters"
signature: "public bool SVM::setOptions(array $params)"
module: "svm"
source_url: "https://www.php.net/manual/en/svm.setoptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set training parameters

## Description

```php
public bool SVM::setOptions(array $params)
```

Set one or more training parameters.

## Parameters

- **`$params`** — An array of training parameters, keyed on the SVM constants.

## Return Values

Return true on success, throws SVMException on error.
