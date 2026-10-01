---
id: "en-php-function-function-mb-ereg-search-getregs"
language: "php"
lang: "en"
category: "function"
name: "mb_ereg_search_getregs"
title: "Retrieve the result from the last multibyte regular expression match"
signature: "array|false mb_ereg_search_getregs()"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-ereg-search-getregs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the result from the last multibyte regular expression match

## Description

```php
array|false mb_ereg_search_getregs()
```

Retrieve the result from the last multibyte regular expression match

## Parameters

This function has no parameters.

## Return Values

An `array` including the sub-string of matched part by last `mb_ereg_search()`, `mb_ereg_search_pos()`, `mb_ereg_search_regs()`. If there are some matches, the first element will have the matched sub-string, the second element will have the first part grouped with brackets, the third element will have the second part grouped with brackets, and so on. It returns `false` on error.

## Notes

> The internal encoding or the character encoding specified by `mb_regex_encoding()` will be used as the character encoding for this function.

## See Also

`mb_regex_encoding()` `mb_ereg_search_init()`
