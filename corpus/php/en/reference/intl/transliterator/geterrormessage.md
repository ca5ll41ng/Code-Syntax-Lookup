---
id: "en-php-function-transliterator-geterrormessage"
language: "php"
lang: "en"
category: "function"
name: "Transliterator::getErrorMessage"
aliases: ["transliterator_get_error_message"]
title: "Get last error message"
signature: "public string Transliterator::getErrorMessage()"
module: "intl"
source_url: "https://www.php.net/manual/en/transliterator.geterrormessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get last error message

## Description

Object-oriented style

```php
public string Transliterator::getErrorMessage()
```

Procedural style

```php
string transliterator_get_error_message(Transliterator $transliterator)
```

Gets the last error message for this transliterator.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$transliterator`**

## Return Values

The error message on success, or `false` if none exists, or on failure.

## See Also

`Transliterator::getErrorCode()` `Transliterator::listIDs()`
