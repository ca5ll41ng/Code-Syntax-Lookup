---
id: "java-en-function-calendar-getgreatestminimum"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getGreatestMinimum"
signature: "public abstract int getGreatestMinimum(int field)"
title: "Calendar.getGreatestMinimum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getGreatestMinimum

```java
public abstract int getGreatestMinimum(int field)
```

Returns the highest minimum value for the given calendar field
 of this `Calendar` instance. The highest minimum
 value is defined as the largest value returned by `getActualMinimum` for any possible time value. The
 greatest minimum value depends on calendar system specific
 parameters of the instance.

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
