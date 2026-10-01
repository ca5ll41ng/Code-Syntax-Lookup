---
id: "en-php-function-intltimezone-getianaid"
language: "php"
lang: "en"
category: "function"
name: "IntlTimeZone::getIanaID"
aliases: ["intltz_get_iana_id"]
title: "Translate a timezone identifier to its IANA equivalent"
signature: "public static string|false IntlTimeZone::getIanaID(string $timezoneId)"
module: "intl"
source_url: "https://www.php.net/manual/en/intltimezone.getianaid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Translate a timezone identifier to its IANA equivalent

## Description

Object-oriented style (method):

```php
public static string|false IntlTimeZone::getIanaID(string $timezoneId)
```

Procedural style:

```php
string|false intltz_get_iana_id(string $timezoneId)
```

Translates a timezone identifier to its IANA equivalent. For example, `"GMT"` returns `"Etc/GMT"`, and `"US/Eastern"` returns `"America/New_York"`.

> This function requires ICU version >= 74.

## Parameters

- **`$timezoneId`** — The timezone identifier to translate.

## Return Values

Returns the IANA timezone identifier as a `string`, or `false` on failure.

## See Also

 `intltz_get_id_for_windows_id()` `intltz_get_windows_id()` `intltz_create_time_zone()`
