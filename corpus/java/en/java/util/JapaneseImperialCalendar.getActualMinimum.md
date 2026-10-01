---
id: "java-en-function-japaneseimperialcalendar-getactualminimum"
language: "java"
lang: "en"
category: "function"
name: "JapaneseImperialCalendar.getActualMinimum"
signature: "public int getActualMinimum(int field)"
title: "JapaneseImperialCalendar.getActualMinimum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/JapaneseImperialCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseImperialCalendar.getActualMinimum

```java
public int getActualMinimum(int field)
```

Returns the minimum value that this calendar field could have,
 taking into consideration the given time value and the current
 values of the
 `getFirstDayOfWeek() getFirstDayOfWeek`,
 `getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek`,
 and `getTimeZone() getTimeZone` methods.

**参数**

- **field** — the calendar field

**返回**

- the minimum of the given field for the time value of this `JapaneseImperialCalendar`

**参见**

- #getMinimum(int)
- #getMaximum(int)
- #getGreatestMinimum(int)
- #getLeastMaximum(int)
- #getActualMaximum(int)
