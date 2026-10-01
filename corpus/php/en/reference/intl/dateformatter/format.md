---
id: "en-php-function-intldateformatter-format"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::format"
aliases: ["datefmt_format"]
title: "Format the date/time value as a string"
signature: "public string|false IntlDateFormatter::format(IntlCalendar|DateTimeInterface|array|string|int|float $datetime)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.format.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Format the date/time value as a string

## Description

Object-oriented style

```php
public string|false IntlDateFormatter::format(IntlCalendar|DateTimeInterface|array|string|int|float $datetime)
```

Procedural style

```php
string|false datefmt_format(IntlDateFormatter $formatter, IntlCalendar|DateTimeInterface|array|string|int|float $datetime)
```

Formats the time value as a string.

## Parameters

- **`$formatter`** — The date formatter resource.
- **`$datetime`** — Value to format. This may be a `DateTimeInterface` object, an `IntlCalendar` object, a `numeric` type representing a (possibly fractional) number of seconds since epoch or an `array` in the format output by `localtime()`. — If a `DateTime` or an `IntlCalendar` object is passed, its timezone is not considered. The object will be formatted using the formaterʼs configured timezone. If one wants to use the timezone of the object to be formatted, `IntlDateFormatter::setTimeZone()` must be called before with the objectʼs timezone. Alternatively, the static function `IntlDateFormatter::formatObject()` may be used instead.

## Return Values

The formatted string or, if an error occurred, `false`.

## Changelog

|  |  |
| --- | --- |
| 7.1.5 | Support for providing general `DateTimeInterface` objects to the `$datetime` parameter was added. Formerly, only proper `DateTime` objects were supported. |
| PECL intl 3.0.0 | Support for providing `IntlCalendar` objects to the `$datetime` parameter was added. |

## Examples

**`datefmt_format()` example**

```php


<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'First Formatted output is ' . datefmt_format($fmt, 0);

$fmt = datefmt_create(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'Second Formatted output is ' . datefmt_format($fmt, 0);

$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo 'First Formatted output with pattern is ' . datefmt_format($fmt, 0);

$fmt = datefmt_create(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo "Second Formatted output with pattern is " . datefmt_format($fmt, 0);
?>

    
```

**OO example**

```php


<?php
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'First Formatted output is ' . $fmt->format(0);

$fmt = new IntlDateFormatter(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'Second Formatted output is ' . $fmt->format(0);

$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo 'First Formatted output with pattern is ' . $fmt->format(0);

$fmt = new IntlDateFormatter(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo 'Second Formatted output with pattern is ' . $fmt->format(0);
?>

    
```

The above example will output:

```text

         
First Formatted output is Wednesday, December 31, 1969 4:00:00 PM PT
Second Formatted output is Mittwoch, 31. Dezember 1969 16:00 Uhr GMT-08:00
First Formatted output with pattern is 12/31/1969
Second Formatted output with pattern is 12/31/1969

     
```

**With `IntlCalendar` object**

```php


<?php
$tz = reset(iterator_to_array(IntlTimeZone::createEnumeration('FR')));
$formatter = IntlDateFormatter::create(
    'fr_FR',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    $tz,
    IntlDateFormatter::GREGORIAN
);

$cal = IntlCalendar::createInstance($tz, '@calendar=islamic-civil');
$cal->set(IntlCalendar::FIELD_MONTH, 8); //9th month, Ramadan
$cal->set(IntlCalendar::FIELD_DAY_OF_MONTH, 1); //1st day
$cal->clear(IntlCalendar::FIELD_HOUR_OF_DAY);
$cal->clear(IntlCalendar::FIELD_MINUTE);
$cal->clear(IntlCalendar::FIELD_SECOND);
$cal->clear(IntlCalendar::FIELD_MILLISECOND);

echo "In this islamic year, Ramadan started/will start on:\n\t",
        $formatter->format($cal), "\n";

//Itʼs the formatterʼs timezone that is used:
$formatter->setTimeZone('Asia/Tokyo');
echo "After changing timezone:\n\t",
        $formatter->format($cal), "\n";


    
```

The above example will output:

```text


In this islamic year, Ramadan started/will start on:
    mardi 9 juillet 2013 19:00:00 heure avancée d’Europe centrale
After changing timezone:
    mercredi 10 juillet 2013 02:00:00 heure normale du Japon


    
```

## See Also

`datefmt_create()` `datefmt_parse()` `datefmt_get_error_code()` `datefmt_get_error_message()` `datefmt_format_object()`
