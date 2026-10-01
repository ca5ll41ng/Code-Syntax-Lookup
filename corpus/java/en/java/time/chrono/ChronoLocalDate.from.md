---
id: "java-en-function-chronolocaldate-from"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.from"
signature: "static ChronoLocalDate from(TemporalAccessor temporal)"
title: "ChronoLocalDate.from"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.from

```java
static ChronoLocalDate from(TemporalAccessor temporal)
```

Obtains an instance of `ChronoLocalDate` from a temporal object.
 

 This obtains a local date based on the specified temporal.
 A `TemporalAccessor` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `ChronoLocalDate`.
 

 The conversion extracts and combines the chronology and the date
 from the temporal object. The behavior is equivalent to using
 `date` with the extracted chronology.
 Implementations are permitted to perform optimizations such as accessing
 those fields that are equivalent to the relevant objects.
 

 This method matches the signature of the functional interface `TemporalQuery`
 allowing it to be used as a query via method reference, `ChronoLocalDate::from`.

**参数**

- **temporal** — the temporal object to convert, not null

**返回**

- the date, not null

**异常**

- **DateTimeException** — if unable to convert to a `ChronoLocalDate`

**参见**

- Chronology#date(TemporalAccessor)
