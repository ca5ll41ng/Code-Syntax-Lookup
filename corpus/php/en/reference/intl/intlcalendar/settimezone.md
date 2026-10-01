---
id: "en-php-function-intlcalendar-settimezone"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::setTimeZone"
title: "Set the timezone used by this calendar"
signature: "public bool IntlCalendar::setTimeZone(IntlTimeZone|DateTimeZone|string|null $timezone)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.settimezone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the timezone used by this calendar

## Description

Object-oriented style

```php
public bool IntlCalendar::setTimeZone(IntlTimeZone|DateTimeZone|string|null $timezone)
```

Procedural style

```php
bool intlcal_set_time_zone(IntlCalendar $calendar, IntlTimeZone|DateTimeZone|string|null $timezone)
```

Defines a new timezone for this calendar. The time represented by the object is preserved to the detriment of the field values.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$timezone`** — The new timezone to be used by this calendar. It can be specified in the following ways: 

## Return Values

Returns `true` on success and `false` on failure.

## Examples

**`IntlCalendar::setTimeZone()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'es_ES');

$cal = new IntlGregorianCalendar(2013, 5 /* May */, 1, 12, 0, 0);

echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";
echo "(instant {$cal->getTime()})\n";

$cal->setTimeZone(IntlTimeZone::getGMT());
echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";
echo "(instant {$cal->getTime()})\n";

$cal->setTimeZone('GMT+03:33');
echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";
echo "(instant {$cal->getTime()})\n";


    
```

The above example will output:

```text


sábado, 1 de junio de 2013 12:00:00 Hora de verano de Europa occidental
(instant 1370084400000)
sábado, 1 de junio de 2013 11:00:00 GMT
(instant 1370084400000)
sábado, 1 de junio de 2013 14:33:00 GMT+03:33
(instant 1370084400000)

    
```
