---
id: "en-php-function-intlcalendar-getnow"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getNow"
title: "Get number representing the current time"
signature: "public static float IntlCalendar::getNow()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getnow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get number representing the current time

## Description

Object-oriented style

```php
public static float IntlCalendar::getNow()
```

Procedural style

```php
float intlcal_get_now()
```

The number of milliseconds that have passed since the reference date. This number is derived from the system time.

## Parameters

This function has no parameters.

## Return Values

A `float` representing a number of milliseconds since the epoch, not counting leap seconds.

## Examples

**`IntlCalendar::getNow()`**

```php


<?php
$formatter = IntlDateFormatter::create('es_ES',
        IntlDateFormatter::FULL,
        IntlDateFormatter::FULL,
        'Europe/Madrid');

$val = IntlCalendar::getNow();

var_dump($val);
echo $formatter->format(IntlCalendar::getNow() / 1000.), "\n";


    
```

The above example will output:

```text


float(1371425814666)
lunes, 17 de junio de 2013 01:36:54 Hora de verano de Europa central

    
```
