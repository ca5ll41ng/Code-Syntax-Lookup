---
id: "en-php-guide-class-intlcalendar"
language: "php"
lang: "en"
category: "guide"
name: "class.intlcalendar"
title: "The IntlCalendar class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.intlcalendar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The IntlCalendar class

IntlCalendar

   Introduction       Class Synopsis    `IntlCalendar`    `public` `const` `int` `IntlCalendar::FIELD_ERA`   `public` `const` `int` `IntlCalendar::FIELD_YEAR`   `public` `const` `int` `IntlCalendar::FIELD_MONTH`   `public` `const` `int` `IntlCalendar::FIELD_WEEK_OF_YEAR`   `public` `const` `int` `IntlCalendar::FIELD_WEEK_OF_MONTH`   `public` `const` `int` `IntlCalendar::FIELD_DATE`   `public` `const` `int` `IntlCalendar::FIELD_DAY_OF_YEAR`   `public` `const` `int` `IntlCalendar::FIELD_DAY_OF_WEEK`   `public` `const` `int` `IntlCalendar::FIELD_DAY_OF_WEEK_IN_MONTH`   `public` `const` `int` `IntlCalendar::FIELD_AM_PM`   `public` `const` `int` `IntlCalendar::FIELD_HOUR`   `public` `const` `int` `IntlCalendar::FIELD_HOUR_OF_DAY`   `public` `const` `int` `IntlCalendar::FIELD_MINUTE`   `public` `const` `int` `IntlCalendar::FIELD_SECOND`   `public` `const` `int` `IntlCalendar::FIELD_MILLISECOND`   `public` `const` `int` `IntlCalendar::FIELD_ZONE_OFFSET`   `public` `const` `int` `IntlCalendar::FIELD_DST_OFFSET`   `public` `const` `int` `IntlCalendar::FIELD_YEAR_WOY`   `public` `const` `int` `IntlCalendar::FIELD_DOW_LOCAL`   `public` `const` `int` `IntlCalendar::FIELD_EXTENDED_YEAR`   `public` `const` `int` `IntlCalendar::FIELD_JULIAN_DAY`   `public` `const` `int` `IntlCalendar::FIELD_MILLISECONDS_IN_DAY`   `public` `const` `int` `IntlCalendar::FIELD_IS_LEAP_MONTH`   `public` `const` `int` `IntlCalendar::FIELD_FIELD_COUNT`   `public` `const` `int` `IntlCalendar::FIELD_DAY_OF_MONTH`   `public` `const` `int` `IntlCalendar::DOW_SUNDAY`   `public` `const` `int` `IntlCalendar::DOW_MONDAY`   `public` `const` `int` `IntlCalendar::DOW_TUESDAY`   `public` `const` `int` `IntlCalendar::DOW_WEDNESDAY`   `public` `const` `int` `IntlCalendar::DOW_THURSDAY`   `public` `const` `int` `IntlCalendar::DOW_FRIDAY`   `public` `const` `int` `IntlCalendar::DOW_SATURDAY`   `public` `const` `int` `IntlCalendar::DOW_TYPE_WEEKDAY`   `public` `const` `int` `IntlCalendar::DOW_TYPE_WEEKEND`   `public` `const` `int` `IntlCalendar::DOW_TYPE_WEEKEND_OFFSET`   `public` `const` `int` `IntlCalendar::DOW_TYPE_WEEKEND_CEASE`   `public` `const` `int` `IntlCalendar::WALLTIME_FIRST`   `public` `const` `int` `IntlCalendar::WALLTIME_LAST`   `public` `const` `int` `IntlCalendar::WALLTIME_NEXT_VALID`          Predefined Constants 
- **`IntlCalendar::FIELD_ERA` `int`** — Calendar field numerically representing an era, for instance `1` for AD and `0` for BC in the Gregorian/Julian calendars and `235` for the Heisei (平成) era in the Japanese calendar. Not all calendars have more than one era.
- **`IntlCalendar::FIELD_YEAR` `int`** — Calendar field for the year. This is not unique across eras. If the calendar type has more than one era, generally the minimum value for this field will be `1`.
- **`IntlCalendar::FIELD_MONTH` `int`** — Calendar field for the month. The month sequence is zero-based, so January (here used to signify the first month of the calendar; this may be called another name, such as Muharram in the Islamic calendar) is represented by `0`, February by `1`, …, December by `11` and, for calendars that have it, the 13th or leap month by `12`.
- **`IntlCalendar::FIELD_WEEK_OF_YEAR` `int`** — Calendar field for the number of the week of the year. This depends on which day of the week is deemed to start the week and the minimal number of days in a week.
- **`IntlCalendar::FIELD_WEEK_OF_MONTH` `int`** — Calendar field for the number of the week of the month. This depends on which day of the week is deemed to start the week and the minimal number of days in a week.
- **`IntlCalendar::FIELD_DATE` `int`** — Calendar field for the day of the month. The same as `IntlCalendar::FIELD_DAY_OF_MONTH`, which has a clearer name.
- **`IntlCalendar::FIELD_DAY_OF_YEAR` `int`** — Calendar field for the day of the year. For the Gregorian calendar, starts with `1` and ends with `365` or `366`.
- **`IntlCalendar::FIELD_DAY_OF_WEEK` `int`** — Calendar field for the day of the week. Its values start with `1` (Sunday, see `IntlCalendar::DOW_SUNDAY` and subsequent constants) and the last valid value is 7 (Saturday).
- **`IntlCalendar::FIELD_DAY_OF_WEEK_IN_MONTH` `int`** — Given a day of the week (Sunday, Monday, …), this calendar field assigns an ordinal to such a day of the week in a specific month. Thus, if the value of this field is `1` and the value of the day of the week is `2` (Monday), then the set day of the month is the 1st Monday of the month; the maximum value is `5`. — Additionally, the value `0` and negative values are also allowed. The value `0` encompasses the seven days that occur immediately before the first seven days of a month (which therefore have a ‘day of week in month’ with value `1`). Negative values starts counting from the end of the month – `-1` points to the last occurrence of a day of the week in a month, `-2` to the second last, and so on. — Unlike `IntlCalendar::FIELD_WEEK_OF_MONTH` and `IntlCalendar::FIELD_WEEK_OF_YEAR`, this value does not depend on `IntlCalendar::getFirstDayOfWeek()` or on `IntlCalendar::getMinimalDaysInFirstWeek()`. The first Monday is the first Monday, even if it occurs in a week that belongs to the previous month.
- **`IntlCalendar::FIELD_AM_PM` `int`** — Calendar field indicating whether a time is before noon (value `0`, AM) or after (`1`). Midnight is AM, noon is PM.
- **`IntlCalendar::FIELD_HOUR` `int`** — Calendar field for the hour, without specifying whether itʼs in the morning or in the afternoon. Valid values are `0` to `11`.
- **`IntlCalendar::FIELD_HOUR_OF_DAY` `int`** — Calendar field for the full (24h) hour of the day. Valid values are `0` to `23`.
- **`IntlCalendar::FIELD_MINUTE` `int`** — Calendar field for the minutes component of the time.
- **`IntlCalendar::FIELD_SECOND` `int`** — Calendar field for the seconds component of the time.
- **`IntlCalendar::FIELD_MILLISECOND` `int`** — Calendar field the milliseconds component of the time.
- **`IntlCalendar::FIELD_ZONE_OFFSET` `int`** — Calendar field indicating the raw offset of the timezone, in milliseconds. The raw offset is the timezone offset, excluding any offset due to daylight saving time.
- **`IntlCalendar::FIELD_DST_OFFSET` `int`** — Calendar field for the daylight saving time offset of the calendarʼs timezone, in milliseconds, if active for calendarʼs time.
- **`IntlCalendar::FIELD_YEAR_WOY` `int`** — Calendar field representing the year for week of year purposes.
- **`IntlCalendar::FIELD_DOW_LOCAL` `int`** — Calendar field for the localized day of the week. This is a value between `1` and `7`, `1` being used for the day of the week that matches the value returned by `IntlCalendar::getFirstDayOfWeek()`.
- **`IntlCalendar::FIELD_EXTENDED_YEAR` `int`** — Calendar field for a year number representation that is continuous across eras. For the Gregorian calendar, the value of this field matches that of `IntlCalendar::FIELD_YEAR` for AD years; a BC year `y` is represented by `-y + 1`.
- **`IntlCalendar::FIELD_JULIAN_DAY` `int`** — Calendar field for a modified Julian day number. It is different from a conventional Julian day number in that its transitions occur at local zone midnight rather than at noon UTC. It uniquely identifies a date.
- **`IntlCalendar::FIELD_MILLISECONDS_IN_DAY` `int`** — Calendar field encompassing the information in `IntlCalendar::FIELD_HOUR_OF_DAY`, `IntlCalendar::FIELD_MINUTE`, `IntlCalendar::FIELD_SECOND` and `IntlCalendar::FIELD_MILLISECOND`. Range is from the `0` to `24 * 3600 * 1000 - 1`. It is not the amount of milliseconds elapsed in the day since on DST transitions it will have discontinuities analog to those of the wall time.
- **`IntlCalendar::FIELD_IS_LEAP_MONTH` `int`** — Calendar field whose value is `1` for indicating a leap month and `0` otherwise.
- **`IntlCalendar::FIELD_FIELD_COUNT` `int`** — The total number of fields.
- **`IntlCalendar::FIELD_DAY_OF_MONTH` `int`** — Alias for `IntlCalendar::FIELD_DATE`.
- **`IntlCalendar::DOW_SUNDAY` `int`** — Sunday.
- **`IntlCalendar::DOW_MONDAY` `int`** — Monday.
- **`IntlCalendar::DOW_TUESDAY` `int`** — Tuesday.
- **`IntlCalendar::DOW_WEDNESDAY` `int`** — Wednesday.
- **`IntlCalendar::DOW_THURSDAY` `int`** — Thursday.
- **`IntlCalendar::DOW_FRIDAY` `int`** — Friday.
- **`IntlCalendar::DOW_SATURDAY` `int`** — Saturday.
- **`IntlCalendar::DOW_TYPE_WEEKDAY` `int`** — Output of `IntlCalendar::getDayOfWeekType()` indicating a day of week is a weekday.
- **`IntlCalendar::DOW_TYPE_WEEKEND` `int`** — Output of `IntlCalendar::getDayOfWeekType()` indicating a day of week belongs to the weekend.
- **`IntlCalendar::DOW_TYPE_WEEKEND_OFFSET` `int`** — Output of `IntlCalendar::getDayOfWeekType()` indicating the weekend begins during the given day of week.
- **`IntlCalendar::DOW_TYPE_WEEKEND_CEASE` `int`** — Output of `IntlCalendar::getDayOfWeekType()` indicating the weekend ends during the given day of week.
- **`IntlCalendar::WALLTIME_FIRST` `int`** — Output of `IntlCalendar::getSkippedWallTimeOption()` indicating that wall times in the skipped range should refer to the same instant as wall times with one hour less and of `IntlCalendar::getRepeatedWallTimeOption()` indicating the wall times in the repeated range should refer to the instant of the first occurrence of such wall time.
- **`IntlCalendar::WALLTIME_LAST` `int`** — Output of `IntlCalendar::getSkippedWallTimeOption()` indicating that wall times in the skipped range should refer to the same instant as wall times with one hour after and of `IntlCalendar::getRepeatedWallTimeOption()` indicating the wall times in the repeated range should refer to the instant of the second occurrence of such wall time.
- **`IntlCalendar::WALLTIME_NEXT_VALID` `int`** — Output of `IntlCalendar::getSkippedWallTimeOption()` indicating that wall times in the skipped range should refer to the instant when the daylight saving time transition occurs (begins).

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
