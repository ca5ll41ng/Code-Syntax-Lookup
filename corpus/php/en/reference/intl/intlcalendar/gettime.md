---
id: "en-php-function-intlcalendar-gettime"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getTime"
title: "Get time currently represented by the object"
signature: "public float|false IntlCalendar::getTime()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.gettime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get time currently represented by the object

## Description

Object-oriented style

```php
public float|false IntlCalendar::getTime()
```

Procedural style

```php
float|false intlcal_get_time(IntlCalendar $calendar)
```

Returns the time associated with this object, expressed as the number of milliseconds since the epoch.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.

## Return Values

A `float` representing the number of milliseconds elapsed since the reference time (1 Jan 1970 00:00:00 UTC), or `false` on failure

## Examples

**`IntlCalendar::getTime()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'en_US');

$cal = new IntlGregorianCalendar(2013, 4 /* May */, 1, 0, 0, 0);
$time = $cal->getTime();
var_dump($time, $time / 1000 == strtotime('2013-05-01 00:00:00')); //true

    
```

The above example will output:

```text


float(1367362800000)
bool(true)

    
```

## See Also

`IntlCalendar::getNow()`
