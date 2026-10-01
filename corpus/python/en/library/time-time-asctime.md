---
id: "python-en-function-time-asctime"
language: "python"
lang: "en"
category: "function"
name: "asctime"
signature: "asctime([time_tuple])"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.asctime"
license: "PSF"
updated: "2026-10-01"
---

# asctime

Convert a tuple or `struct_time` representing a time as returned by
`gmtime` or `localtime` to a string of the following
form: `'Sun Jun 20 23:21:05 1993'`. The day field is two characters long
and is space padded if the day is a single digit,
for example: `'Wed Jun  9 04:26:40 1993'`.

If *time_tuple* is not provided,
the current time as returned by `localtime` is used.
Locale information is not used by `asctime`.

> **Note**
>
> Unlike the C function of the same name, `asctime` does not add a
> trailing newline.
>
