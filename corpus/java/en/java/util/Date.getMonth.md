---
id: "java-en-function-date-getmonth"
language: "java"
lang: "en"
category: "function"
name: "Date.getMonth"
signature: "public int getMonth()"
title: "Date.getMonth"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.getMonth

```java
public int getMonth()
```

Returns a number representing the month that contains or begins
 with the instant in time represented by this `Date` object.
 The value returned is between `0` and `11`,
 with the value `0` representing January.

**返回**

- the month represented by this date.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.get(Calendar.MONTH)`.
