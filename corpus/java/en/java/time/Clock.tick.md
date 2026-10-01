---
id: "java-en-function-clock-tick"
language: "java"
lang: "en"
category: "function"
name: "Clock.tick"
signature: "public static Clock tick(Clock baseClock, Duration tickDuration)"
title: "Clock.tick"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.tick

```java
public static Clock tick(Clock baseClock, Duration tickDuration)
```

Obtains a clock that returns instants from the specified clock truncated
 to the nearest occurrence of the specified duration.
 

 This clock will only tick as per the specified duration. Thus, if the duration
 is half a second, the clock will return instants truncated to the half second.
 

 The tick duration must be positive. If it has a part smaller than a whole
 millisecond, then the whole duration must divide into one second without
 leaving a remainder. All normal tick durations will match these criteria,
 including any multiple of hours, minutes, seconds and milliseconds, and
 sensible nanosecond durations, such as 20ns, 250,000ns and 500,000ns.
 

 A duration of zero or one nanosecond would have no truncation effect.
 Passing one of these will return the underlying clock.
 

 Implementations may use a caching strategy for performance reasons.
 As such, it is possible that the start of the requested duration observed
 via this clock will be later than that observed directly via the underlying clock.
 

 The returned implementation is immutable, thread-safe and `Serializable`
 providing that the base clock is.

**参数**

- **baseClock** — the base clock to base the ticking clock on, not null
- **tickDuration** — the duration of each visible tick, not negative, not null

**返回**

- a clock that ticks in whole units of the duration, not null

**异常**

- **IllegalArgumentException** — if the duration is negative, or has a part smaller than a whole millisecond such that the whole duration is not divisible into one second
- **ArithmeticException** — if the duration is too large to be represented as nanos
