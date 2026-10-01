---
id: "en-php-function-function-mb-ereg-search"
language: "php"
lang: "en"
category: "function"
name: "mb_ereg_search"
title: "Multibyte regular expression match for predefined multibyte string"
signature: "bool mb_ereg_search(string|null $pattern = null, string|null $options = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-ereg-search.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Multibyte regular expression match for predefined multibyte string

## Description

```php
bool mb_ereg_search(string|null $pattern = null, string|null $options = null)
```

Performs a multibyte regular expression match for a predefined multibyte string.

## Parameters

- **`$pattern`** — The search pattern.
- **`$options`** — The search option. See `mb_regex_set_options()` for explanation.

## Return Values

`mb_ereg_search()` returns `true` if the multibyte string matches with the regular expression, or `false` otherwise. The `string` for matching is set by `mb_ereg_search_init()`. If `$pattern` is not specified, the previous one is used.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$pattern` and `$options` are nullable now. |

## Notes

> The internal encoding or the character encoding specified by `mb_regex_encoding()` will be used as the character encoding for this function.

## See Also

`mb_regex_encoding()` `mb_ereg_search_init()`
