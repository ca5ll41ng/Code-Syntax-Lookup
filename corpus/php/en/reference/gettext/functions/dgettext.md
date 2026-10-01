---
id: "en-php-function-function-dgettext"
language: "php"
lang: "en"
category: "function"
name: "dgettext"
title: "Override the current domain"
signature: "string dgettext(string $domain, string $message)"
module: "gettext"
source_url: "https://www.php.net/manual/en/function.dgettext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Override the current domain

## Description

```php
string dgettext(string $domain, string $message)
```

The `dgettext()` function allows you to override the current `$domain` for a single message lookup.

## Parameters

- **`$domain`** — The domain
- **`$message`** — The message

## Return Values

A `string` on success.

## Errors/Exceptions

Throws a ValueError if `$domain` is the empty `string`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Now throws a ValueError if `$domain` is the empty `string`. |

## See Also

`gettext()`
