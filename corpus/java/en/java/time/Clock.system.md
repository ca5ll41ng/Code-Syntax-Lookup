---
id: "java-en-function-clock-system"
language: "java"
lang: "en"
category: "function"
name: "Clock.system"
signature: "public static Clock system(ZoneId zone)"
title: "Clock.system"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.system

```java
public static Clock system(ZoneId zone)
```

Obtains a clock that returns the current instant using the best available
 system clock.
 

 This clock is based on the best available system clock.
 This may use `currentTimeMillis`, or a higher resolution
 clock if one is available.
 

 Conversion from instant to date or time uses the specified time-zone.
 

 The returned implementation is immutable, thread-safe and `Serializable`.

**参数**

- **zone** — the time-zone to use to convert the instant to date-time, not null

**返回**

- a clock that uses the best available system clock in the specified zone, not null
