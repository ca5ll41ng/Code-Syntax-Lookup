---
id: "en-php-function-function-mb-ucfirst"
language: "php"
lang: "en"
category: "function"
name: "mb_ucfirst"
title: "Make a string's first character uppercase"
signature: "string mb_ucfirst(string $string, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-ucfirst.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Make a string's first character uppercase

## Description

```php
string mb_ucfirst(string $string, string|null $encoding = null)
```

Performs a multi-byte safe `ucfirst()` operation, and returns a string with the first character of `$string` title-cased.

## Parameters

- **`$string`** — The input string.
- **`$encoding`** — The string encoding.

## Return Values

Returns the resulting string.

## Notes

> By contrast to the standard case folding functions such as `strtolower()` and `strtoupper()`, case folding is performed on the basis of the Unicode character properties. Thus the behaviour of this function is not affected by locale settings and it can convert any characters that have 'alphabetic' property, such a-umlaut (ä).

For more information about the Unicode properties, please see []().

## See Also

 `mb_lcfirst()` `mb_convert_case()` `ucfirst()`
