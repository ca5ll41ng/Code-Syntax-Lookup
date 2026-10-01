---
id: "en-php-function-intlcalendar-getminimum"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getMinimum"
title: "Get the global minimum value for a field"
signature: "public int|false IntlCalendar::getMinimum(int $field)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getminimum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the global minimum value for a field

## Description

Object-oriented style

```php
public int|false IntlCalendar::getMinimum(int $field)
```

Procedural style

```php
int|false intlcal_get_minimum(IntlCalendar $calendar, int $field)
```

Gets the global minimum for a field, in this specific calendar. This value is smaller or equal to that returned by `IntlCalendar::getActualMinimum()`, which is in its turn smaller or equal to that returned by `IntlCalendar::getGreatestMinimum()`. For the Gregorian calendar, these three functions always return the same value (for each field).

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$field`**

## Return Values

An `int` representing a value for the given field in the fieldʼs unit or `false` on failure.
