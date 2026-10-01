---
id: "java-en-function-instantsource-tick"
language: "java"
lang: "en"
category: "function"
name: "InstantSource.tick"
signature: "static InstantSource tick(InstantSource baseSource, Duration tickDuration)"
title: "InstantSource.tick"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/InstantSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InstantSource.tick

```java
static InstantSource tick(InstantSource baseSource, Duration tickDuration)
```

Obtains a source that returns instants from the specified source truncated to
 the nearest occurrence of the specified duration.
 

 This source will only tick as per the specified duration. Thus, if the
 duration is half a second, the source will return instants truncated to the
 half second.
 

 The tick duration must be positive. If it has a part smaller than a whole
 millisecond, then the whole duration must divide into one second without
 leaving a remainder. All normal tick durations will match these criteria,
 including any multiple of hours, minutes, seconds and milliseconds, and
 sensible nanosecond durations, such as 20ns, 250,000ns and 500,000ns.
 

 A duration of zero or one nanosecond would have no truncation effect. Passing
 one of these will return the underlying source.
 

 Implementations may use a caching strategy for performance reasons. As such,
 it is possible that the start of the requested duration observed via this
 source will be later than that observed directly via the underlying source.
 

 The returned implementation is immutable, thread-safe and
 `Serializable` providing that the base source is.

**参数**

- **baseSource** — the base source to base the ticking source on, not null
- **tickDuration** — the duration of each visible tick, not negative, not null

**返回**

- a source that ticks in whole units of the duration, not null

**异常**

- **IllegalArgumentException** — if the duration is negative, or has a part smaller than a whole millisecond such that the whole duration is not divisible into one second
- **ArithmeticException** — if the duration is too large to be represented as nanos
