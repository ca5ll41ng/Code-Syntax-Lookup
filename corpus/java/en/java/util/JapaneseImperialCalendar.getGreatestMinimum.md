---
id: "java-en-function-japaneseimperialcalendar-getgreatestminimum"
language: "java"
lang: "en"
category: "function"
name: "JapaneseImperialCalendar.getGreatestMinimum"
signature: "public int getGreatestMinimum(int field)"
title: "JapaneseImperialCalendar.getGreatestMinimum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/JapaneseImperialCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseImperialCalendar.getGreatestMinimum

```java
public int getGreatestMinimum(int field)
```

Returns the highest minimum value for the given calendar field
 of this `GregorianCalendar` instance. The highest
 minimum value is defined as the largest value returned by
 `getActualMinimum` for any possible time value,
 taking into consideration the current values of the
 `getFirstDayOfWeek() getFirstDayOfWeek`,
 `getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek`,
 and `getTimeZone() getTimeZone` methods.

**参数**

- **field** — the calendar field.

**返回**

- the highest minimum value for the given calendar field.

**参见**

- #getMinimum(int)
- #getMaximum(int)
- #getLeastMaximum(int)
- #getActualMinimum(int)
- #getActualMaximum(int)
