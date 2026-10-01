---
id: "java-en-function-gregoriancalendar-getleastmaximum"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.getLeastMaximum"
signature: "public int getLeastMaximum(int field)"
title: "GregorianCalendar.getLeastMaximum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.getLeastMaximum

```java
public int getLeastMaximum(int field)
```

Returns the lowest maximum value for the given calendar field
 of this `GregorianCalendar` instance. The lowest
 maximum value is defined as the smallest value returned by
 `getActualMaximum` for any possible time value,
 taking into consideration the current values of the
 `getFirstDayOfWeek() getFirstDayOfWeek`,
 `getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek`,
 `getGregorianChange() getGregorianChange` and
 `getTimeZone() getTimeZone` methods.

**参数**

- **field** — the calendar field

**返回**

- the lowest maximum value for the given calendar field.

**参见**

- #getMinimum(int)
- #getMaximum(int)
- #getGreatestMinimum(int)
- #getActualMinimum(int)
- #getActualMaximum(int)
