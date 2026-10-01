---
id: "en-php-function-intlcalendar-getrepeatedwalltimeoption"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getRepeatedWallTimeOption"
title: "Get behavior for handling repeating wall time"
signature: "public int IntlCalendar::getRepeatedWallTimeOption()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getrepeatedwalltimeoption.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get behavior for handling repeating wall time

## Description

Object-oriented style

```php
public int IntlCalendar::getRepeatedWallTimeOption()
```

Procedural style

```php
int intlcal_get_repeated_wall_time_option(IntlCalendar $calendar)
```

Gets the current strategy for dealing with wall times that are repeated whenever the clock is set back during dailight saving time end transitions. The default value is `IntlCalendar::WALLTIME_LAST`.

This function requires ICU 4.9 or later.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.

## Return Values

One of the constants `IntlCalendar::WALLTIME_FIRST` or `IntlCalendar::WALLTIME_LAST`.

## Examples

**`IntlCalendar::getRepeatedWallTimeOption()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'en_US');
ini_set('intl.error_level', E_WARNING);

//On October 27th at 0200, the clock goes back 1 hour and from GMT+01 to GMT+00
$cal = new IntlGregorianCalendar(2013, 9 /* October */, 27, 1, 30);

var_dump($cal->getRepeatedWalltimeOption()); // 0 WALLTIME_LAST

$formatter = IntlDateFormatter::create(
    NULL,
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'UTC'
);
var_dump($formatter->format($cal->getTime() / 1000.));

$cal->setRepeatedWalltimeOption(IntlCalendar::WALLTIME_FIRST);
var_dump($cal->getRepeatedWalltimeOption()); // 1 WALLTIME_FIRST
$cal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 1);

var_dump($formatter->format($cal->getTime() / 1000.));

    
```

The above example will output:

```text


int(0)
string(42) "Sunday, October 27, 2013 at 1:30:00 AM GMT"
int(1)
string(43) "Sunday, October 27, 2013 at 12:30:00 AM GMT"

    
```

## See Also

`IntlCalendar::getSkippedWallTimeOption()` `IntlCalendar::setSkippedWallTimeOption()` `IntlCalendar::setRepeatedWallTimeOption()`
