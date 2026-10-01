---
id: "en-php-function-intlgregoriancalendar-isleapyear"
language: "php"
lang: "en"
category: "function"
name: "IntlGregorianCalendar::isLeapYear"
title: "Determine if the given year is a leap year"
signature: "public bool IntlGregorianCalendar::isLeapYear(int $year)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlgregoriancalendar.isleapyear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determine if the given year is a leap year

## Description

Object-oriented style

```php
public bool IntlGregorianCalendar::isLeapYear(int $year)
```

Procedural style

```php
bool intlgregcal_is_leap_year(IntlGregorianCalendar $calendar, int $year)
```

Determines whether the given `$year` is a leap year in the Gregorian calendar.

## Parameters

- **`$calendar`** — An `IntlGregorianCalendar` instance.
- **`$year`** — The year to check.

## Return Values

Returns `true` for leap years, `false` otherwise and on failure.
