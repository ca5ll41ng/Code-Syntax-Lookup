---
id: "en-php-function-transliterator-geterrorcode"
language: "php"
lang: "en"
category: "function"
name: "Transliterator::getErrorCode"
aliases: ["transliterator_get_error_code"]
title: "Get last error code"
signature: "public int Transliterator::getErrorCode()"
module: "intl"
source_url: "https://www.php.net/manual/en/transliterator.geterrorcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get last error code

## Description

Object-oriented style

```php
public int Transliterator::getErrorCode()
```

Procedural style

```php
int transliterator_get_error_code(Transliterator $transliterator)
```

Gets the last error code for this transliterator.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$transliterator`**

## Return Values

The error code on success, or `false` if none exists, or on failure.

## See Also

`Transliterator::getErrorMessage()` `Transliterator::listIDs()`
