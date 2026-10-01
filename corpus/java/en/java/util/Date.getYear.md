---
id: "java-en-function-date-getyear"
language: "java"
lang: "en"
category: "function"
name: "Date.getYear"
signature: "public int getYear()"
title: "Date.getYear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.getYear

```java
public int getYear()
```

Returns a value that is the result of subtracting 1900 from the
 year that contains or begins with the instant in time represented
 by this `Date` object, as interpreted in the local
 time zone.

**返回**

- the year represented by this date, minus 1900.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.get(Calendar.YEAR) - 1900`.
