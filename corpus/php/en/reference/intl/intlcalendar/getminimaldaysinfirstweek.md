---
id: "en-php-function-intlcalendar-getminimaldaysinfirstweek"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getMinimalDaysInFirstWeek"
title: "Get minimal number of days the first week in a year or month can have"
signature: "public int|false IntlCalendar::getMinimalDaysInFirstWeek()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getminimaldaysinfirstweek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get minimal number of days the first week in a year or month can have

## Description

Object-oriented style

```php
public int|false IntlCalendar::getMinimalDaysInFirstWeek()
```

Procedural style

```php
int|false intlcal_get_minimal_days_in_first_week(IntlCalendar $calendar)
```

Returns the smallest number of days the first week of a year or month must have in the new year or month. For instance, in the Gregorian calendar, if this value is 1, then the first week of the year will necessarily include January 1st, while if this value is 7, then the week with January 1st will be the first week of the year only if the day of the week for January 1st matches the day of the week returned by `IntlCalendar::getFirstDayOfWeek()`; otherwise it will be the previous yearʼs last week.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.

## Return Values

An `int` representing a number of days or `false` on failure.

## Examples

**`IntlCalendar::getMinimalDaysInFirstWeek()`**

```php


<?php
ini_set('date.timezone', 'UTC');
ini_set('intl.default_locale', 'en_US');

$cal = new IntlGregorianCalendar(2013, 0 /* January */, 2);
var_dump(IntlDateFormatter::formatObject($cal, 'cccc')); // Wednesday

var_dump($cal->getMinimalDaysInFirstWeek(), // 1
$cal->getFirstDayofWeek()); // 1 (Sunday)

// Week 1 of 2013
var_dump(IntlDateFormatter::formatObject($cal, "'Week 'w' of 'Y"));

$cal->setMinimalDaysInFirstWeek(4);
// Still Week 1 of 2013 (1st week has 5 days in the new year)
var_dump(IntlDateFormatter::formatObject($cal, "'Week 'w' of 'Y"));

$cal->setMinimalDaysInFirstWeek(6);
// Week 53 of 2012
var_dump(IntlDateFormatter::formatObject($cal, "'Week 'w' of 'Y"));


    
```

The above example will output:

```text


string(9) "Wednesday"
int(1)
int(1)
string(14) "Week 1 of 2013"
string(14) "Week 1 of 2013"
string(15) "Week 53 of 2012"

    
```
