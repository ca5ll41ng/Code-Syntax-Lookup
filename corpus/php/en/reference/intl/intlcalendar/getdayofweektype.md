---
id: "en-php-function-intlcalendar-getdayofweektype"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getDayOfWeekType"
title: "Tell whether a day is a weekday, weekend or a day that has a transition between the two"
signature: "public int|false IntlCalendar::getDayOfWeekType(int $dayOfWeek)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getdayofweektype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tell whether a day is a weekday, weekend or a day that has a transition between the two

## Description

Object-oriented style

```php
public int|false IntlCalendar::getDayOfWeekType(int $dayOfWeek)
```

Procedural style

```php
int|false intlcal_get_day_of_week_type(IntlCalendar $calendar, int $dayOfWeek)
```

Returns whether the passed day is a weekday (`IntlCalendar::DOW_TYPE_WEEKDAY`), a weekend day (`IntlCalendar::DOW_TYPE_WEEKEND`), a day during which a transition occurs into the weekend (`IntlCalendar::DOW_TYPE_WEEKEND_OFFSET`) or a day during which the weekend ceases (`IntlCalendar::DOW_TYPE_WEEKEND_CEASE`).

If the return is either `IntlCalendar::DOW_TYPE_WEEKEND_OFFSET` or `IntlCalendar::DOW_TYPE_WEEKEND_CEASE`, then `IntlCalendar::getWeekendTransition()` can be called to obtain the time of the transition.

This function requires ICU 4.4 or later.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$dayOfWeek`** — One of the constants `IntlCalendar::DOW_SUNDAY`, `IntlCalendar::DOW_MONDAY`, …, `IntlCalendar::DOW_SATURDAY`.

## Return Values

Returns one of the constants `IntlCalendar::DOW_TYPE_WEEKDAY`, `IntlCalendar::DOW_TYPE_WEEKEND`, `IntlCalendar::DOW_TYPE_WEEKEND_OFFSET` or `IntlCalendar::DOW_TYPE_WEEKEND_CEASE` or `false` on failure.

## Examples

**`IntlCalendar::getDayOfWeekType()`**

```php


<?php
foreach (array('en_US', 'ar_SA') as $locale) {
    echo "Locale: ", Locale::getDisplayName($locale, "en_US"), "\n";

    $cal = IntlCalendar::createInstance('UTC', $locale);

    for ($i = IntlCalendar::DOW_SUNDAY; $i <= IntlCalendar::DOW_SATURDAY; $i++) {
        $type = $cal->getDayOfWeekType($i);
        $transition = ($type !== IntlCalendar::DOW_TYPE_WEEKDAY)
            ? $cal->getWeekendTransition($i)
            : '';
        echo $i, " ", $type, " ", $transition, "\n";
    }
    echo "\n";
}
?>

    
```

The above example will output:

```text


Locale: English (United States)
1 1 86400000
2 0
3 0
4 0
5 0
6 0
7 1 0

Locale: Arabic (Saudi Arabia)
1 0
2 0
3 0
4 0
5 0
6 1 0
7 1 86400000

    
```
