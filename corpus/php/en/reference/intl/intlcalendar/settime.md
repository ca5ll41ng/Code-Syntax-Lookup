---
id: "en-php-function-intlcalendar-settime"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::setTime"
title: "Set the calendar time in milliseconds since the epoch"
signature: "public bool IntlCalendar::setTime(float $timestamp)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.settime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the calendar time in milliseconds since the epoch

## Description

Object-oriented style

```php
public bool IntlCalendar::setTime(float $timestamp)
```

Procedural style

```php
bool intlcal_set_time(IntlCalendar $calendar, float $timestamp)
```

Sets the instant represented by this object. The instant is represented by a `float` whose value should be an integer number of milliseconds since the epoch (1 Jan 1970 00:00:00.000 UTC), ignoring leap seconds. All the field values will be recalculated accordingly.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$timestamp`** — An instant represented by the number of number of milliseconds between such instant and the epoch, ignoring leap seconds.

## Return Values

Returns `true` on success and `false` on failure.

## Examples

**`IntlCalendar::setTime()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'fr_FR');

$cal = new IntlGregorianCalendar(2013, 5 /* May */, 1, 12, 0, 0);

echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";

/* In Europe/Lisbon, on 2013-10-27 at 0200, the clock goes back one hour and
   the timezone from UTC+01 to UTC+00 */

$cal->setTime(strtotime('2013-10-27 00:30:00 UTC') * 1000.);

echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";

$cal->setTime(strtotime('2013-10-27 01:30:00 UTC') * 1000.);

echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";


    
```

The above example will output:

```text


samedi 1 juin 2013 12:00:00 heure avancée d’Europe de l’Ouest
dimanche 27 octobre 2013 01:30:00 heure avancée d’Europe de l’Ouest
dimanche 27 octobre 2013 01:30:00 heure normale d’Europe de l’Ouest

    
```
