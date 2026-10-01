---
id: "en-php-function-intlcalendar-getactualminimum"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getActualMinimum"
title: "The minimum value for a field, considering the objectʼs current time"
signature: "public int|false IntlCalendar::getActualMinimum(int $field)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getactualminimum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The minimum value for a field, considering the objectʼs current time

## Description

Object-oriented style

```php
public int|false IntlCalendar::getActualMinimum(int $field)
```

Procedural style

```php
int|false intlcal_get_actual_minimum(IntlCalendar $calendar, int $field)
```

Returns a fieldʼs relative minimum value around the current time. The exact semantics vary by field, but in the general case this is the value that would be obtained if one would set the field value into the greatest relative minimum for the field and would decrement it until reaching the global minimum or the field value wraps around, in which the value returned would be the global minimum or the value before the wrapping, respectively.

For the Gregorian calendar, this is always the same as `IntlCalendar::getMinimum()`.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$field`**

## Return Values

An `int` representing the minimum value in the fieldʼs unit or `false` on failure.

## See Also

`IntlCalendar::getMinimum()` `IntlCalendar::getGreatestMinimum()` `IntlCalendar::getActualMaximum()`
