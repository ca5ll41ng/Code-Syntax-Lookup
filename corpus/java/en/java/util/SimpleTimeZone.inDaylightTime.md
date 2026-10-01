---
id: "java-en-function-simpletimezone-indaylighttime"
language: "java"
lang: "en"
category: "function"
name: "SimpleTimeZone.inDaylightTime"
signature: "public boolean inDaylightTime(Date date)"
title: "SimpleTimeZone.inDaylightTime"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SimpleTimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleTimeZone.inDaylightTime

```java
public boolean inDaylightTime(Date date)
```

Queries if the given date is in daylight saving time.
 `NullPointerException` if `date` is `null`

**返回**

- true if daylight saving time is in effective at the given date; false otherwise.

**异常**

- **NullPointerException** — This method may throw a `NullPointerException` if `date` is `null`
