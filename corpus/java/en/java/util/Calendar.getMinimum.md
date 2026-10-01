---
id: "java-en-function-calendar-getminimum"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getMinimum"
signature: "public abstract int getMinimum(int field)"
title: "Calendar.getMinimum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getMinimum

```java
public abstract int getMinimum(int field)
```

Returns the minimum value for the given calendar field of this
 `Calendar` instance. The minimum value is defined as
 the smallest value returned by the `get(int) get` method
 for any possible time value.  The minimum value depends on
 calendar system specific parameters of the instance.

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
