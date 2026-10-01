---
id: "java-en-function-date-sethours"
language: "java"
lang: "en"
category: "function"
name: "Date.setHours"
signature: "public void setHours(int hours)"
title: "Date.setHours"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.setHours

```java
public void setHours(int hours)
```

Sets the hour of this `Date` object to the specified value.
 This `Date` object is modified so that it represents a point
 in time within the specified hour of the day, with the year, month,
 date, minute, and second the same as before, as interpreted in the
 local time zone.

**参数**

- **hours** — the hour value.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.set(Calendar.HOUR_OF_DAY, int hours)`.
