---
id: "en-php-function-intlcalendar-isweekend"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::isWeekend"
title: "Whether a certain date/time is in the weekend"
signature: "public bool IntlCalendar::isWeekend(float|null $timestamp = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.isweekend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether a certain date/time is in the weekend

## Description

Object-oriented style

```php
public bool IntlCalendar::isWeekend(float|null $timestamp = null)
```

Procedural style

```php
bool intlcal_is_weekend(IntlCalendar $calendar, float|null $timestamp = null)
```

Returns whether either the obejctʼs current time or the provided timestamp occur during a weekend in this objectʼs calendar system.

This function requires ICU 4.4 or later.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$timestamp`** — An optional timestamp representing the number of milliseconds since the epoch, excluding leap seconds. If `null`, this objectʼs current time is used instead.

## Return Values

A `bool` indicating whether the given or this objectʼs time occurs in a weekend.

On failure `false` is also returned. To detect error conditions use `intl_get_error_code()`, or set up Intl to throw exceptions.

## Examples

**`IntlCalendar::isWeekend()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');

$cal = new IntlGregorianCalendar(NULL, 'en_US');
$cal->set(2013, 6 /* July */, 7); // a Sunday 

var_dump($cal->isWeekend()); // true
var_dump($cal->isWeekend(strtotime('2013-07-01 00:00:00'))); // false, Monday

$cal = new IntlGregorianCalendar(NULL, 'ar_SA');
$cal->set(2013, 6 /* July */, 7); // a Sunday 
var_dump($cal->isWeekend()); // false, Sunday not in weekend in this calendar

    
```

## See Also

`IntlCalendar::getDayOfWeekType()` `IntlCalendar::getWeekendTransition()`
