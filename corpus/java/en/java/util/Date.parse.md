---
id: "java-en-function-date-parse"
language: "java"
lang: "en"
category: "function"
name: "Date.parse"
signature: "public static long parse(String s)"
title: "Date.parse"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.parse

```java
public static long parse(String s)
```

Attempts to interpret the string `s` as a representation
 of a date and time. If the attempt is successful, the time
 indicated is returned represented as the distance, measured in
 milliseconds, of that time from the epoch (00:00:00 GMT on
 January 1, 1970). If the attempt fails, an
 `IllegalArgumentException` is thrown.
 

 It accepts many syntaxes; in particular, it recognizes the IETF
 standard date syntax: "Sat, 12 Aug 1995 13:30:00 GMT". It also
 understands the continental U.S. time-zone abbreviations, but for
 general use, a time-zone offset should be used: "Sat, 12 Aug 1995
 13:30:00 GMT+0430" (4 hours, 30 minutes west of the Greenwich
 meridian). If no time zone is specified, the local time zone is
 assumed. GMT and UTC are considered equivalent.
 

 The string `s` is processed from left to right, looking for
 data of interest. Any material in `s` that is within the
 ASCII parenthesis characters `(` and `)` is ignored.
 Parentheses may be nested. Otherwise, the only characters permitted
 within `s` are these ASCII characters:
 
```

 abcdefghijklmnopqrstuvwxyz
 ABCDEFGHIJKLMNOPQRSTUVWXYZ
 0123456789,+-:/
```

 and whitespace characters.

 A consecutive sequence of decimal digits is treated as a decimal
 number:
 
- If a number is preceded by `+` or `-` and a year
     has already been recognized, then the number is a time-zone
     offset. If the number is less than 24, it is an offset measured
     in hours. Otherwise, it is regarded as an offset in minutes,
     expressed in 24-hour time format without punctuation. A
     preceding `-` means a westward offset. Time zone offsets
     are always relative to UTC (Greenwich). Thus, for example,
     `-5` occurring in the string would mean "five hours west
     of Greenwich" and `+0430` would mean "four hours and
     thirty minutes east of Greenwich." It is permitted for the
     string to specify `GMT`, `UT`, or `UTC`
     redundantly-for example, `GMT-5` or `utc+0430`.
 
- The number is regarded as a year number if one of the
     following conditions is true:
 
     
- The number is equal to or greater than 70 and followed by a
         space, comma, slash, or end of string
     
- The number is less than 70, and both a month and a day of
         the month have already been recognized
 

     If the recognized year number is less than 100, it is
     interpreted as an abbreviated year relative to a century of
     which dates are within 80 years before and 19 years after
     the time when the Date class is initialized.
     After adjusting the year number, 1900 is subtracted from
     it. For example, if the current year is 1999 then years in
     the range 19 to 99 are assumed to mean 1919 to 1999, while
     years from 0 to 18 are assumed to mean 2000 to 2018.  Note
     that this is slightly different from the interpretation of
     years less than 100 that is used in `java.text.SimpleDateFormat`.
 
- If the number is followed by a colon, it is regarded as an hour,
     unless an hour has already been recognized, in which case it is
     regarded as a minute.
 
- If the number is followed by a slash, it is regarded as a month
     (it is decreased by 1 to produce a number in the range `0`
     to `11`), unless a month has already been recognized, in
     which case it is regarded as a day of the month.
 
- If the number is followed by whitespace, a comma, a hyphen, or
     end of string, then if an hour has been recognized but not a
     minute, it is regarded as a minute; otherwise, if a minute has
     been recognized but not a second, it is regarded as a second;
     otherwise, it is regarded as a day of the month. 

 A consecutive sequence of letters is regarded as a word and treated
 as follows:
 
- A word that matches `AM`, ignoring case, is ignored (but
     the parse fails if an hour has not been recognized or is less
     than `1` or greater than `12`).
 
- A word that matches `PM`, ignoring case, adds `12`
     to the hour (but the parse fails if an hour has not been
     recognized or is less than `1` or greater than `12`).
 
- Any word that matches any prefix of `SUNDAY, MONDAY, TUESDAY,
     WEDNESDAY, THURSDAY, FRIDAY`, or `SATURDAY`, ignoring
     case, is ignored. For example, `sat, Friday, TUE`, and
     `Thurs` are ignored.
 
- Otherwise, any word that matches any prefix of `JANUARY,
     FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER,
     OCTOBER, NOVEMBER`, or `DECEMBER`, ignoring case, and
     considering them in the order given here, is recognized as
     specifying a month and is converted to a number (`0` to
     `11`). For example, `aug, Sept, april`, and
     `NOV` are recognized as months. So is `Ma`, which
     is recognized as `MARCH`, not `MAY`.
 
- Any word that matches `GMT, UT`, or `UTC`, ignoring
     case, is treated as referring to UTC.
 
- Any word that matches `EST, CST, MST`, or `PST`,
     ignoring case, is recognized as referring to the time zone in
     North America that is five, six, seven, or eight hours west of
     Greenwich, respectively. Any word that matches `EDT, CDT,
     MDT`, or `PDT`, ignoring case, is recognized as
     referring to the same time zone, respectively, during daylight
     saving time.

 Once the entire string s has been scanned, it is converted to a time
 result in one of two ways. If a time zone or time-zone offset has been
 recognized, then the year, month, day of month, hour, minute, and
 second are interpreted in UTC and then the time-zone offset is
 applied. Otherwise, the year, month, day of month, hour, minute, and
 second are interpreted in the local time zone.

**参数**

- **s** — a string to be parsed as a date.

**返回**

- the number of milliseconds since January 1, 1970, 00:00:00 GMT represented by the string argument.

**异常**

- **IllegalArgumentException** — if `s` cannot be interpreted as a representation of a date and time.

**参见**

- java.text.DateFormat

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `DateFormat.parse(String s)`.
