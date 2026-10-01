---
id: "en-php-function-function-mb-ereg-search-regs"
language: "php"
lang: "en"
category: "function"
name: "mb_ereg_search_regs"
title: "Returns the matched part of a multibyte regular expression"
signature: "array|false mb_ereg_search_regs(string|null $pattern = null, string|null $options = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-ereg-search-regs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the matched part of a multibyte regular expression

## Description

```php
array|false mb_ereg_search_regs(string|null $pattern = null, string|null $options = null)
```

Returns the matched part of a multibyte regular expression.

## Parameters

- **`$pattern`** — The search pattern.
- **`$options`** — The search option. See `mb_regex_set_options()` for explanation.

## Return Values

`mb_ereg_search_regs()` executes the multibyte regular expression match, and if there are some matched part, it returns an `array` including substring of matched part as first element, the first grouped part with brackets as second element, the second grouped part as third element, and so on. It returns `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$pattern` and `$options` are nullable now. |

## Notes

> The internal encoding or the character encoding specified by `mb_regex_encoding()` will be used as the character encoding for this function.

## See Also

`mb_regex_encoding()` `mb_ereg_search_init()`
