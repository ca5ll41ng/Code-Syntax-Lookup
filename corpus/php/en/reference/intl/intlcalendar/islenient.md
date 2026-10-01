---
id: "en-php-function-intlcalendar-islenient"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::isLenient"
title: "Whether date/time interpretation is in lenient mode"
signature: "public bool IntlCalendar::isLenient()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.islenient.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether date/time interpretation is in lenient mode

## Description

Object-oriented style

```php
public bool IntlCalendar::isLenient()
```

Procedural style

```php
bool intlcal_is_lenient(IntlCalendar $calendar)
```

Returns whether the current date/time interpretations is lenient (the default). If that is case, some out of range values for fields will be accepted instead of raising an error.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.

## Return Values

A `bool` representing whether the calendar is set to lenient mode.

## Examples

**`IntlCalendar::isLenient()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'pt_PT');
ini_set('intl.use_exceptions', '1');

$cal = new IntlGregorianCalendar(2013, 6 /* July */, 1);
var_dump(IntlDateFormatter::formatObject($cal), // 01/07/2013, 00:00:00
$cal->isLenient()); // true

$cal->set(IntlCalendar::FIELD_DAY_OF_MONTH, 33);
var_dump(IntlDateFormatter::formatObject($cal)); // 02/08/2013, 00:00:00

$cal->setLenient(false);
var_dump($cal->isLenient()); // false
$cal->set(IntlCalendar::FIELD_DAY_OF_MONTH, 33);
var_dump(IntlDateFormatter::formatObject($cal)); // error


    
```

The above example will output:

```text


string(20) "01/07/2013, 00:00:00"
bool(true)
string(20) "02/08/2013, 00:00:00"
bool(false)

Fatal error: Uncaught exception 'IntlException' with message 'datefmt_format_object: error obtaining instant from IntlCalendar' in /home/foobar/example.php:16
Stack trace:
#0 /home/foobar/example.php(16): IntlDateFormatter::formatObject(Object(IntlGregorianCalendar))
#1 {main}
  thrown in /home/foobar/example.php on line 16

    
```
