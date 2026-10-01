---
id: "en-php-function-intldateformatter-getcalendarobject"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::getCalendarObject"
aliases: ["datefmt_get_calendar_object"]
title: "Get copy of formatterʼs calendar object"
signature: "public IntlCalendar|false|null IntlDateFormatter::getCalendarObject()"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.getcalendarobject.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get copy of formatterʼs calendar object

## Description

Object-oriented style

```php
public IntlCalendar|false|null IntlDateFormatter::getCalendarObject()
```

Procedural style

```php
IntlCalendar|false|null datefmt_get_calendar_object(IntlDateFormatter $formatter)
```

Obtain a copy of the calendar object used internally by this formatter. This calendar will have a type (as in gregorian, japanese, buddhist, roc, persian, islamic, etc.) and a timezone that match the type and timezone used by the formatter. The date/time of the object is unspecified.

## Parameters

This function has no parameters.

## Return Values

A copy of the internal calendar object used by this formatter, or `null` if none has been set, or `false` on failure.

## Examples

**`IntlDateFormatter::getCalendarObject()` example**

```php


<?php
$formatter = IntlDateFormatter::create(
    "fr_FR@calendar=islamic", 
    NULL,
    NULL,
    "GMT-01:00",
    IntlDateFormatter::TRADITIONAL
);

$cal = $formatter->getCalendarObject();

var_dump(
    $cal->getType(),
    $cal->getTimeZone(),
    $cal->getLocale(Locale::VALID_LOCALE)
);


    
```

The above example will output:

```text


string(7) "islamic"
object(IntlTimeZone)#3 (4) {
  ["valid"]=>
  bool(true)
  ["id"]=>
  string(9) "GMT-01:00"
  ["rawOffset"]=>
  int(-3600000)
  ["currentOffset"]=>
  int(-3600000)
}
string(5) "fr_FR"

    
```

## See Also

`IntlDateFormatter::getCalendar()` `IntlDateFormatter::setCalendar()` `IntlCalendar`
