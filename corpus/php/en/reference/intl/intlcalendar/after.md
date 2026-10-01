---
id: "en-php-function-intlcalendar-after"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::after"
title: "Whether this objectʼs time is after that of the passed object"
signature: "public bool IntlCalendar::after(IntlCalendar $other)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.after.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether this objectʼs time is after that of the passed object

## Description

Object-oriented style

```php
public bool IntlCalendar::after(IntlCalendar $other)
```

Procedural style

```php
bool intlcal_after(IntlCalendar $calendar, IntlCalendar $other)
```

Returns whether this objectʼs time succeeds the argumentʼs time.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$other`** — The calendar whose time will be checked against the primary objectʼs time.

## Return Values

Returns `true` if this objectʼs current time is after that of the `$calendar` argumentʼs time. Returns `false` otherwise.

On failure `false` is also returned. To detect error conditions use `intl_get_error_code()`, or set up Intl to throw exceptions.

## Examples

**`IntlCalendar::after()`**

```php


<?php
$cal1 = IntlCalendar::createInstance();
$cal2 = clone $cal1;

var_dump($cal1->after($cal2), //false
        $cal2->after($cal1)); //false

$cal1->roll(IntlCalendar::FIELD_MILLISECOND, true);

var_dump($cal1->after($cal2), //true
        $cal2->after($cal1)); //false


    
```
