---
id: "en-php-function-function-mb-ereg-search-pos"
language: "php"
lang: "en"
category: "function"
name: "mb_ereg_search_pos"
title: "Returns position and length of a matched part of the multibyte regular expression for a predefined multibyte string"
signature: "array|false mb_ereg_search_pos(string|null $pattern = null, string|null $options = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-ereg-search-pos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns position and length of a matched part of the multibyte regular expression for a predefined multibyte string

## Description

```php
array|false mb_ereg_search_pos(string|null $pattern = null, string|null $options = null)
```

Returns position and length of a matched part of the multibyte regular expression for a predefined multibyte string

The string for match is specified by `mb_ereg_search_init()`. If it is not specified, the previous one will be used.

## Parameters

- **`$pattern`** — The search pattern.
- **`$options`** — The search option. See `mb_regex_set_options()` for explanation.

## Return Values

An `array` containing two elements. The first element is the offset, in bytes, where the match begins relative to the start of the search string, and the second element is the length in bytes of the match.

If an error occurs, `false` is returned.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$pattern` and `$options` are nullable now. |

## Notes

> The internal encoding or the character encoding specified by `mb_regex_encoding()` will be used as the character encoding for this function.

## See Also

`mb_regex_encoding()` `mb_ereg_search_init()`
