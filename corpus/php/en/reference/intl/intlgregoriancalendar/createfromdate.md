---
id: "en-php-function-intlgregoriancalendar-createfromdate"
language: "php"
lang: "en"
category: "function"
name: "IntlGregorianCalendar::createFromDate"
title: "Create a new IntlGregorianCalendar instance from date"
signature: "public static static IntlGregorianCalendar::createFromDate(int $year, int $month, int $dayOfMonth)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlgregoriancalendar.createfromdate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new IntlGregorianCalendar instance from date

## Description

```php
public static static IntlGregorianCalendar::createFromDate(int $year, int $month, int $dayOfMonth)
```

Creates a new `IntlGregorianCalendar` instance from date.

## Parameters

- **`$year`** — The new value for `IntlGregorianCalendar::FIELD_YEAR`.
- **`$month`** — The new value for `IntlGregorianCalendar::FIELD_MONTH`. The month sequence is zero-based, i.e., January is represented by 0, February by 1, …, December is 11 and Undecember (if the calendar has it) is 12.
- **`$dayOfMonth`** — The new value for `IntlGregorianCalendar::FIELD_DAY_OF_MONTH`.

## Return Values

Returns a new `IntlGregorianCalendar` instance.

## Examples

**`IntlGregorianCalendar::createFromDate()` example**

```php


<?php

$intlCalendar = IntlGregorianCalendar::createFromDate(2023, 11, 23);
var_dump($intlCalendar);
?>

    
```

The above example will output something similar to:

```text


object(IntlGregorianCalendar)#1 (5) {
  ["valid"]=>
  bool(true)
  ["type"]=>
  string(9) "gregorian"
  ["timeZone"]=>
  array(4) {
    ["valid"]=>
    bool(true)
    ["id"]=>
    string(16) "Europe/Amsterdam"
    ["rawOffset"]=>
    int(3600000)
    ["currentOffset"]=>
    int(3600000)
  }
  ["locale"]=>
  string(11) "en_US_POSIX"
  ["fields"]=>
  array(23) {
    ["era"]=>
    int(1)
    ["year"]=>
    int(2023)
    ["month"]=>
    int(11)
    ["week of year"]=>
    int(51)
    ["week of month"]=>
    int(4)
    ["day of year"]=>
    int(357)
    ["day of month"]=>
    int(23)
    ["day of week"]=>
    int(7)
    ["day of week in month"]=>
    int(4)
    ["AM/PM"]=>
    int(0)
    ["hour"]=>
    int(0)
    ["hour of day"]=>
    int(0)
    ["minute"]=>
    int(0)
    ["second"]=>
    int(0)
    ["millisecond"]=>
    int(0)
    ["zone offset"]=>
    int(3600000)
    ["DST offset"]=>
    int(0)
    ["year for week of year"]=>
    int(2023)
    ["localized day of week"]=>
    int(7)
    ["extended year"]=>
    int(2023)
    ["julian day"]=>
    int(2460302)
    ["milliseconds in day"]=>
    int(0)
    ["is leap month"]=>
    int(0)
  }
}

    
```

## See Also

`IntlGregorianCalendar::createFromDateTime()`
