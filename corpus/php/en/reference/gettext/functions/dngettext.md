---
id: "en-php-function-function-dngettext"
language: "php"
lang: "en"
category: "function"
name: "dngettext"
title: "Plural version of dgettext"
signature: "string dngettext(string $domain, string $singular, string $plural, int $count)"
module: "gettext"
source_url: "https://www.php.net/manual/en/function.dngettext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Plural version of dgettext

## Description

```php
string dngettext(string $domain, string $singular, string $plural, int $count)
```

The `dngettext()` function allows you to override the current `$domain` for a single plural message lookup.

## Parameters

- **`$domain`** — The domain
- **`$singular`**
- **`$plural`**
- **`$count`**

## Return Values

A `string` on success.

## Errors/Exceptions

Throws a ValueError if `$domain` is the empty `string`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Now throws a ValueError if `$domain` is the empty `string`. |

## See Also

`ngettext()`
