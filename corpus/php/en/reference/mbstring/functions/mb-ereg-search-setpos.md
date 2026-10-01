---
id: "en-php-function-function-mb-ereg-search-setpos"
language: "php"
lang: "en"
category: "function"
name: "mb_ereg_search_setpos"
title: "Set start point of next regular expression match"
signature: "bool mb_ereg_search_setpos(int $offset)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-ereg-search-setpos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set start point of next regular expression match

## Description

```php
bool mb_ereg_search_setpos(int $offset)
```

`mb_ereg_search_setpos()` sets the starting point of a match for `mb_ereg_search()`.

## Parameters

- **`$offset`** — The position to set. If it is negative, it counts from the end of the string.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 7.1.0 | Support for negative `$offset`s has been added. |

## Notes

> The internal encoding or the character encoding specified by `mb_regex_encoding()` will be used as the character encoding for this function.

## See Also

`mb_regex_encoding()` `mb_ereg_search_init()`
