---
id: "en-php-function-intldateformatter-setcalendar"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::setCalendar"
aliases: ["datefmt_set_calendar"]
title: "Sets the calendar type used by the formatter"
signature: "public bool IntlDateFormatter::setCalendar(IntlCalendar|int|null $calendar)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.setcalendar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the calendar type used by the formatter

## Description

Object-oriented style

```php
public bool IntlDateFormatter::setCalendar(IntlCalendar|int|null $calendar)
```

Procedural style

```php
bool datefmt_set_calendar(IntlDateFormatter $formatter, IntlCalendar|int|null $calendar)
```

Sets the calendar or calendar type used by the formatter.

## Parameters

- **`$formatter`** — The formatter resource.
- **`$calendar`** — This can either be: the calendar type to use (default is `IntlDateFormatter::GREGORIAN`, which is also used if `null` is specified) or an `IntlCalendar` object. — Any `IntlCalendar` object passed in will be cloned; no modifications will be made to the argument object. — The timezone of the formatter will only be kept if an `IntlCalendar` object is not passed, otherwise the new timezone will be that of the passed object.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL intl 3.0.0 | It became possible to pass an `IntlCalendar` object. |

## Examples

**`datefmt_set_calendar()` example**

```php


<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'calendar of the formatter is : ' . datefmt_get_calendar($fmt);
datefmt_set_calendar($fmt, IntlDateFormatter::TRADITIONAL);
echo 'Now calendar of the formatter is : ' . datefmt_get_calendar($fmt);
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
echo 'calendar of the formatter is : ' . $fmt->getCalendar();
$fmt->setCalendar(IntlDateFormatter::TRADITIONAL);
echo 'Now calendar of the formatter is : ' . $fmt->getCalendar();
?>

    
```

The above example will output:

```text

    
calendar of the formatter is : 1
Now calendar of the formatter is : 0

   
```

**Example with `IntlCalendar` argument**

```php


<?php
$time = strtotime("2013-03-03 00:00:00 UTC");
$formatter = IntlDateFormatter::create("en_US", NULL, NULL, "Europe/Amsterdam");

echo "before: ", $formatter->format($time), "\n";

/* note that the calendar's locale is not used! */
$formatter->setCalendar(IntlCalendar::createInstance(
               "America/New_York", "pt_PT@calendar=islamic"));

echo "after:  ", $formatter->format($time), "\n";


   
```

The above example will output:

```text


before: Sunday, March 3, 2013 at 1:00:00 AM Central European Standard Time
after:  Saturday, Rabiʻ II 20, 1434 at 7:00:00 PM Eastern Standard Time


   
```

## See Also

`datefmt_get_calendar()` `datefmt_get_calendar_object()` `datefmt_create()`
