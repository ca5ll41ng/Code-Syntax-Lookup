---
id: "en-php-guide-intl-intldateformatter-constants"
language: "php"
lang: "en"
category: "guide"
name: "intl.intldateformatter-constants"
title: "Predefined Constants"
module: "intl"
source_url: "https://www.php.net/manual/en/intl.intldateformatter-constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

These constants are used to specify different formats in the constructor for DateType and TimeType.

- **`IntlDateFormatter::NONE` `int`** — Do not include this element
- **`IntlDateFormatter::FULL` `int`** — Completely specified style (Tuesday, April 12, 1952 AD or 3:30:42pm PST)
- **`IntlDateFormatter::LONG` `int`** — Long style (January 12, 1952 or 3:30:32pm)
- **`IntlDateFormatter::MEDIUM` `int`** — Medium style (Jan 12, 1952)
- **`IntlDateFormatter::SHORT` `int`** — Most abbreviated style, only essential data (12/13/52 or 3:30pm)
- **`IntlDateFormatter::RELATIVE_FULL` `int`** — The same as `IntlDateFormatter::FULL`, but yesterday, today, and tomorrow show as `yesterday`, `today`, and `tomorrow`, respectively. Available as of PHP 8.0.0, for `$dateType` only.
- **`IntlDateFormatter::RELATIVE_LONG` `int`** — The same as `IntlDateFormatter::LONG`, but yesterday, today, and tomorrow show as `yesterday`, `today`, and `tomorrow`, respectively. Available as of PHP 8.0.0, for `$dateType` only.
- **`IntlDateFormatter::RELATIVE_MEDIUM` `int`** — The same as `IntlDateFormatter::MEDIUM`, but yesterday, today, and tomorrow show as `yesterday`, `today`, and `tomorrow`, respectively. Available as of PHP 8.0.0, for `$dateType` only.
- **`IntlDateFormatter::RELATIVE_SHORT` `int`** — The same as `IntlDateFormatter::SHORT`, but yesterday, today, and tomorrow show as `yesterday`, `today`, and `tomorrow`, respectively. Available as of PHP 8.0.0, for `$dateType` only.
- **`IntlDateFormatter::PATTERN` `int`** — Uses the pattern given in `$pattern`. Available as of PHP 8.4.0.

The following int constants are used to specify the calendar. These calendars are all based directly on the Gregorian calendar. Non-Gregorian calendars need to be specified in locale. Examples might include locale="hi@calendar=BUDDHIST".

- **`IntlDateFormatter::TRADITIONAL` `int`** — Non-Gregorian Calendar
- **`IntlDateFormatter::GREGORIAN` `int`** — Gregorian Calendar
