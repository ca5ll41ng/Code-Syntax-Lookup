---
id: "en-php-function-intlcalendar-getfirstdayofweek"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getFirstDayOfWeek"
title: "Get the first day of the week for the calendarʼs locale"
signature: "public int|false IntlCalendar::getFirstDayOfWeek()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getfirstdayofweek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the first day of the week for the calendarʼs locale

## Description

Object-oriented style

```php
public int|false IntlCalendar::getFirstDayOfWeek()
```

Procedural style

```php
int|false intlcal_get_first_day_of_week(IntlCalendar $calendar)
```

The week day deemed to start a week, either the default value for this locale or the value set with `IntlCalendar::setFirstDayOfWeek()`.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.

## Return Values

One of the constants `IntlCalendar::DOW_SUNDAY`, `IntlCalendar::DOW_MONDAY`, …, `IntlCalendar::DOW_SATURDAY` or `false` on failure.

## Examples

**`IntlCalendar::getFirstDayOfWeek()`**

```php


<?php
ini_set('date.timezone', 'UTC');

$cal1 = IntlCalendar::createInstance(NULL, 'es_ES');
var_dump($cal1->getFirstDayOfWeek()); // Monday
$cal1->set(2013, 1 /* February */, 3); // a Sunday
var_dump($cal1->get(IntlCalendar::FIELD_WEEK_OF_YEAR)); // 5

$cal2 = IntlCalendar::createInstance(NULL, 'en_US');
var_dump($cal2->getFirstDayOfWeek()); // Sunday
$cal2->set(2013, 1 /* February */, 3); // a Sunday
var_dump($cal2->get(IntlCalendar::FIELD_WEEK_OF_YEAR)); // 6

    
```

The above example will output:

```text


int(2)
int(5)
int(1)
int(6)

    
```

## See Also

`IntlCalendar::setFirstDayOfWeek()`
