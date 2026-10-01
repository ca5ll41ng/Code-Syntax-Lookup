---
id: "en-php-function-intlcalendar-getgreatestminimum"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getGreatestMinimum"
title: "Get the largest local minimum value for a field"
signature: "public int|false IntlCalendar::getGreatestMinimum(int $field)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getgreatestminimum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the largest local minimum value for a field

## Description

Object-oriented style

```php
public int|false IntlCalendar::getGreatestMinimum(int $field)
```

Procedural style

```php
int|false intlcal_get_greatest_minimum(IntlCalendar $calendar, int $field)
```

Returns the largest local minimum for a field. This should be a value larger or equal to that returned by `IntlCalendar::getActualMinimum()`, which is in its turn larger or equal to that returned by `IntlCalendar::getMinimum()`. All these three functions return the same value for the Gregorian calendar.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$field`**

## Return Values

An `int` representing a field value, in the fieldʼs unit, or `false` on failure.
