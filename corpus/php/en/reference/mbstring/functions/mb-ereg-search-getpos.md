---
id: "en-php-function-function-mb-ereg-search-getpos"
language: "php"
lang: "en"
category: "function"
name: "mb_ereg_search_getpos"
title: "Returns start point for next regular expression match"
signature: "int mb_ereg_search_getpos()"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-ereg-search-getpos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns start point for next regular expression match

## Description

```php
int mb_ereg_search_getpos()
```

Returns the start point for the next regular expression match.

## Parameters

This function has no parameters.

## Return Values

`mb_ereg_search_getpos()` returns the point to start regular expression match for `mb_ereg_search()`, `mb_ereg_search_pos()`, `mb_ereg_search_regs()`. The position is represented by bytes from the head of string.

## Notes

> The internal encoding or the character encoding specified by `mb_regex_encoding()` will be used as the character encoding for this function.

## See Also

`mb_regex_encoding()` `mb_ereg_search_setpos()`
