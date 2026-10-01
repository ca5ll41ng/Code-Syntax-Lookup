---
id: "java-en-function-gregoriancalendar-getactualminimum"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.getActualMinimum"
signature: "public int getActualMinimum(int field)"
title: "GregorianCalendar.getActualMinimum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.getActualMinimum

```java
public int getActualMinimum(int field)
```

Returns the minimum value that this calendar field could have,
 taking into consideration the given time value and the current
 values of the
 `getFirstDayOfWeek() getFirstDayOfWeek`,
 `getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek`,
 `getGregorianChange() getGregorianChange` and
 `getTimeZone() getTimeZone` methods.

 

For example, if the Gregorian change date is January 10,
 1970 and the date of this `GregorianCalendar` is
 January 20, 1970, the actual minimum value of the
 `DAY_OF_MONTH` field is 10 because the previous date
 of January 10, 1970 is December 27, 1996 (in the Julian
 calendar). Therefore, December 28, 1969 to January 9, 1970
 don't exist.

**参数**

- **field** — the calendar field

**返回**

- the minimum of the given field for the time value of this `GregorianCalendar`

**参见**

- #getMinimum(int)
- #getMaximum(int)
- #getGreatestMinimum(int)
- #getLeastMaximum(int)
- #getActualMaximum(int)

> *Since 1.2*
