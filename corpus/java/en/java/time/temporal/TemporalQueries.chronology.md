---
id: "java-en-function-temporalqueries-chronology"
language: "java"
lang: "en"
category: "function"
name: "TemporalQueries.chronology"
signature: "public static TemporalQuery<Chronology> chronology()"
title: "TemporalQueries.chronology"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalQueries.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalQueries.chronology

```java
public static TemporalQuery<Chronology> chronology()
```

A query for the `Chronology`.
 

 This queries a `TemporalAccessor` for the chronology.
 If the target `TemporalAccessor` represents a date, or part of a date,
 then it should return the chronology that the date is expressed in.
 As a result of this definition, objects only representing time, such as
 `LocalTime`, will return null.
 

 The result from JDK classes implementing `TemporalAccessor` is as follows:

 `LocalDate` returns `IsoChronology.INSTANCE`

 `LocalTime` returns null (does not represent a date)

 `LocalDateTime` returns `IsoChronology.INSTANCE`

 `ZonedDateTime` returns `IsoChronology.INSTANCE`

 `OffsetTime` returns null (does not represent a date)

 `OffsetDateTime` returns `IsoChronology.INSTANCE`

 `ChronoLocalDate` returns the associated chronology

 `ChronoLocalDateTime` returns the associated chronology

 `ChronoZonedDateTime` returns the associated chronology

 `Era` returns the associated chronology

 `DayOfWeek` returns null (shared across chronologies)

 `Month` returns `IsoChronology.INSTANCE`

 `Year` returns `IsoChronology.INSTANCE`

 `YearMonth` returns `IsoChronology.INSTANCE`

 `MonthDay` returns null `IsoChronology.INSTANCE`

 `ZoneOffset` returns null (does not represent a date)

 `Instant` returns null (does not represent a date)

 

 The method `from` can be used as a
 `TemporalQuery` via a method reference, `Chronology::from`.
 That method is equivalent to this query, except that it throws an
 exception if a chronology cannot be obtained.

**返回**

- a query that can obtain the chronology of a temporal, not null
