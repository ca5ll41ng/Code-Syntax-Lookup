---
id: "java-en-function-date-getday"
language: "java"
lang: "en"
category: "function"
name: "Date.getDay"
signature: "public int getDay()"
title: "Date.getDay"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.getDay

```java
public int getDay()
```

Returns the day of the week represented by this date. The
 returned value (`0` = Sunday, `1` = Monday,
 `2` = Tuesday, `3` = Wednesday, `4` =
 Thursday, `5` = Friday, `6` = Saturday)
 represents the day of the week that contains or begins with
 the instant in time represented by this `Date` object,
 as interpreted in the local time zone.

**返回**

- the day of the week represented by this date.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.get(Calendar.DAY_OF_WEEK)`.
