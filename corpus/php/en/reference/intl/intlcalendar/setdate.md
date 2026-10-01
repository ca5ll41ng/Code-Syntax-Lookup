---
id: "en-php-function-intlcalendar-setdate"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::setDate"
title: "Set a date fields"
signature: "public void IntlCalendar::setDate(int $year, int $month, int $dayOfMonth)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.setdate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a date fields

## Description

```php
public void IntlCalendar::setDate(int $year, int $month, int $dayOfMonth)
```

Sets a date fields to the given value.

## Parameters

- **`$year`** — The new value for `IntlCalendar::FIELD_YEAR`.
- **`$month`** — The new value for `IntlCalendar::FIELD_MONTH`. The month sequence is zero-based, i.e., January is represented by 0, February by 1, …, December is 11 and Undecember (if the calendar has it) is 12.
- **`$dayOfMonth`** — The new value for `IntlCalendar::FIELD_DAY_OF_MONTH`.

## Return Values

No value is returned.

## Examples

**`IntlCalendar::setDate()` example**

```php


<?php
$intlCal = IntlCalendar::createInstance('UTC');

$intlCal->setDate(2012, 1, 29);
?>

    
```
