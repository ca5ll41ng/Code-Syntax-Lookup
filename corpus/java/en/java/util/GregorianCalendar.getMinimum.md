---
id: "java-en-function-gregoriancalendar-getminimum"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.getMinimum"
signature: "public int getMinimum(int field)"
title: "GregorianCalendar.getMinimum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.getMinimum

```java
public int getMinimum(int field)
```

Returns the minimum value for the given calendar field of this
 `GregorianCalendar` instance. The minimum value is
 defined as the smallest value returned by the `get(int) get` method for any possible time value,
 taking into consideration the current values of the
 `getFirstDayOfWeek() getFirstDayOfWeek`,
 `getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek`,
 `getGregorianChange() getGregorianChange` and
 `getTimeZone() getTimeZone` methods.

**参数**

- **field** — the calendar field.

**返回**

- the minimum value for the given calendar field.

**参见**

- #getMaximum(int)
- #getGreatestMinimum(int)
- #getLeastMaximum(int)
- #getActualMinimum(int)
- #getActualMaximum(int)
