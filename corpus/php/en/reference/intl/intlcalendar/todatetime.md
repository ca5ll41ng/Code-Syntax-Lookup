---
id: "en-php-function-intlcalendar-todatetime"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::toDateTime"
title: "Convert an IntlCalendar into a DateTime object"
signature: "public DateTime|false IntlCalendar::toDateTime()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.todatetime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert an IntlCalendar into a DateTime object

## Description

Object-oriented style

```php
public DateTime|false IntlCalendar::toDateTime()
```

Procedural style

```php
DateTime|false intlcal_to_date_time(IntlCalendar $calendar)
```

Create a `DateTime` object that represents the same instant (up to second precision, with a rounding error of less than 1 second) and has an analog timezone to this object (the difference being `DateTime`ʼs timezone will be backed by PHPʼs timezone while `IntlCalendar`ʼs timezone is backed by ICUʼs).

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.

## Return Values

A `DateTime` object with the same timezone as this object (though using PHPʼs database instead of ICUʼs) and the same time, except for the smaller precision (second precision instead of millisecond). Returns `false` on failure.

## Examples

**`IntlCalendar::toDateTime()`**

```php


<?php
ini_set('date.timezone', 'UTC');
ini_set('intl.default_locale', 'pt_PT');

$cal = IntlCalendar::createInstance('Europe/Lisbon'); //current time

$dt = $cal->toDateTime();
print_r($dt);


    
```

The above example will output:

```text


DateTime Object
(
    [date] => 2013-07-02 00:29:13
    [timezone_type] => 3
    [timezone] => Europe/Lisbon
)

    
```

## See Also

`IntlCalendar::fromDateTime()` `IntlCalendar::getTime()` `IntlCalendar::createInstance()` `DateTime::__construct()`
