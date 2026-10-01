---
id: "java-en-function-chronology-zoneddatetime"
language: "java"
lang: "en"
category: "function"
name: "Chronology.zonedDateTime"
signature: "default ChronoZonedDateTime<? extends ChronoLocalDate> zonedDateTime(TemporalAccessor temporal)"
title: "Chronology.zonedDateTime"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.zonedDateTime

```java
default ChronoZonedDateTime<? extends ChronoLocalDate> zonedDateTime(TemporalAccessor temporal)
```

Obtains a `ChronoZonedDateTime` in this chronology from another temporal object.
 

 This obtains a zoned date-time in this chronology based on the specified temporal.
 A `TemporalAccessor` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `ChronoZonedDateTime`.
 

 The conversion will first obtain a `ZoneId` from the temporal object,
 falling back to a `ZoneOffset` if necessary. It will then try to obtain
 an `Instant`, falling back to a `ChronoLocalDateTime` if necessary.
 The result will be either the combination of `ZoneId` or `ZoneOffset`
 with `Instant` or `ChronoLocalDateTime`.
 Implementations are permitted to perform optimizations such as accessing
 those fields that are equivalent to the relevant objects.
 The result uses this chronology.
 

 This method matches the signature of the functional interface `TemporalQuery`
 allowing it to be used as a query via method reference, `aChronology::zonedDateTime`.

**参数**

- **temporal** — the temporal object to convert, not null

**返回**

- the zoned date-time in this chronology, not null

**异常**

- **DateTimeException** — if unable to create the date-time

**参见**

- ChronoZonedDateTime#from(TemporalAccessor)
