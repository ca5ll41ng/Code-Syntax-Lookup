---
id: "java-en-function-date-getdate"
language: "java"
lang: "en"
category: "function"
name: "Date.getDate"
signature: "public int getDate()"
title: "Date.getDate"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.getDate

```java
public int getDate()
```

Returns the day of the month represented by this `Date` object.
 The value returned is between `1` and `31`
 representing the day of the month that contains or begins with the
 instant in time represented by this `Date` object, as
 interpreted in the local time zone.

**返回**

- the day of the month represented by this date.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.get(Calendar.DAY_OF_MONTH)`.
