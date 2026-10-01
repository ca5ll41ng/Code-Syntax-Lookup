---
id: "en-php-function-intlcalendar-gettimezone"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getTimeZone"
title: "Get the objectʼs timezone"
signature: "public IntlTimeZone|false IntlCalendar::getTimeZone()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.gettimezone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the objectʼs timezone

## Description

Object-oriented style

```php
public IntlTimeZone|false IntlCalendar::getTimeZone()
```

Procedural style

```php
IntlTimeZone|false intlcal_get_time_zone(IntlCalendar $calendar)
```

Returns the `IntlTimeZone` object associated with this calendar.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.

## Return Values

An `IntlTimeZone` object corresponding to the one used internally in this object. Returns `false` on failure.

## Examples

**`IntlCalendar::getTimeZone()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'en_US');

$cal = IntlCalendar::createInstance();
print_r($cal->getTimeZone());

$cal->setTimeZone('UTC');
print_r($cal->getTimeZone());

$cal = IntlCalendar::fromDateTime('2012-01-01 00:00:00 GMT+03:33');
print_r($cal->getTimeZone());


    
```

The above example will output:

```text


IntlTimeZone Object
(
    [valid] => 1
    [id] => Europe/Lisbon
    [rawOffset] => 0
    [currentOffset] => 3600000
)
IntlTimeZone Object
(
    [valid] => 1
    [id] => UTC
    [rawOffset] => 0
    [currentOffset] => 0
)
IntlTimeZone Object
(
    [valid] => 1
    [id] => GMT+03:33
    [rawOffset] => 12780000
    [currentOffset] => 12780000
)

    
```

## See Also

`IntlCalendar::setTimeZone()` `IntlCalendar::createInstance()` `IntlGregorianCalendar::__construct()`
