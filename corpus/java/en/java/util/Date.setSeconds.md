---
id: "java-en-function-date-setseconds"
language: "java"
lang: "en"
category: "function"
name: "Date.setSeconds"
signature: "public void setSeconds(int seconds)"
title: "Date.setSeconds"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.setSeconds

```java
public void setSeconds(int seconds)
```

Sets the seconds of this `Date` to the specified value.
 This `Date` object is modified so that it represents a
 point in time within the specified second of the minute, with
 the year, month, date, hour, and minute the same as before, as
 interpreted in the local time zone.

**参数**

- **seconds** — the seconds value.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.set(Calendar.SECOND, int seconds)`.
