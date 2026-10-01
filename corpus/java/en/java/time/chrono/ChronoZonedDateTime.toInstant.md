---
id: "java-en-function-chronozoneddatetime-toinstant"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.toInstant"
signature: "default Instant toInstant()"
title: "ChronoZonedDateTime.toInstant"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.toInstant

```java
default Instant toInstant()
```

Converts this date-time to an `Instant`.
 

 This returns an `Instant` representing the same point on the
 time-line as this date-time. The calculation combines the
 `toLocalDateTime() local date-time` and
 `getOffset() offset`.

**返回**

- an `Instant` representing the same instant, not null
