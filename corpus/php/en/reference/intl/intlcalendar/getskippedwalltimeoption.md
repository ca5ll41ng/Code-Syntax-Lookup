---
id: "en-php-function-intlcalendar-getskippedwalltimeoption"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getSkippedWallTimeOption"
title: "Get behavior for handling skipped wall time"
signature: "public int IntlCalendar::getSkippedWallTimeOption()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getskippedwalltimeoption.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get behavior for handling skipped wall time

## Description

Object-oriented style

```php
public int IntlCalendar::getSkippedWallTimeOption()
```

Procedural style

```php
int intlcal_get_skipped_wall_time_option(IntlCalendar $calendar)
```

Gets the current strategy for dealing with wall times that are skipped whenever the clock is forwarded during dailight saving time start transitions. The default value is `IntlCalendar::WALLTIME_LAST`.

The calendar must be lenient for this option to have any effect, otherwise attempting to set a non-existing time will cause an error.

This function requires ICU 4.9 or later.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.

## Return Values

One of the constants `IntlCalendar::WALLTIME_FIRST`, `IntlCalendar::WALLTIME_LAST` or `IntlCalendar::WALLTIME_NEXT_VALID`.

## Examples

**`IntlCalendar::getSkippedWallTimeOption()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'en_US');
ini_set('intl.error_level', E_WARNING);

//On March 31st at 0100, the clock goes forward 1 hour and from GMT+00 to GMT+01
$cal = new IntlGregorianCalendar(2013, 2 /* March */, 31, 1, 30);

var_dump(
    $cal->isLenient(),               // true
    $cal->getSkippedWalltimeOption() // 0 WALLTIME_LAST
);

$formatter = IntlDateFormatter::create(
    NULL,
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'UTC'
);
var_dump($formatter->format($cal->getTime() / 1000));

$cal->setSkippedWallTimeOption(IntlCalendar::WALLTIME_FIRST);
var_dump($cal->getSkippedWalltimeOption()); // 1 WALLTIME_FIRST
$cal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 1);

var_dump($formatter->format($cal->getTime() / 1000));

$cal->setSkippedWallTimeOption(IntlCalendar::WALLTIME_NEXT_VALID);
var_dump($cal->getSkippedWalltimeOption()); // 2 WALLTIME_NEXT_VALID
$cal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 1);

var_dump($formatter->format($cal->getTime() / 1000));

    
```

The above example will output:

```text


bool(true)
int(0)
string(40) "Sunday, March 31, 2013 at 1:30:00 AM GMT"
int(1)
string(41) "Sunday, March 31, 2013 at 12:30:00 AM GMT"
int(2)
string(40) "Sunday, March 31, 2013 at 1:00:00 AM GMT"

    
```

## See Also

`IntlCalendar::getRepeatedWallTimeOption()` `IntlCalendar::setSkippedWallTimeOption()` `IntlCalendar::setRepeatedWallTimeOption()`
