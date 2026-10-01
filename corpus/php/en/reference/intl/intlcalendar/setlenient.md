---
id: "en-php-function-intlcalendar-setlenient"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::setLenient"
title: "Set whether date/time interpretation is to be lenient"
signature: "public true IntlCalendar::setLenient(bool $lenient)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.setlenient.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set whether date/time interpretation is to be lenient

## Description

Object-oriented style

```php
public true IntlCalendar::setLenient(bool $lenient)
```

Procedural style

```php
true intlcal_set_lenient(IntlCalendar $calendar, bool $lenient)
```

Defines whether the calendar is ‘lenient mode’. In such a mode, some of out-of-bounds values for some fields are accepted, the behavior being similar to that of `IntlCalendar::add()` (i.e., the value wraps around, carrying into more significant fields each time). If the lenient mode is off, then such values will generate an error.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$lenient`** — Use `true` to activate the lenient mode; `false` otherwise.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## Examples

See the example in `IntlCalendar::isLenient()`.
