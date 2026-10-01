---
id: "en-php-function-intlcalendar-getactualmaximum"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getActualMaximum"
title: "The maximum value for a field, considering the objectʼs current time"
signature: "public int|false IntlCalendar::getActualMaximum(int $field)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getactualmaximum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The maximum value for a field, considering the objectʼs current time

## Description

Object-oriented style

```php
public int|false IntlCalendar::getActualMaximum(int $field)
```

Procedural style

```php
int|false intlcal_get_actual_maximum(IntlCalendar $calendar, int $field)
```

Returns a fieldʼs relative maximum value around the current time. The exact semantics vary by field, but in the general case this is the value that would be obtained if one would set the field value into the smallest relative maximum for the field and would increment it until reaching the global maximum or the field value wraps around, in which the value returned would be the global maximum or the value before the wrapping, respectively.

For instance, in the gregorian calendar, the actual maximum value for the day of month would vary between `28` and `31`, depending on the month and year of the current time.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$field`**

## Return Values

An `int` representing the maximum value in the units associated with the given `$field` or `false` on failure.

## Examples

**`IntlCalendar::getActualMaximum()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');

$cal = IntlCalendar::fromDateTime('2013-02-15');
var_dump($cal->getActualMaximum(IntlCalendar::FIELD_DAY_OF_MONTH)); //28

$cal->add(IntlCalendar::FIELD_EXTENDED_YEAR, -1);
var_dump($cal->getActualMaximum(IntlCalendar::FIELD_DAY_OF_MONTH)); //29

    
```

The above example will output:

```text


int(28)
int(29)

    
```

## See Also

`IntlCalendar::getMaximum()` `IntlCalendar::getLeastMaximum()` `IntlCalendar::getActualMinimum()`
