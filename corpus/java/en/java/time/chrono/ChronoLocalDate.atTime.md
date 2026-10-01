---
id: "java-en-function-chronolocaldate-attime"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.atTime"
signature: "default ChronoLocalDateTime<?> atTime(LocalTime localTime)"
title: "ChronoLocalDate.atTime"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.atTime

```java
default ChronoLocalDateTime<?> atTime(LocalTime localTime)
```

Combines this date with a time to create a `ChronoLocalDateTime`.
 

 This returns a `ChronoLocalDateTime` formed from this date at the specified time.
 All possible combinations of date and time are valid.

**参数**

- **localTime** — the local time to use, not null

**返回**

- the local date-time formed from this date and the specified time, not null
