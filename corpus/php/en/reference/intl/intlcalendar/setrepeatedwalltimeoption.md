---
id: "en-php-function-intlcalendar-setrepeatedwalltimeoption"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::setRepeatedWallTimeOption"
title: "Set behavior for handling repeating wall times at negative timezone offset transitions"
signature: "public true IntlCalendar::setRepeatedWallTimeOption(int $option)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.setrepeatedwalltimeoption.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set behavior for handling repeating wall times at negative timezone offset transitions

## Description

Object-oriented style

```php
public true IntlCalendar::setRepeatedWallTimeOption(int $option)
```

Procedural style

```php
true intlcal_set_repeated_wall_time_option(IntlCalendar $calendar, int $option)
```

Sets the current strategy for dealing with wall times that are repeated whenever the clock is set back during dailight saving time end transitions. The default value is `IntlCalendar::WALLTIME_LAST` (take the post-DST instant). The other possible value is `IntlCalendar::WALLTIME_FIRST` (take the instant that occurs during DST).

This function requires ICU 4.9 or later.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$option`** — One of the constants `IntlCalendar::WALLTIME_FIRST` or `IntlCalendar::WALLTIME_LAST`.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## Examples

See the example on `IntlCalendar::getRepeatedWallTimeOption()`.

## See Also

`intlCalendar::getRepeatedWallTimeOption()` `intlCalendar::setSkippedWallTimeOption()` `intlCalendar::getSkippedWallTimeOption()`
