---
id: "python-en-function-time-time"
language: "python"
lang: "en"
category: "function"
name: "time"
title: "For the above Timezone constants (`altzone`, `daylight`, `timezone`,"
directive: "module"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#module-time"
license: "PSF"
updated: "2026-10-01"
---

# For the above Timezone constants (`altzone`, `daylight`, `timezone`,

> **Note**
>
> For the above Timezone constants (`altzone`, `daylight`, `timezone`,
> and `tzname`), the value is determined by the timezone rules in effect
> at module load time or the last time `tzset` is called and may be incorrect
> for times in the past.  It is recommended to use the `~struct_time.tm_gmtoff` and
> `~struct_time.tm_zone` results from `localtime` to obtain timezone information.
>

> **Seealso**
>
> Module `datetime`
>    More object-oriented interface to dates and times.
>
> Module `locale`
>    Internationalization services.  The locale setting affects the interpretation
>    of many format specifiers in `strftime` and `strptime`.
>
> Module `calendar`
>    General calendar-related functions.   `~calendar.timegm` is the
>    inverse of `gmtime` from this module.
>

#### Footnotes

.. [1] The use of `%Z` is now deprecated, but the `%z` escape that expands to the
   preferred hour/minute offset is not supported by all ANSI C libraries. Also, a
   strict reading of the original 1982 RFC 822 standard calls for a two-digit
   year (`%y` rather than `%Y`), but practice moved to 4-digit years long before the
   year 2000.  After that, RFC 822 became obsolete and the 4-digit year has
   been first recommended by RFC 1123 and then mandated by RFC 2822,
   with RFC 5322 continuing this requirement.
