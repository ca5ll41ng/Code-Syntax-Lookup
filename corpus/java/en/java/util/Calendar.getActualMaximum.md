---
id: "java-en-function-calendar-getactualmaximum"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getActualMaximum"
signature: "public int getActualMaximum(int field)"
title: "Calendar.getActualMaximum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getActualMaximum

```java
public int getActualMaximum(int field)
```

Returns the maximum value that the specified calendar field
 could have, given the time value of this
 `Calendar`. For example, the actual maximum value of
 the `MONTH` field is 12 in some years, and 13 in
 other years in the Hebrew calendar system.

 

The default implementation of this method uses an iterative
 algorithm to determine the actual maximum value for the
 calendar field. Subclasses should, if possible, override this
 with a more efficient implementation.

**参数**

- **field** — the calendar field

**返回**

- the maximum of the given calendar field for the time value of this `Calendar`

**参见**

- #getMinimum(int)
- #getMaximum(int)
- #getGreatestMinimum(int)
- #getLeastMaximum(int)
- #getActualMinimum(int)

> *Since 1.2*
