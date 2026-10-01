---
id: "java-en-function-dayofweek-from"
language: "java"
lang: "en"
category: "function"
name: "DayOfWeek.from"
signature: "public static DayOfWeek from(TemporalAccessor temporal)"
title: "DayOfWeek.from"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/DayOfWeek.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DayOfWeek.from

```java
public static DayOfWeek from(TemporalAccessor temporal)
```

Obtains an instance of `DayOfWeek` from a temporal object.
 

 This obtains a day-of-week based on the specified temporal.
 A `TemporalAccessor` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `DayOfWeek`.
 

 The conversion extracts the `DAY_OF_WEEK DAY_OF_WEEK` field.
 

 This method matches the signature of the functional interface `TemporalQuery`
 allowing it to be used as a query via method reference, `DayOfWeek::from`.

**参数**

- **temporal** — the temporal object to convert, not null

**返回**

- the day-of-week, not null

**异常**

- **DateTimeException** — if unable to convert to a `DayOfWeek`
