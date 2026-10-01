---
id: "java-en-function-chronozoneddatetime-withzonesamelocal"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.withZoneSameLocal"
signature: "ChronoZonedDateTime<D> withZoneSameLocal(ZoneId zone)"
title: "ChronoZonedDateTime.withZoneSameLocal"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.withZoneSameLocal

```java
ChronoZonedDateTime<D> withZoneSameLocal(ZoneId zone)
```

Returns a copy of this date-time with a different time-zone,
 retaining the local date-time if possible.
 

 This method changes the time-zone and retains the local date-time.
 The local date-time is only changed if it is invalid for the new zone.
 

 To change the zone and adjust the local date-time,
 use `withZoneSameInstant`.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **zone** — the time-zone to change to, not null

**返回**

- a `ChronoZonedDateTime` based on this date-time with the requested zone, not null
