---
id: "en-php-function-function-mb-ereg-match"
language: "php"
lang: "en"
category: "function"
name: "mb_ereg_match"
title: "Regular expression match for multibyte string"
signature: "bool mb_ereg_match(string $pattern, string $string, string|null $options = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-ereg-match.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Regular expression match for multibyte string

## Description

```php
bool mb_ereg_match(string $pattern, string $string, string|null $options = null)
```

A regular expression match for a multibyte string

> `$pattern` is only matched at the beginning of `$string`.

## Parameters

- **`$pattern`** — The regular expression pattern.
- **`$string`** — The `string` being evaluated.
- **`$options`** — The search option. See `mb_regex_set_options()` for explanation.

## Return Values

Returns `true` if `$string` matches the regular expression `$pattern`, `false` if not.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$options` is nullable now. |

## Notes

> The internal encoding or the character encoding specified by `mb_regex_encoding()` will be used as the character encoding for this function.

## See Also

`mb_regex_encoding()` `mb_ereg()`
