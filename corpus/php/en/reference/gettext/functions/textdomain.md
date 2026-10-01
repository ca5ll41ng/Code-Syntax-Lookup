---
id: "en-php-function-function-textdomain"
language: "php"
lang: "en"
category: "function"
name: "textdomain"
title: "Sets the default domain"
signature: "string textdomain(string|null $domain = null)"
module: "gettext"
source_url: "https://www.php.net/manual/en/function.textdomain.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the default domain

## Description

```php
string textdomain(string|null $domain = null)
```

This function sets the domain to search within when calls are made to `gettext()`, usually the named after an application.

## Parameters

- **`$domain`** — The new message domain, or `null` to get the current setting without changing it

## Return Values

If successful, this function returns the current message domain, after possibly changing it.

## Errors/Exceptions

Throws a ValueError if `$domain` is the empty `string`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Now throws a ValueError if `$domain` is the empty `string`. |
| 8.4.0 | `$domain` is optional now. Previously, the parameter always had to be specified. |

## Notes

> The `textdomain()` information is maintained per process, not per thread.
