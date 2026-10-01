---
id: "en-php-function-intltimezone-getwindowsid"
language: "php"
lang: "en"
category: "function"
name: "IntlTimeZone::getWindowsID"
aliases: ["intltz_get_windows_id"]
title: "Translate a system timezone into a Windows timezone"
signature: "public static string|false IntlTimeZone::getWindowsID(string $timezoneId)"
module: "intl"
source_url: "https://www.php.net/manual/en/intltimezone.getwindowsid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Translate a system timezone into a Windows timezone

## Description

Object-oriented style (method):

```php
public static string|false IntlTimeZone::getWindowsID(string $timezoneId)
```

Procedural style:

```php
string|false intltz_get_windows_id(string $timezoneId)
```

Translates a system timezone (e.g. "America/Los_Angeles") into a Windows timezone (e.g. "Pacific Standard Time").

> This function requires ICU version ≥ 52.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$timezoneId`**

## Return Values

Returns the Windows timezone or `false` on failure.

## See Also

`IntlTimeZone::getIDForWindowsID()`
