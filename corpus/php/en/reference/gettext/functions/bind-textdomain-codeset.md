---
id: "en-php-function-function-bind-textdomain-codeset"
language: "php"
lang: "en"
category: "function"
name: "bind_textdomain_codeset"
title: "Specify or get the character encoding in which the messages from the DOMAIN message catalog will be returned"
signature: "string|false bind_textdomain_codeset(string $domain, string|null $codeset = null)"
module: "gettext"
source_url: "https://www.php.net/manual/en/function.bind-textdomain-codeset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specify or get the character encoding in which the messages from the DOMAIN message catalog will be returned

## Description

```php
string|false bind_textdomain_codeset(string $domain, string|null $codeset = null)
```

`bind_textdomain_codeset()` allows to set or get the encoding in which messages from `$domain` will be returned by `gettext()` and similar functions.

## Parameters

- **`$domain`** — The domain.
- **`$codeset`** — The code set. If `null`, the currently set encoding is returned.

## Return Values

A `string` on success.

## Errors/Exceptions

Throws a ValueError if `$domain` is the empty `string`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Now throws a ValueError if `$domain` is the empty `string`. |
| 8.4.0 | `$codeset` is optional now. Previously, the parameter always had to be specified. |
| 8.0.3 | `$codeset` is nullable now. Previously, it was not possible to retrieve the currently set encoding. |

## Notes

> The `bind_textdomain_codeset()` information is maintained per process, not per thread.
