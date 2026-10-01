---
id: "java-en-function-clock-systemdefaultzone"
language: "java"
lang: "en"
category: "function"
name: "Clock.systemDefaultZone"
signature: "public static Clock systemDefaultZone()"
title: "Clock.systemDefaultZone"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.systemDefaultZone

```java
public static Clock systemDefaultZone()
```

Obtains a clock that returns the current instant using the best available
 system clock, converting to date and time using the default time-zone.
 

 This clock is based on the best available system clock.
 This may use `currentTimeMillis`, or a higher resolution
 clock if one is available.
 

 Using this method hard codes a dependency to the default time-zone into your application.
 It is recommended to avoid this and use a specific time-zone whenever possible.
 The `systemUTC() UTC clock` should be used when you need the current instant
 without the date or time.
 

 The returned implementation is immutable, thread-safe and `Serializable`.
 It is equivalent to `system(ZoneId.systemDefault())`.

**返回**

- a clock that uses the best available system clock in the default zone, not null

**参见**

- ZoneId#systemDefault()
