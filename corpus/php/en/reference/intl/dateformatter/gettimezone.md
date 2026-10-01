---
id: "en-php-function-intldateformatter-gettimezone"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::getTimeZone"
aliases: ["datefmt_get_timezone"]
title: "Get formatterʼs timezone"
signature: "public IntlTimeZone|false IntlDateFormatter::getTimeZone()"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.gettimezone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get formatterʼs timezone

## Description

Object-oriented style

```php
public IntlTimeZone|false IntlDateFormatter::getTimeZone()
```

Procedural style

```php
IntlTimeZone|false datefmt_get_timezone(IntlDateFormatter $formatter)
```

Returns an `IntlTimeZone` object representing the timezone that will be used by this object to format dates and times. When formatting `IntlCalendar` and `DateTime` objects with this `IntlDateFormatter`, the timezone used will be the one returned by this method, not the one associated with the objects being formatted.

## Parameters

This function has no parameters.

## Return Values

The associated `IntlTimeZone` object or `false` on failure.

## Examples

**`IntlDateFormatter::getTimeZone()` examples**

```php


<?php

$madrid = IntlDateFormatter::create(NULL, NULL, NULL, 'Europe/Madrid');
$lisbon = IntlDateFormatter::create(NULL, NULL, NULL, 'Europe/Lisbon');

var_dump($madrid->getTimezone());
echo $madrid->getTimezone()->getDisplayName(
        false, IntlTimeZone::DISPLAY_GENERIC_LOCATION, "en_US"), "\n";
echo $lisbon->getTimeZone()->getId(), "\n";
//The id can also be retrieved with ->getTimezoneId()
echo $lisbon->getTimeZoneId(), "\n";


    
```

The above example will output:

```text


object(IntlTimeZone)#4 (4) {
  ["valid"]=>
  bool(true)
  ["id"]=>
  string(13) "Europe/Madrid"
  ["rawOffset"]=>
  int(3600000)
  ["currentOffset"]=>
  int(7200000)
}
Spain Time
Europe/Lisbon
Europe/Lisbon


    
```

## See Also

`IntlDateFormatter::getTimeZoneId()` `IntlDateFormatter::setTimeZone()` `IntlTimeZone`
