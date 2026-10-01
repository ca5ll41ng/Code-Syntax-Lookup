---
id: "java-en-function-chronolocaldatetime-from"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDateTime.from"
signature: "static ChronoLocalDateTime<?> from(TemporalAccessor temporal)"
title: "ChronoLocalDateTime.from"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDateTime.from

```java
static ChronoLocalDateTime<?> from(TemporalAccessor temporal)
```

Obtains an instance of `ChronoLocalDateTime` from a temporal object.
 

 This obtains a local date-time based on the specified temporal.
 A `TemporalAccessor` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `ChronoLocalDateTime`.
 

 The conversion extracts and combines the chronology and the date-time
 from the temporal object. The behavior is equivalent to using
 `localDateTime` with the extracted chronology.
 Implementations are permitted to perform optimizations such as accessing
 those fields that are equivalent to the relevant objects.
 

 This method matches the signature of the functional interface `TemporalQuery`
 allowing it to be used as a query via method reference, `ChronoLocalDateTime::from`.

**参数**

- **temporal** — the temporal object to convert, not null

**返回**

- the date-time, not null

**异常**

- **DateTimeException** — if unable to convert to a `ChronoLocalDateTime`

**参见**

- Chronology#localDateTime(TemporalAccessor)
