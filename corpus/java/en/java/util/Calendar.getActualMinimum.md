---
id: "java-en-function-calendar-getactualminimum"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getActualMinimum"
signature: "public int getActualMinimum(int field)"
title: "Calendar.getActualMinimum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getActualMinimum

```java
public int getActualMinimum(int field)
```

Returns the minimum value that the specified calendar field
 could have, given the time value of this `Calendar`.

 

The default implementation of this method uses an iterative
 algorithm to determine the actual minimum value for the
 calendar field. Subclasses should, if possible, override this
 with a more efficient implementation - in many cases, they can
 simply return `getMinimum()`.

**参数**

- **field** — the calendar field

**返回**

- the minimum of the given calendar field for the time value of this `Calendar`

**参见**

- #getMinimum(int)
- #getMaximum(int)
- #getGreatestMinimum(int)
- #getLeastMaximum(int)
- #getActualMaximum(int)

> *Since 1.2*
