---
id: "java-en-function-calendar-getleastmaximum"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getLeastMaximum"
signature: "public abstract int getLeastMaximum(int field)"
title: "Calendar.getLeastMaximum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getLeastMaximum

```java
public abstract int getLeastMaximum(int field)
```

Returns the lowest maximum value for the given calendar field
 of this `Calendar` instance. The lowest maximum
 value is defined as the smallest value returned by `getActualMaximum` for any possible time value. The least
 maximum value depends on calendar system specific parameters of
 the instance. For example, a `Calendar` for the
 Gregorian calendar system returns 28 for the
 `DAY_OF_MONTH` field, because the 28th is the last
 day of the shortest month of this calendar, February in a
 common year.

**参数**

- **field** — the calendar field.

**返回**

- the lowest maximum value for the given calendar field.

**参见**

- #getMinimum(int)
- #getMaximum(int)
- #getGreatestMinimum(int)
- #getActualMinimum(int)
- #getActualMaximum(int)
