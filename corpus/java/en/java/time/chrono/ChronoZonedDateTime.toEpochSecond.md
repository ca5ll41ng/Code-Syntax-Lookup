---
id: "java-en-function-chronozoneddatetime-toepochsecond"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.toEpochSecond"
signature: "default long toEpochSecond()"
title: "ChronoZonedDateTime.toEpochSecond"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.toEpochSecond

```java
default long toEpochSecond()
```

Converts this date-time to the number of seconds from the epoch
 of 1970-01-01T00:00:00Z.
 

 This uses the `toLocalDateTime() local date-time` and
 `getOffset() offset` to calculate the epoch-second value,
 which is the number of elapsed seconds from 1970-01-01T00:00:00Z.
 Instants on the time-line after the epoch are positive, earlier are negative.

**返回**

- the number of seconds from the epoch of 1970-01-01T00:00:00Z
