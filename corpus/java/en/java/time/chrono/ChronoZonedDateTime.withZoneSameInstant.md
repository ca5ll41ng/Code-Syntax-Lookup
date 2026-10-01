---
id: "java-en-function-chronozoneddatetime-withzonesameinstant"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.withZoneSameInstant"
signature: "ChronoZonedDateTime<D> withZoneSameInstant(ZoneId zone)"
title: "ChronoZonedDateTime.withZoneSameInstant"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.withZoneSameInstant

```java
ChronoZonedDateTime<D> withZoneSameInstant(ZoneId zone)
```

Returns a copy of this date-time with a different time-zone,
 retaining the instant.
 

 This method changes the time-zone and retains the instant.
 This normally results in a change to the local date-time.
 

 This method is based on retaining the same instant, thus gaps and overlaps
 in the local time-line have no effect on the result.
 

 To change the offset while keeping the local time,
 use `withZoneSameLocal`.

**参数**

- **zone** — the time-zone to change to, not null

**返回**

- a `ChronoZonedDateTime` based on this date-time with the requested zone, not null

**异常**

- **DateTimeException** — if the result exceeds the supported date range
