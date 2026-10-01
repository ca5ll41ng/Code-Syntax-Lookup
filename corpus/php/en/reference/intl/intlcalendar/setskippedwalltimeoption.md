---
id: "en-php-function-intlcalendar-setskippedwalltimeoption"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::setSkippedWallTimeOption"
title: "Set behavior for handling skipped wall times at positive timezone offset transitions"
signature: "public true IntlCalendar::setSkippedWallTimeOption(int $option)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.setskippedwalltimeoption.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set behavior for handling skipped wall times at positive timezone offset transitions

## Description

Object-oriented style

```php
public true IntlCalendar::setSkippedWallTimeOption(int $option)
```

Procedural style

```php
true intlcal_set_skipped_wall_time_option(IntlCalendar $calendar, int $option)
```

Sets the current strategy for dealing with wall times that are skipped whenever the clock is forwarded during dailight saving time start transitions. The default value is `IntlCalendar::WALLTIME_LAST` (take it as being the same instant as the one when the wall time is one hour more). Alternative values are `IntlCalendar::WALLTIME_FIRST` (same instant as the one with a wall time of one hour less) and `IntlCalendar::WALLTIME_NEXT_VALID` (same instant as when DST begins).

This affects only the instant represented by the calendar (as reported by `IntlCalendar::getTime()`), the field values will not be rewritten accordingly.

The calendar must be lenient for this option to have any effect, otherwise attempting to set a non-existing time will cause an error.

This function requires ICU 4.9 or later.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$option`** — One of the constants `IntlCalendar::WALLTIME_FIRST`, `IntlCalendar::WALLTIME_LAST` or `IntlCalendar::WALLTIME_NEXT_VALID`.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## Examples

See the example on `IntlCalendar::getSkippedWallTimeOption()`.

## See Also

`intlCalendar::getSkippedWallTimeOption()` `intlCalendar::setRepeatedWallTimeOption()` `intlCalendar::getRepeatedWallTimeOption()`
