---
id: "en-php-function-intlcalendar-setdatetime"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::setDateTime"
title: "Set a date and time fields"
signature: "public void IntlCalendar::setDateTime(int $year, int $month, int $dayOfMonth, int $hour, int $minute, int|null $second = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.setdatetime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a date and time fields

## Description

```php
public void IntlCalendar::setDateTime(int $year, int $month, int $dayOfMonth, int $hour, int $minute, int|null $second = null)
```

Sets a date and time fields to the given value.

## Parameters

- **`$year`** — The new value for `IntlCalendar::FIELD_YEAR`.
- **`$month`** — The new value for `IntlCalendar::FIELD_MONTH`. The month sequence is zero-based, i.e., January is represented by 0, February by 1, …, December is 11 and Undecember (if the calendar has it) is 12.
- **`$dayOfMonth`** — The new value for `IntlCalendar::FIELD_DAY_OF_MONTH`.
- **`$hour`** — The new value for `IntlCalendar::FIELD_HOUR_OF_DAY`.
- **`$minute`** — The new value for `IntlCalendar::FIELD_MINUTE`.
- **`$second`** — The new value for `IntlCalendar::FIELD_SECOND`.

## Return Values

No value is returned.

## Examples

**`IntlCalendar::setDateTime()` example**

```php


<?php
$intlCal = IntlCalendar::createInstance('UTC');

$intlCal->setDateTime(2012, 1, 29, 23, 58);
?>

    
```
