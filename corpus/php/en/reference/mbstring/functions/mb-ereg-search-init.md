---
id: "en-php-function-function-mb-ereg-search-init"
language: "php"
lang: "en"
category: "function"
name: "mb_ereg_search_init"
title: "Setup string and regular expression for a multibyte regular expression match"
signature: "bool mb_ereg_search_init(string $string, string|null $pattern = null, string|null $options = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-ereg-search-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Setup string and regular expression for a multibyte regular expression match

## Description

```php
bool mb_ereg_search_init(string $string, string|null $pattern = null, string|null $options = null)
```

`mb_ereg_search_init()` sets `$string` and `$pattern` for a multibyte regular expression. These values are used for `mb_ereg_search()`, `mb_ereg_search_pos()`, and `mb_ereg_search_regs()`.

## Parameters

- **`$string`** — The search string.
- **`$pattern`** — The search pattern.
- **`$options`** — The search option. See `mb_regex_set_options()` for explanation.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$pattern` and `$options` are nullable now. |

## Notes

> The internal encoding or the character encoding specified by `mb_regex_encoding()` will be used as the character encoding for this function.

## See Also

`mb_regex_encoding()` `mb_ereg_search_regs()`
