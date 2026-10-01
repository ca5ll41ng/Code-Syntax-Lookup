---
id: "java-en-function-gregoriancalendar-getactualmaximum"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.getActualMaximum"
signature: "public int getActualMaximum(int field)"
title: "GregorianCalendar.getActualMaximum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.getActualMaximum

```java
public int getActualMaximum(int field)
```

Returns the maximum value that this calendar field could have,
 taking into consideration the given time value and the current
 values of the
 `getFirstDayOfWeek() getFirstDayOfWeek`,
 `getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek`,
 `getGregorianChange() getGregorianChange` and
 `getTimeZone() getTimeZone` methods.
 For example, if the date of this instance is February 1, 2004,
 the actual maximum value of the `DAY_OF_MONTH` field
 is 29 because 2004 is a leap year, and if the date of this
 instance is February 1, 2005, it's 28.

 

This method calculates the maximum value of `WEEK_OF_YEAR WEEK_OF_YEAR` based on the `YEAR YEAR` (calendar year) value, not the week year. Call `getWeeksInWeekYear` to get the maximum value of `WEEK_OF_YEAR` in the week year of this `GregorianCalendar`.

**参数**

- **field** — the calendar field

**返回**

- the maximum of the given field for the time value of this `GregorianCalendar`

**参见**

- #getMinimum(int)
- #getMaximum(int)
- #getGreatestMinimum(int)
- #getLeastMaximum(int)
- #getActualMinimum(int)

> *Since 1.2*
