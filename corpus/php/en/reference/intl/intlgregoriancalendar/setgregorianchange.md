---
id: "en-php-function-intlgregoriancalendar-setgregorianchange"
language: "php"
lang: "en"
category: "function"
name: "IntlGregorianCalendar::setGregorianChange"
title: "Set the Gregorian Calendar change date"
signature: "public bool IntlGregorianCalendar::setGregorianChange(float $timestamp)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlgregoriancalendar.setgregorianchange.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the Gregorian Calendar change date

## Description

Object-oriented style

```php
public bool IntlGregorianCalendar::setGregorianChange(float $timestamp)
```

Procedural style

```php
bool intlgregcal_set_gregorian_change(IntlGregorianCalendar $calendar, float $timestamp)
```

Sets the Gregorian Calendar change date. This is the point at which the calendar switches from Julian dates to Gregorian dates, expressed as a Unix timestamp in milliseconds.

## Parameters

- **`$calendar`** — An `IntlGregorianCalendar` instance.
- **`$timestamp`** — The Gregorian Calendar change date, expressed as a Unix timestamp in milliseconds.

## Return Values

Returns `true` on success or `false` on failure.
