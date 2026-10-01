---
id: "en-php-function-intldateformatter-getcalendar"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::getCalendar"
aliases: ["datefmt_get_calendar"]
title: "Get the calendar type used for the IntlDateFormatter"
signature: "public int|false IntlDateFormatter::getCalendar()"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.getcalendar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the calendar type used for the IntlDateFormatter

## Description

Object-oriented style

```php
public int|false IntlDateFormatter::getCalendar()
```

Procedural style

```php
int|false datefmt_get_calendar(IntlDateFormatter $formatter)
```

## Parameters

- **`$formatter`** — The formatter resource

## Return Values

The calendar type being used by the formatter. Either `IntlDateFormatter::TRADITIONAL` or `IntlDateFormatter::GREGORIAN`. Returns `false` on failure.

## Examples

**`datefmt_get_calendar()` example**

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

**Example of invalid locale handling**

```php


<?php
try {
    $fmt = new IntlDateFormatter(
        'invalid_locale',
        IntlDateFormatter::FULL,
        IntlDateFormatter::FULL,
        'dunno',
        IntlDateFormatter::GREGORIAN,
    );
    $cal = $fmt->getCalendar();
} catch (\Error $e) {
    // ...
}
?>

    
```

The above example will output:

```text

         
calendar of the formatter is : 1
Now calendar of the formatter is : 0

     
```

## See Also

`datefmt_get_calendar_object()` `datefmt_set_calendar()` `datefmt_create()`
