---
id: "en-php-function-svmmodel-save"
language: "php"
lang: "en"
category: "function"
name: "SVMModel::save"
title: "Save a model to a file"
signature: "public bool SVMModel::save(string $filename)"
module: "svm"
source_url: "https://www.php.net/manual/en/svmmodel.save.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Save a model to a file

## Description

```php
public bool SVMModel::save(string $filename)
```

Save the model data to a file, for later use.

## Parameters

- **`$filename`** — The file to save the model to.

## Return Values

Throws SVMException on error. Returns true on success.

## See Also

 `SVMModel::load()`
