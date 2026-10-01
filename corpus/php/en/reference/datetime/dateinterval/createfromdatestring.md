---
id: "en-php-function-dateinterval-createfromdatestring"
language: "php"
lang: "en"
category: "function"
name: "DateInterval::createFromDateString"
title: "Sets up a DateInterval from the relative parts of the string"
signature: "public static DateInterval DateInterval::createFromDateString(string $datetime)"
module: "datetime"
source_url: "https://www.php.net/manual/en/dateinterval.createfromdatestring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets up a DateInterval from the relative parts of the string

## Description

Object-oriented style

```php
public static DateInterval DateInterval::createFromDateString(string $datetime)
```

Procedural style

```php
DateInterval|false date_interval_create_from_date_string(string $datetime)
```

Uses the date/time parsers as used in the `DateTimeImmutable` constructor to create a `DateInterval` from the relative parts of the parsed string.

## Parameters

- **`$datetime`** — A date with relative parts. Specifically, the relative formats supported by the parser used for `DateTimeImmutable`, `DateTime`, and `strtotime()` will be used to construct the DateInterval. — To use an ISO-8601 format string like `P7D`, you must use the `DateInterval::__construct()`.

## Return Values

Returns `DateInterval` on success. Procedural style returns `false` on failure.

## Errors/Exceptions

Object Oriented API only: If an invalid Date/Time string is passed, DateMalformedIntervalStringException is thrown.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Now has a tentative return type of `DateInterval`. Previously it was `DateInterval\|false`. |
| 8.3.0 | `DateInterval::createFromDateString()` now throws DateMalformedIntervalStringException if an invalid string is passed. Previously, it returned `false`, and a warning was emitted. `date_interval_create_from_date_string()` has not been changed. |
| 8.2.0 | Only the `from_string` and `date_string` properties will be visible when a `DateInterval` is created with this method. |

## Examples

**Parsing valid date intervals**

```php


<?php
// Each set of intervals describes the same duration.
$i = new DateInterval('P1D');
$i = DateInterval::createFromDateString('1 day');

$i = new DateInterval('P2W');
$i = DateInterval::createFromDateString('2 weeks');

$i = new DateInterval('P3M');
$i = DateInterval::createFromDateString('3 months');

$i = new DateInterval('P4Y');
$i = DateInterval::createFromDateString('4 years');

$i = new DateInterval('P1Y1D');
$i = DateInterval::createFromDateString('1 year + 1 day');

$i = new DateInterval('P1DT12H');
$i = DateInterval::createFromDateString('1 day + 12 hours');

$i = new DateInterval('PT3600S');
$i = DateInterval::createFromDateString('3600 seconds');

   
```

> The intervals in a set that have a time part, such as `P1DT12H` and `1 day + 12 hours`, are not interchangeable when they are added to a date/time object and a timezone transition falls within that time part: for an interval created with `DateInterval::__construct()` the time part covers elapsed time, whereas for an interval created with this method it increments or decrements the individual component values. See Date/Time Arithmetic.

**Parsing combinations and negative intervals**

```php


<?php
$i = DateInterval::createFromDateString('62 weeks + 1 day + 2 weeks + 2 hours + 70 minutes');
echo $i->format('%d %h %i'), "\n";

$i = DateInterval::createFromDateString('1 year - 10 days');
echo $i->format('%y %d'), "\n";

   
```

The above example will output:

```text


449 2 70
1 -10

   
```

**Parsing special relative date intervals**

```php


<?php
$i = DateInterval::createFromDateString('last day of next month');
var_dump($i);

$i = DateInterval::createFromDateString('last weekday');
var_dump($i);

   
```

Output of the above example in PHP 8.2:

```php


object(DateInterval)#1 (2) {
  ["from_string"]=>
  bool(true)
  ["date_string"]=>
  string(22) "last day of next month"
}
object(DateInterval)#2 (2) {
  ["from_string"]=>
  bool(true)
  ["date_string"]=>
  string(12) "last weekday"
}

   
```

Output of the above example in PHP 8 is similar to:

```php


object(DateInterval)#1 (16) {
  ["y"]=>
  int(0)
  ["m"]=>
  int(1)
  ["d"]=>
  int(0)
  ["h"]=>
  int(0)
  ["i"]=>
  int(0)
  ["s"]=>
  int(0)
  ["f"]=>
  float(0)
  ["weekday"]=>
  int(0)
  ["weekday_behavior"]=>
  int(0)
  ["first_last_day_of"]=>
  int(2)
  ["invert"]=>
  int(0)
  ["days"]=>
  bool(false)
  ["special_type"]=>
  int(0)
  ["special_amount"]=>
  int(0)
  ["have_weekday_relative"]=>
  int(0)
  ["have_special_relative"]=>
  int(0)
}
object(DateInterval)#2 (16) {
  ["y"]=>
  int(0)
  ["m"]=>
  int(0)
  ["d"]=>
  int(0)
  ["h"]=>
  int(0)
  ["i"]=>
  int(0)
  ["s"]=>
  int(0)
  ["f"]=>
  float(0)
  ["weekday"]=>
  int(0)
  ["weekday_behavior"]=>
  int(0)
  ["first_last_day_of"]=>
  int(0)
  ["invert"]=>
  int(0)
  ["days"]=>
  bool(false)
  ["special_type"]=>
  int(1)
  ["special_amount"]=>
  int(-1)
  ["have_weekday_relative"]=>
  int(0)
  ["have_special_relative"]=>
  int(1)
}

   
```
