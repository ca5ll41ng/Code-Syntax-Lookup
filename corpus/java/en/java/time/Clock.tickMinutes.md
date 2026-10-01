---
id: "java-en-function-clock-tickminutes"
language: "java"
lang: "en"
category: "function"
name: "Clock.tickMinutes"
signature: "public static Clock tickMinutes(ZoneId zone)"
title: "Clock.tickMinutes"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.tickMinutes

```java
public static Clock tickMinutes(ZoneId zone)
```

Obtains a clock that returns the current instant ticking in whole minutes
 using the best available system clock.
 

 This clock will always have the nano-of-second and second-of-minute fields set to zero.
 This ensures that the visible time ticks in whole minutes.
 The underlying clock is the best available system clock, equivalent to
 using `system`.
 

 Implementations may use a caching strategy for performance reasons.
 As such, it is possible that the start of the minute observed via this
 clock will be later than that observed directly via the underlying clock.
 

 The returned implementation is immutable, thread-safe and `Serializable`.
 It is equivalent to `tick(system(zone), Duration.ofMinutes(1))`.

**参数**

- **zone** — the time-zone to use to convert the instant to date-time, not null

**返回**

- a clock that ticks in whole minutes using the specified zone, not null
