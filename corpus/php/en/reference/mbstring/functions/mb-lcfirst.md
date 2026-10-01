---
id: "en-php-function-function-mb-lcfirst"
language: "php"
lang: "en"
category: "function"
name: "mb_lcfirst"
title: "Make a string's first character lowercase"
signature: "string mb_lcfirst(string $string, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-lcfirst.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make a string's first character lowercase

## Description

```php
string mb_lcfirst(string $string, string|null $encoding = null)
```

Performs a multi-byte safe `lcfirst()` operation, and returns a string with the first character of `$string` lowercased.

## Parameters

- **`$string`** — The input string.
- **`$encoding`** — The `$encoding` parameter is the character encoding. If it is omitted or `null`, the internal character encoding value will be used.

## Return Values

Returns the resulting string.

## See Also

 `mb_ucfirst()` `lcfirst()`
