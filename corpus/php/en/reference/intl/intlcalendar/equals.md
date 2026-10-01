---
id: "en-php-function-intlcalendar-equals"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::equals"
title: "Compare time of two IntlCalendar objects for equality"
signature: "public bool IntlCalendar::equals(IntlCalendar $other)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.equals.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compare time of two IntlCalendar objects for equality

## Description

Object-oriented style

```php
public bool IntlCalendar::equals(IntlCalendar $other)
```

Procedural style

```php
bool intlcal_equals(IntlCalendar $calendar, IntlCalendar $other)
```

Returns true if this calendar and the given calendar have the same time. The settings, calendar types and field states do not have to be the same.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$other`** — The calendar to compare with the primary object.

## Return Values

Returns `true` if the current time of both this and the passed in `IntlCalendar` object are the same, or `false` otherwise.

On failure `false` is also returned. To detect error conditions use `intl_get_error_code()`, or set up Intl to throw exceptions.

## Examples

**`IntlCalendar::equals()`**

```php


<?php
ini_set('date.timezone', 'UTC');

$cal1 = IntlCalendar::createInstance(NULL, 'es_ES');
$cal2 = clone $cal1;

var_dump($cal1->equals($cal2)); //TRUE

//The locale is not included in the comparison
$cal2 = IntlCalendar::createInstance(NULL, 'pt_PT');
$cal2->setTime($cal1->getTime());
var_dump($cal1->equals($cal2)); //TRUE

//And set fields state is not included as well
$cal2->clear(IntlCalendar::FIELD_YEAR);
var_dump($cal1->isSet(IntlCalendar::FIELD_YEAR) ==
        $cal2->isSet(IntlCalendar::FIELD_YEAR)); //FALSE
var_dump($cal1->equals($cal2)); //TRUE

//Neither is the calendar type
$cal2 = IntlCalendar::createInstance(NULL, 'es_ES@calendar=islamic');
$cal2->setTime($cal1->getTime());
var_dump($cal1->equals($cal2)); //TRUE

//Only the time is
$cal2 = clone $cal1;
$cal2->setTime($cal1->getTime() + 1.);
var_dump($cal1->equals($cal2)); //FALSE


    
```
