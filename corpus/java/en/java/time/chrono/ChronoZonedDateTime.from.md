---
id: "java-en-function-chronozoneddatetime-from"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.from"
signature: "static ChronoZonedDateTime<?> from(TemporalAccessor temporal)"
title: "ChronoZonedDateTime.from"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.from

```java
static ChronoZonedDateTime<?> from(TemporalAccessor temporal)
```

Obtains an instance of `ChronoZonedDateTime` from a temporal object.
 

 This creates a zoned date-time based on the specified temporal.
 A `TemporalAccessor` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `ChronoZonedDateTime`.
 

 The conversion extracts and combines the chronology, date, time and zone
 from the temporal object. The behavior is equivalent to using
 `zonedDateTime` with the extracted chronology.
 Implementations are permitted to perform optimizations such as accessing
 those fields that are equivalent to the relevant objects.
 

 This method matches the signature of the functional interface `TemporalQuery`
 allowing it to be used as a query via method reference, `ChronoZonedDateTime::from`.

**参数**

- **temporal** — the temporal object to convert, not null

**返回**

- the date-time, not null

**异常**

- **DateTimeException** — if unable to convert to a `ChronoZonedDateTime`

**参见**

- Chronology#zonedDateTime(TemporalAccessor)
