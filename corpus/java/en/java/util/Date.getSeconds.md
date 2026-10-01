---
id: "java-en-function-date-getseconds"
language: "java"
lang: "en"
category: "function"
name: "Date.getSeconds"
signature: "public int getSeconds()"
title: "Date.getSeconds"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.getSeconds

```java
public int getSeconds()
```

Returns the number of seconds past the minute represented by this date.
 The value returned is between `0` and `61`. The
 values `60` and `61` can only occur on those
 Java Virtual Machines that take leap seconds into account.

**返回**

- the number of seconds past the minute represented by this date.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.get(Calendar.SECOND)`.
