---
id: "java-en-function-date-setminutes"
language: "java"
lang: "en"
category: "function"
name: "Date.setMinutes"
signature: "public void setMinutes(int minutes)"
title: "Date.setMinutes"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.setMinutes

```java
public void setMinutes(int minutes)
```

Sets the minutes of this `Date` object to the specified value.
 This `Date` object is modified so that it represents a point
 in time within the specified minute of the hour, with the year, month,
 date, hour, and second the same as before, as interpreted in the
 local time zone.

**参数**

- **minutes** — the value of the minutes.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.set(Calendar.MINUTE, int minutes)`.
