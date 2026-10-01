---
id: "java-en-function-clock-systemutc"
language: "java"
lang: "en"
category: "function"
name: "Clock.systemUTC"
signature: "public static Clock systemUTC()"
title: "Clock.systemUTC"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.systemUTC

```java
public static Clock systemUTC()
```

Obtains a clock that returns the current instant using the best available
 system clock, converting to date and time using the UTC time-zone.
 

 This clock, rather than `systemDefaultZone`, should be used when
 you need the current instant without the date or time.
 

 This clock is based on the best available system clock.
 This may use `currentTimeMillis`, or a higher resolution
 clock if one is available.
 

 Conversion from instant to date or time uses the `UTC UTC time-zone`.
 

 The returned implementation is immutable, thread-safe and `Serializable`.
 It is equivalent to `system(ZoneOffset.UTC)`.

**返回**

- a clock that uses the best available system clock in the UTC zone, not null
