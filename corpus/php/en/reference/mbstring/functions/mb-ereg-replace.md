---
id: "en-php-function-function-mb-ereg-replace"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["redos"],"cwe":["CWE-1333"],"params":[1]}
name: "mb_ereg_replace"
title: "Replace regular expression with multibyte support"
signature: "string|false|null mb_ereg_replace(string $pattern, string $replacement, string $string, string|null $options = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-ereg-replace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replace regular expression with multibyte support

## Description

```php
string|false|null mb_ereg_replace(string $pattern, string $replacement, string $string, string|null $options = null)
```

Scans `$string` for matches to `$pattern`, then replaces the matched text with `$replacement`

## Parameters

- **`$pattern`** — The regular expression pattern. — Multibyte characters may be used in `$pattern`.
- **`$replacement`** — The replacement text.
- **`$string`** — The `string` being checked.
- **`$options`** — The search option. See `mb_regex_set_options()` for explanation.

## Return Values

The resultant `string` on success, or `false` on error. If `$string` is not valid for the current encoding, `null` is returned.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$options` is nullable now. |
| 7.1.0 | The function checks whether `$string` is valid for the current encoding. |
| 7.1.0 | The `e` modifier has been deprecated. |

## Notes

> The internal encoding or the character encoding specified by `mb_regex_encoding()` will be used as the character encoding for this function.

> Never use the `e` modifier when working on untrusted input. No automatic escaping will happen (as known from `preg_replace()`). Not taking care of this will most likely create remote code execution vulnerabilities in your application.

## See Also

`mb_regex_encoding()` `mb_eregi_replace()`
