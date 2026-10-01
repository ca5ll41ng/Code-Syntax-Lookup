---
id: "java-en-function-calendar-getmaximum"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getMaximum"
signature: "public abstract int getMaximum(int field)"
title: "Calendar.getMaximum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getMaximum

```java
public abstract int getMaximum(int field)
```

Returns the maximum value for the given calendar field of this
 `Calendar` instance. The maximum value is defined as
 the largest value returned by the `get(int) get` method
 for any possible time value. The maximum value depends on
 calendar system specific parameters of the instance.

**参数**

- **field** — the calendar field.

**返回**

- the maximum value for the given calendar field.

**参见**

- #getMinimum(int)
- #getGreatestMinimum(int)
- #getLeastMaximum(int)
- #getActualMinimum(int)
- #getActualMaximum(int)
