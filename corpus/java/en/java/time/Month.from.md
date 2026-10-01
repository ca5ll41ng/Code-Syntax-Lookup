---
id: "java-en-function-month-from"
language: "java"
lang: "en"
category: "function"
name: "Month.from"
signature: "public static Month from(TemporalAccessor temporal)"
title: "Month.from"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.from

```java
public static Month from(TemporalAccessor temporal)
```

Obtains an instance of `Month` from a temporal object.
 

 This obtains a month based on the specified temporal.
 A `TemporalAccessor` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `Month`.
 

 The conversion extracts the `MONTH_OF_YEAR MONTH_OF_YEAR` field.
 The extraction is only permitted if the temporal object has an ISO
 chronology, or can be converted to a `LocalDate`.
 

 This method matches the signature of the functional interface `TemporalQuery`
 allowing it to be used as a query via method reference, `Month::from`.

**参数**

- **temporal** — the temporal object to convert, not null

**返回**

- the month-of-year, not null

**异常**

- **DateTimeException** — if unable to convert to a `Month`
