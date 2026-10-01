---
id: "en-php-function-function-mb-regex-encoding"
language: "php"
lang: "en"
category: "function"
name: "mb_regex_encoding"
title: "Set/Get character encoding for multibyte regex"
signature: "string|bool mb_regex_encoding(string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/en/function.mb-regex-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set/Get character encoding for multibyte regex

## Description

```php
string|bool mb_regex_encoding(string|null $encoding = null)
```

Set/Get character encoding for a multibyte regex.

## Parameters

- **`$encoding`** — The `$encoding` parameter is the character encoding. If it is omitted or `null`, the internal character encoding value will be used.

## Return Values

If `$encoding` is set, then Returns `true` on success or `false` on failure. In this case, the internal character encoding is NOT changed. If `$encoding` is omitted, then the current character encoding name for a multibyte regex is returned.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$encoding` is nullable now. |

## See Also

`mb_internal_encoding()` `mb_ereg()`
