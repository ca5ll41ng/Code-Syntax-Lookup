---
id: "java-en-function-clock-offset"
language: "java"
lang: "en"
category: "function"
name: "Clock.offset"
signature: "public static Clock offset(Clock baseClock, Duration offsetDuration)"
title: "Clock.offset"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.offset

```java
public static Clock offset(Clock baseClock, Duration offsetDuration)
```

Obtains a clock that returns instants from the specified clock with the
 specified duration added.
 

 This clock wraps another clock, returning instants that are later by the
 specified duration. If the duration is negative, the instants will be
 earlier than the current date and time.
 The main use case for this is to simulate running in the future or in the past.
 

 A duration of zero would have no offsetting effect.
 Passing zero will return the underlying clock.
 

 The returned implementation is immutable, thread-safe and `Serializable`
 providing that the base clock is.

**参数**

- **baseClock** — the base clock to add the duration to, not null
- **offsetDuration** — the duration to add, not null

**返回**

- a clock based on the base clock with the duration added, not null
