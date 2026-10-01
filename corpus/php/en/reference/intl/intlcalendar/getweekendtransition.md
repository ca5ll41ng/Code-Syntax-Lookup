---
id: "en-php-function-intlcalendar-getweekendtransition"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getWeekendTransition"
title: "Get time of the day at which weekend begins or ends"
signature: "public int|false IntlCalendar::getWeekendTransition(int $dayOfWeek)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getweekendtransition.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get time of the day at which weekend begins or ends

## Description

Object-oriented style

```php
public int|false IntlCalendar::getWeekendTransition(int $dayOfWeek)
```

Procedural style

```php
int|false intlcal_get_weekend_transition(IntlCalendar $calendar, int $dayOfWeek)
```

Returns the number of milliseconds after midnight at which the weekend begins or ends.

This is only applicable for days of the week for which `IntlCalendar::getDayOfWeekType()` returns either `IntlCalendar::DOW_TYPE_WEEKEND_OFFSET` or `IntlCalendar::DOW_TYPE_WEEKEND_CEASE`. Calling this function for other days of the week is an error condition.

This function requires ICU 4.4 or later.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$dayOfWeek`** — One of the constants `IntlCalendar::DOW_SUNDAY`, `IntlCalendar::DOW_MONDAY`, …, `IntlCalendar::DOW_SATURDAY`.

## Return Values

The number of milliseconds into the day at which the weekend begins or ends or `false` on failure.

## Examples

See example on `IntlCalendar::getDayOfWeekType()`.
