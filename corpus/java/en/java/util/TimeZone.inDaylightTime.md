---
id: "java-en-function-timezone-indaylighttime"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.inDaylightTime"
signature: "public abstract boolean inDaylightTime(Date date)"
title: "TimeZone.inDaylightTime"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.inDaylightTime

```java
public abstract boolean inDaylightTime(Date date)
```

Queries if the given `date` is in Daylight Saving Time in
 this time zone.

**参数**

- **date** — the given Date.

**返回**

- `true` if the given date is in Daylight Saving Time, `false`, otherwise.

**异常**

- **NullPointerException** — This method may throw a `NullPointerException` if `date` is `null`
