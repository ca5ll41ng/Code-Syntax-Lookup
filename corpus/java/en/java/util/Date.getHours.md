---
id: "java-en-function-date-gethours"
language: "java"
lang: "en"
category: "function"
name: "Date.getHours"
signature: "public int getHours()"
title: "Date.getHours"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.getHours

```java
public int getHours()
```

Returns the hour represented by this `Date` object. The
 returned value is a number (`0` through `23`)
 representing the hour within the day that contains or begins
 with the instant in time represented by this `Date`
 object, as interpreted in the local time zone.

**返回**

- the hour represented by this date.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.get(Calendar.HOUR_OF_DAY)`.
