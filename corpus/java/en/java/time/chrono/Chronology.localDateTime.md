---
id: "java-en-function-chronology-localdatetime"
language: "java"
lang: "en"
category: "function"
name: "Chronology.localDateTime"
signature: "default ChronoLocalDateTime<? extends ChronoLocalDate> localDateTime(TemporalAccessor temporal)"
title: "Chronology.localDateTime"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.localDateTime

```java
default ChronoLocalDateTime<? extends ChronoLocalDate> localDateTime(TemporalAccessor temporal)
```

Obtains a local date-time in this chronology from another temporal object.
 

 This obtains a date-time in this chronology based on the specified temporal.
 A `TemporalAccessor` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `ChronoLocalDateTime`.
 

 The conversion extracts and combines the `ChronoLocalDate` and the
 `LocalTime` from the temporal object.
 Implementations are permitted to perform optimizations such as accessing
 those fields that are equivalent to the relevant objects.
 The result uses this chronology.
 

 This method matches the signature of the functional interface `TemporalQuery`
 allowing it to be used as a query via method reference, `aChronology::localDateTime`.

**参数**

- **temporal** — the temporal object to convert, not null

**返回**

- the local date-time in this chronology, not null

**异常**

- **DateTimeException** — if unable to create the date-time

**参见**

- ChronoLocalDateTime#from(TemporalAccessor)
