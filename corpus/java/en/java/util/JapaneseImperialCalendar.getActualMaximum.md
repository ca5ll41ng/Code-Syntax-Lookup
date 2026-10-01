---
id: "java-en-function-japaneseimperialcalendar-getactualmaximum"
language: "java"
lang: "en"
category: "function"
name: "JapaneseImperialCalendar.getActualMaximum"
signature: "public int getActualMaximum(int field)"
title: "JapaneseImperialCalendar.getActualMaximum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/JapaneseImperialCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseImperialCalendar.getActualMaximum

```java
public int getActualMaximum(int field)
```

Returns the maximum value that this calendar field could have,
 taking into consideration the given time value and the current
 values of the
 `getFirstDayOfWeek() getFirstDayOfWeek`,
 `getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek`,
 and
 `getTimeZone() getTimeZone` methods.
 For example, if the date of this instance is Heisei 16February 1,
 the actual maximum value of the `DAY_OF_MONTH` field
 is 29 because Heisei 16 is a leap year, and if the date of this
 instance is Heisei 17 February 1, it's 28.

**参数**

- **field** — the calendar field

**返回**

- the maximum of the given field for the time value of this `JapaneseImperialCalendar`

**参见**

- #getMinimum(int)
- #getMaximum(int)
- #getGreatestMinimum(int)
- #getLeastMaximum(int)
- #getActualMinimum(int)
