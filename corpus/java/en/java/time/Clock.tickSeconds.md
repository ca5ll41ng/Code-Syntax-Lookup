---
id: "java-en-function-clock-tickseconds"
language: "java"
lang: "en"
category: "function"
name: "Clock.tickSeconds"
signature: "public static Clock tickSeconds(ZoneId zone)"
title: "Clock.tickSeconds"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.tickSeconds

```java
public static Clock tickSeconds(ZoneId zone)
```

Obtains a clock that returns the current instant ticking in whole seconds
 using the best available system clock.
 

 This clock will always have the nano-of-second field set to zero.
 This ensures that the visible time ticks in whole seconds.
 The underlying clock is the best available system clock, equivalent to
 using `system`.
 

 Implementations may use a caching strategy for performance reasons.
 As such, it is possible that the start of the second observed via this
 clock will be later than that observed directly via the underlying clock.
 

 The returned implementation is immutable, thread-safe and `Serializable`.
 It is equivalent to `tick(system(zone), Duration.ofSeconds(1))`.

**参数**

- **zone** — the time-zone to use to convert the instant to date-time, not null

**返回**

- a clock that ticks in whole seconds using the specified zone, not null
