---
id: "java-en-function-clock-fixed"
language: "java"
lang: "en"
category: "function"
name: "Clock.fixed"
signature: "public static Clock fixed(Instant fixedInstant, ZoneId zone)"
title: "Clock.fixed"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.fixed

```java
public static Clock fixed(Instant fixedInstant, ZoneId zone)
```

Obtains a clock that always returns the same instant.
 

 This clock simply returns the specified instant.
 As such, it is not a clock in the conventional sense.
 The main use case for this is in testing, where the fixed clock ensures
 tests are not dependent on the current clock.
 

 The returned implementation is immutable, thread-safe and `Serializable`.

**参数**

- **fixedInstant** — the instant to use as the clock, not null
- **zone** — the time-zone to use to convert the instant to date-time, not null

**返回**

- a clock that always returns the same instant, not null
