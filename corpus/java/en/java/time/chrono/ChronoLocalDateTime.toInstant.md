---
id: "java-en-function-chronolocaldatetime-toinstant"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDateTime.toInstant"
signature: "default Instant toInstant(ZoneOffset offset)"
title: "ChronoLocalDateTime.toInstant"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDateTime.toInstant

```java
default Instant toInstant(ZoneOffset offset)
```

Converts this date-time to an `Instant`.
 

 This combines this local date-time and the specified offset to form
 an `Instant`.
 

 This default implementation calculates from the epoch-day of the date and the
 second-of-day of the time.

**参数**

- **offset** — the offset to use for the conversion, not null

**返回**

- an `Instant` representing the same instant, not null
