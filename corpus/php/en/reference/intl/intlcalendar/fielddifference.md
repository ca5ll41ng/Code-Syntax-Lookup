---
id: "en-php-function-intlcalendar-fielddifference"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::fieldDifference"
title: "Calculate difference between given time and this objectʼs time"
signature: "public int|false IntlCalendar::fieldDifference(float $timestamp, int $field)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.fielddifference.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculate difference between given time and this objectʼs time

## Description

Object-oriented style

```php
public int|false IntlCalendar::fieldDifference(float $timestamp, int $field)
```

Procedural style

```php
int|false intlcal_field_difference(IntlCalendar $calendar, float $timestamp, int $field)
```

Return the difference between the given time and the time this object is set to, with respect to the quantity specified the `$field` parameter.

This method is meant to be called successively, first with the most significant field of interest down to the least significant field. To this end, as a side effect, this calendarʼs value for the field specified is advanced by the amount returned.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$timestamp`** — The time against which to compare the quantity represented by the `$field`. For the result to be positive, the time given for this parameter must be ahead of the time of the object the method is being invoked on.
- **`$field`** — The field that represents the quantity being compared.

## Return Values

Returns a (signed) difference of time in the unit associated with the specified field or `false` on failure.

## Examples

**`IntlCalendar::fieldDifference()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'fr_FR');

$cal1 = IntlCalendar::fromDateTime('2012-02-29 09:00:11');
$cal2 = IntlCalendar::fromDateTime('2013-03-01 09:19:29');
$time = $cal2->getTime();

echo "Time before: ", IntlDateFormatter::formatObject($cal1), "\n";

printf(
    "The difference in time is %d year(s), %d month(s), "
  . "%d day(s), %d hour(s) and %d minute(s)\n",
    $cal1->fieldDifference($time, IntlCalendar::FIELD_YEAR),
    $cal1->fieldDifference($time, IntlCalendar::FIELD_MONTH),
    $cal1->fieldDifference($time, IntlCalendar::FIELD_DAY_OF_MONTH),
    $cal1->fieldDifference($time, IntlCalendar::FIELD_HOUR_OF_DAY),
    $cal1->fieldDifference($time, IntlCalendar::FIELD_MINUTE)
);

//now it was advanced to the target time, exception for the seconds,
//for which we did not measure the difference
echo "Time after: ", IntlDateFormatter::formatObject($cal1), "\n";

    
```

The above example will output:

```text


Time before: 29 févr. 2012 09:00:11
The difference in time is 1 year(s), 0 month(s), 1 day(s), 0 hour(s) and 19 minute(s)
Time after: 1 mars 2013 09:19:11

    
```
