---
id: "en-php-function-intltimezone-createtimezoneidenumeration"
language: "php"
lang: "en"
category: "function"
name: "IntlTimeZone::createTimeZoneIDEnumeration"
aliases: ["intltz_create_time_zone_id_enumeration"]
title: "Get an enumeration over system time zone IDs with the given filter conditions"
signature: "public static IntlIterator|false IntlTimeZone::createTimeZoneIDEnumeration(int $type, string|null $region = null, int|null $rawOffset = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/intltimezone.createtimezoneidenumeration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get an enumeration over system time zone IDs with the given filter conditions

## Description

Object-oriented style (method):

```php
public static IntlIterator|false IntlTimeZone::createTimeZoneIDEnumeration(int $type, string|null $region = null, int|null $rawOffset = null)
```

Procedural style:

```php
IntlIterator|false intltz_create_time_zone_id_enumeration(int $type, string|null $region = null, int|null $rawOffset = null)
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$type`**
- **`$region`**
- **`$rawOffset`**

## Return Values

Returns `IntlIterator` or `false` on failure.
