---
id: "en-php-function-function-iconv-strrpos"
language: "php"
lang: "en"
category: "function"
name: "iconv_strrpos"
title: "Finds the last occurrence of a needle within a haystack"
signature: "int|false iconv_strrpos(string $haystack, string $needle, string|null $encoding = null)"
module: "iconv"
source_url: "https://www.php.net/manual/en/function.iconv-strrpos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Finds the last occurrence of a needle within a haystack

## Description

```php
int|false iconv_strrpos(string $haystack, string $needle, string|null $encoding = null)
```

Finds the last occurrence of a `$needle` within a `$haystack`.

In contrast to `strrpos()`, the return value of `iconv_strrpos()` is the number of characters that appear before the needle, rather than the offset in bytes to the position where the needle has been found. The characters are counted on the basis of the specified character set `$encoding`.

## Parameters

- **`$haystack`** — The entire string.
- **`$needle`** — The searched substring.
- **`$encoding`** — If `$encoding` parameter is omitted or `null`, `$string` are assumed to be encoded in iconv.internal_encoding.

If `$haystack` or `$needle` is not a string, it is converted to a string and applied as the ordinal value of a character.

## Return Values

Returns the numeric position of the last occurrence of `$needle` in `$haystack`.

If `$needle` is not found, `iconv_strrpos()` will return `false`.

> This function may return Boolean `false`, but may also return a non-Boolean value which evaluates to `false`. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$encoding` is nullable now. |

## See Also

`strrpos()` `iconv_strpos()` `mb_strrpos()`
