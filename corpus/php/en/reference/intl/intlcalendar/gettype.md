---
id: "en-php-function-intlcalendar-gettype"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getType"
title: "Get the calendar type"
signature: "public string IntlCalendar::getType()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.gettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the calendar type

## Description

Object-oriented style

```php
public string IntlCalendar::getType()
```

Procedural style

```php
string intlcal_get_type(IntlCalendar $calendar)
```

A string describing the type of this calendar. This is one of the valid values for the calendar keyword value `'calendar'`.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.

## Return Values

A `string` representing the calendar type, such as `'gregorian'`, `'islamic'`, etc.

## Examples

**`IntlCalendar::getType()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'en_US');

$cal = IntlCalendar::createInstance(NULL, '@calendar=ethiopic-amete-alem');
var_dump($cal->getType());

$cal = new IntlGregorianCalendar();
var_dump($cal->getType());


    
```

The above example will output:

```text


string(19) "ethiopic-amete-alem"
string(9) "gregorian"

    
```
