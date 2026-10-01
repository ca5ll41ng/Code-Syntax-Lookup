---
id: "java-en-function-chronolocaldatetime-toepochsecond"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDateTime.toEpochSecond"
signature: "default long toEpochSecond(ZoneOffset offset)"
title: "ChronoLocalDateTime.toEpochSecond"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDateTime.toEpochSecond

```java
default long toEpochSecond(ZoneOffset offset)
```

Converts this date-time to the number of seconds from the epoch
 of 1970-01-01T00:00:00Z.
 

 This combines this local date-time and the specified offset to calculate the
 epoch-second value, which is the number of elapsed seconds from 1970-01-01T00:00:00Z.
 Instants on the time-line after the epoch are positive, earlier are negative.
 

 This default implementation calculates from the epoch-day of the date and the
 second-of-day of the time.

**参数**

- **offset** — the offset to use for the conversion, not null

**返回**

- the number of seconds from the epoch of 1970-01-01T00:00:00Z
