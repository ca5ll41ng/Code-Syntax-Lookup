---
id: "en-php-function-function-mb-ereg"
language: "php"
lang: "en"
category: "function"
name: "mb_ereg"
title: "Regular expression match with multibyte support"
signature: "bool mb_ereg(string $pattern, string $string, array $matches = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-ereg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Regular expression match with multibyte support

## Description

```php
bool mb_ereg(string $pattern, string $string, array $matches = null)
```

Executes the regular expression match with multibyte support.

## Parameters

- **`$pattern`** — The search pattern.
- **`$string`** — The search `string`.
- **`$matches`** — If matches are found for parenthesized substrings of `$pattern` and the function is called with the third argument `$matches`, the matches will be stored in the elements of the array `$matches`. If no matches are found, `$matches` is set to an empty array. — `$matches[1]` will contain the substring which starts at the first left parenthesis; `$matches[2]` will contain the substring starting at the second, and so on. `$matches[0]` will contain a copy of the complete string matched.

## Return Values

Returns whether `$pattern` matches `$string`.

## Changelog

 {{{ 

|  |  |
| --- | --- |
| 8.0.0 | This function returns `true` on success now. Previously, it returned the byte length of the matched string if a match for `$pattern` was found in `$string` and `$matches` was passed. If the optional parameter `$matches` was not passed or the length of the matched string was `0`, this function returned `1`. |
| 7.1.0 | `mb_ereg()` will now set `$matches` to an empty `array`, if nothing matched. Formerly, `$matches` was not modified in that case. |

 }}} 

## Notes

> The internal encoding or the character encoding specified by `mb_regex_encoding()` will be used as the character encoding for this function.

## See Also

`mb_regex_encoding()` `mb_eregi()`
