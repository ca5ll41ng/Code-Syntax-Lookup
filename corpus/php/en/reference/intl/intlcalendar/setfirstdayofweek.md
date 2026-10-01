---
id: "en-php-function-intlcalendar-setfirstdayofweek"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::setFirstDayOfWeek"
title: "Set the day on which the week is deemed to start"
signature: "public true IntlCalendar::setFirstDayOfWeek(int $dayOfWeek)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.setfirstdayofweek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the day on which the week is deemed to start

## Description

Object-oriented style

```php
public true IntlCalendar::setFirstDayOfWeek(int $dayOfWeek)
```

Procedural style

```php
true intlcal_set_first_day_of_week(IntlCalendar $calendar, int $dayOfWeek)
```

Defines the day of week deemed to start the week. This affects the behavior of fields that depend on the concept of week start and end such as `IntlCalendar::FIELD_WEEK_OF_YEAR` and `IntlCalendar::FIELD_YEAR_WOY`.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$dayOfWeek`** — One of the constants `IntlCalendar::DOW_SUNDAY`, `IntlCalendar::DOW_MONDAY`, …, `IntlCalendar::DOW_SATURDAY`.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## Examples

**`IntlCalendar::setFirstDayOfWeek()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'es_ES');

$cal = IntlCalendar::createInstance();
$cal->set(2013, 5 /* June */, 30); // A Sunday

var_dump($cal->getFirstDayOfWeek()); // 2 (Monday)

echo IntlDateFormatter::formatObject($cal, <<<EOD
'local day of week: 'cc'
week of month    : 'W'
week of year     : 'ww
EOD
), "\n";

$cal->setFirstDayOfWeek(IntlCalendar::DOW_SUNDAY);

echo IntlDateFormatter::formatObject($cal, <<<EOD
'local day of week: 'cc'
week of month    : 'W'
week of year     : 'ww
EOD
), "\n";

    
```

The above example will output:

```text


int(2)
local day of week: 7
week of month    : 4
week of year     : 26
local day of week: 1
week of month    : 5
week of year     : 27

    
```
