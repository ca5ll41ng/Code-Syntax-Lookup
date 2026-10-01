---
id: "java-en-function-isochronology-zoneddatetime"
language: "java"
lang: "en"
category: "function"
name: "IsoChronology.zonedDateTime"
signature: "public ZonedDateTime zonedDateTime(Instant instant, ZoneId zone)"
title: "IsoChronology.zonedDateTime"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/IsoChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IsoChronology.zonedDateTime

```java
public ZonedDateTime zonedDateTime(Instant instant, ZoneId zone)
```

Obtains an ISO zoned date-time in this chronology from an `Instant`.
 

 This is equivalent to `ofInstant`.

**参数**

- **instant** — the instant to create the date-time from, not null
- **zone** — the time-zone, not null

**返回**

- the zoned date-time, not null

**异常**

- **DateTimeException** — if the result exceeds the supported range
