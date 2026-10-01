---
id: "en-php-function-intlcalendar-setminimaldaysinfirstweek"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::setMinimalDaysInFirstWeek"
title: "Set minimal number of days the first week in a year or month can have"
signature: "public true IntlCalendar::setMinimalDaysInFirstWeek(int $days)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.setminimaldaysinfirstweek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set minimal number of days the first week in a year or month can have

## Description

Object-oriented style

```php
public true IntlCalendar::setMinimalDaysInFirstWeek(int $days)
```

Procedural style

```php
true intlcal_set_minimal_days_in_first_week(IntlCalendar $calendar, int $days)
```

Sets the smallest number of days the first week of a year or month must have in the new year or month. For instance, in the Gregorian calendar, if this value is 1, then the first week of the year will necessarily include January 1st, while if this value is 7, then the week with January 1st will be the first week of the year only if the day of the week for January 1st matches the day of the week returned by `IntlCalendar::getFirstDayOfWeek()`; otherwise it will be the previous yearʼs last week.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$days`** — The number of minimal days to set.

## Return Values

Always returns `true`.

## Errors/Exceptions

`ValueError` if `$days` is out of range (less than `1` or more than `7`).

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | A `ValueError` is now thrown on invalid input. Previously, `false` was returned. |
