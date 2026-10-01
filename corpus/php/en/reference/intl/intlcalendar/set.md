---
id: "en-php-function-intlcalendar-set"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::set"
title: "Set a time field or several common fields at once"
signature: "public true IntlCalendar::set(int $field, int $value)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a time field or several common fields at once

## Description

Object-oriented style

```php
public true IntlCalendar::set(int $field, int $value)
```

```php
public true IntlCalendar::set(int $year, int $month, int $dayOfMonth = NULL, int $hour = NULL, int $minute = NULL, int $second = NULL)
```

Procedural style

```php
true intlcal_set(IntlCalendar $cal, int $field, int $value)
```

```php
bool intlcal_set(IntlCalendar $cal, int $year, int $month, int $dayOfMonth = NULL, int $hour = NULL, int $minute = NULL, int $second = NULL)
```

Sets either a specific field to the given value, or sets at once several common fields. The range of values that are accepted depend on whether the calendar is using the lenient mode.

For fields that conflict, the fields that are set later have priority.

This method cannot be called with exactly four arguments.

## Parameters

- **`$cal`** — An `IntlCalendar` instance.
- **`$field`**
- **`$value`** — The new value of the given field.
- **`$year`** — The new value for `IntlCalendar::FIELD_YEAR`.
- **`$month`** — The new value for `IntlCalendar::FIELD_MONTH`. The month sequence is zero-based, i.e., January is represented by 0, February by 1, …, December is 11 and Undecember (if the calendar has it) is 12.
- **`$dayOfMonth`** — The new value for `IntlCalendar::FIELD_DAY_OF_MONTH`.
- **`$hour`** — The new value for `IntlCalendar::FIELD_HOUR_OF_DAY`.
- **`$minute`** — The new value for `IntlCalendar::FIELD_MINUTE`.
- **`$second`** — The new value for `IntlCalendar::FIELD_SECOND`.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |
| 8.4.0 | This had been deprecated in favor of the methods `IntlCalendar::setDate()` and `IntlCalendar::setDateTime()`. |

## Examples

**`IntlCalendar::set()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'pt_PT');

//Calls made later have priority
$cal = new IntlGregorianCalendar(2013, 6 /* July */, 1);
$cal->set(IntlCalendar::FIELD_YEAR, 2012);
$cal->set(IntlCalendar::FIELD_EXTENDED_YEAR, 2011);
var_dump(IntlDateFormatter::formatObject($cal));


$cal = new IntlGregorianCalendar(2013, 6 /* July */, 1);
$cal->set(IntlCalendar::FIELD_YEAR, 2012);
$cal->set(IntlCalendar::FIELD_EXTENDED_YEAR, 2011);
//the time has not been recalculated yet. If we clear the extended year,
//the year set before will be used
$cal->clear(IntlCalendar::FIELD_EXTENDED_YEAR);
var_dump(IntlDateFormatter::formatObject($cal));

    
```

The above example will output:

```text


string(20) "01/07/2011, 00:00:00"
string(20) "01/07/2012, 00:00:00"

    
```

## See Also

`IntlCalendar::get()` `IntlCalendar::add()` `IntlCalendar::roll()`
