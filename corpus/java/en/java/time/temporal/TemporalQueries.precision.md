---
id: "java-en-function-temporalqueries-precision"
language: "java"
lang: "en"
category: "function"
name: "TemporalQueries.precision"
signature: "public static TemporalQuery<TemporalUnit> precision()"
title: "TemporalQueries.precision"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalQueries.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalQueries.precision

```java
public static TemporalQuery<TemporalUnit> precision()
```

A query for the smallest supported unit.
 

 This queries a `TemporalAccessor` for the time precision.
 If the target `TemporalAccessor` represents a consistent or complete date-time,
 date or time then this must return the smallest precision actually supported.
 Note that fields such as `NANO_OF_DAY` and `NANO_OF_SECOND`
 are defined to always return ignoring the precision, thus this is the only
 way to find the actual smallest supported unit.
 For example, were `GregorianCalendar` to implement `TemporalAccessor`
 it would return a precision of `MILLIS`.
 

 The result from JDK classes implementing `TemporalAccessor` is as follows:

 `LocalDate` returns `DAYS`

 `LocalTime` returns `NANOS`

 `LocalDateTime` returns `NANOS`

 `ZonedDateTime` returns `NANOS`

 `OffsetTime` returns `NANOS`

 `OffsetDateTime` returns `NANOS`

 `ChronoLocalDate` returns `DAYS`

 `ChronoLocalDateTime` returns `NANOS`

 `ChronoZonedDateTime` returns `NANOS`

 `Era` returns `ERAS`

 `DayOfWeek` returns `DAYS`

 `Month` returns `MONTHS`

 `Year` returns `YEARS`

 `YearMonth` returns `MONTHS`

 `MonthDay` returns null (does not represent a complete date or time)

 `ZoneOffset` returns null (does not represent a date or time)

 `Instant` returns `NANOS`

**返回**

- a query that can obtain the precision of a temporal, not null
