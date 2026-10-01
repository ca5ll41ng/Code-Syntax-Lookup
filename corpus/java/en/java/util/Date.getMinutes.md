---
id: "java-en-function-date-getminutes"
language: "java"
lang: "en"
category: "function"
name: "Date.getMinutes"
signature: "public int getMinutes()"
title: "Date.getMinutes"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.getMinutes

```java
public int getMinutes()
```

Returns the number of minutes past the hour represented by this date,
 as interpreted in the local time zone.
 The value returned is between `0` and `59`.

**返回**

- the number of minutes past the hour represented by this date.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.get(Calendar.MINUTE)`.
