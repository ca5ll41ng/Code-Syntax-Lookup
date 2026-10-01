---
id: "en-php-function-intlgregoriancalendar-getgregorianchange"
language: "php"
lang: "en"
category: "function"
name: "IntlGregorianCalendar::getGregorianChange"
title: "Get the Gregorian Calendar change date"
signature: "public float IntlGregorianCalendar::getGregorianChange()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlgregoriancalendar.getgregorianchange.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the Gregorian Calendar change date

## Description

Object-oriented style

```php
public float IntlGregorianCalendar::getGregorianChange()
```

Procedural style

```php
float intlgregcal_get_gregorian_change(IntlGregorianCalendar $calendar)
```

Gets the Gregorian Calendar change date. This is the point at which the calendar switches from Julian dates to Gregorian dates, expressed as a Unix timestamp in milliseconds. It defaults to midnight (UTC) on October 15, 1582.

## Parameters

- **`$calendar`** — An `IntlGregorianCalendar` instance.

## Return Values

Returns the change date.
