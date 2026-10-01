---
id: "en-php-function-intlcalendar-getmaximum"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getMaximum"
title: "Get the global maximum value for a field"
signature: "public int|false IntlCalendar::getMaximum(int $field)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getmaximum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the global maximum value for a field

## Description

Object-oriented style

```php
public int|false IntlCalendar::getMaximum(int $field)
```

Procedural style

```php
int|false intlcal_get_maximum(IntlCalendar $calendar, int $field)
```

Gets the global maximum for a field, in this specific calendar. This value is larger or equal to that returned by `IntlCalendar::getActualMaximum()`, which is in its turn larger or equal to that returned by `IntlCalendar::getLeastMaximum()`.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$field`**

## Return Values

An `int` representing a field value in the fieldʼs unit or `false` on failure.

## See Also

`IntlCalendar::getActualMaximum()` `IntlCalendar::getLeastMaximum()` `IntlCalendar::getMinimum()`
