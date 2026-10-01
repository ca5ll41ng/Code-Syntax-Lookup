---
id: "en-php-function-intlcalendar-indaylighttime"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::inDaylightTime"
title: "Whether the objectʼs time is in Daylight Savings Time"
signature: "public bool IntlCalendar::inDaylightTime()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.indaylighttime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether the objectʼs time is in Daylight Savings Time

## Description

Object-oriented style

```php
public bool IntlCalendar::inDaylightTime()
```

Procedural style

```php
bool intlcal_in_daylight_time(IntlCalendar $calendar)
```

Whether, for the instant represented by this object and for this objectʼs timezone, daylight saving time is in place.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.

## Return Values

Returns `true` if the date is in Daylight Savings Time, `false` otherwise.

On failure `false` is also returned. To detect error conditions use `intl_get_error_code()`, or set up Intl to throw exceptions.

## Examples

**`IntlCalendar::inDaylightTime()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'pt_PT');

$cal = new IntlGregorianCalendar(2013, 6 /* July */, 1, 4, 56, 31);
var_dump($cal->inDaylightTime()); // true
$cal->set(IntlCalendar::FIELD_MONTH, 11 /* December */);
var_dump($cal->inDaylightTime()); // false

//DST end transition on 2013-10-27 at 0200 (wall time back 1 hour)
$cal = new IntlGregorianCalendar(2013, 9 /* October */, 27, 1, 30, 0);

var_dump($cal->inDaylightTime()); // false (default WALLTIME_LAST)

$cal->setRepeatedWallTimeOption(IntlCalendar::WALLTIME_FIRST);
$cal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 1); // force time recalculation
var_dump($cal->inDaylightTime()); // true


    
```
