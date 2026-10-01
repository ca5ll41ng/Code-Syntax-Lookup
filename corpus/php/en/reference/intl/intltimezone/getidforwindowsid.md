---
id: "en-php-function-intltimezone-getidforwindowsid"
language: "php"
lang: "en"
category: "function"
name: "IntlTimeZone::getIDForWindowsID"
aliases: ["intltz_get_id_for_windows_id"]
title: "Translate a Windows timezone into a system timezone"
signature: "public static string|false IntlTimeZone::getIDForWindowsID(string $timezoneId, string|null $region = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/intltimezone.getidforwindowsid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Translate a Windows timezone into a system timezone

## Description

Object-oriented style (method):

```php
public static string|false IntlTimeZone::getIDForWindowsID(string $timezoneId, string|null $region = null)
```

Procedural style:

```php
string|false intltz_get_id_for_windows_id(string $timezoneId, string|null $region = null)
```

Translates a Windows timezone (e.g. "Pacific Standard Time") into a system timezone (e.g. "America/Los_Angeles").

> This function requires ICU version ≥ 52.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$timezoneId`**
- **`$region`**

## Return Values

Returns the system timezone or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$region` is now nullable. |

## See Also

`IntlTimeZone::getWindowsID()`
