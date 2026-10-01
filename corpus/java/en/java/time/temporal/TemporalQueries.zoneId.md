---
id: "java-en-function-temporalqueries-zoneid"
language: "java"
lang: "en"
category: "function"
name: "TemporalQueries.zoneId"
signature: "public static TemporalQuery<ZoneId> zoneId()"
title: "TemporalQueries.zoneId"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalQueries.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalQueries.zoneId

```java
public static TemporalQuery<ZoneId> zoneId()
```

A strict query for the `ZoneId`.
 

 This queries a `TemporalAccessor` for the zone.
 The zone is only returned if the date-time conceptually contains a `ZoneId`.
 It will not be returned if the date-time only conceptually has an `ZoneOffset`.
 Thus a `java.time.ZonedDateTime` will return the result of `getZone()`,
 but an `java.time.OffsetDateTime` will return null.
 

 In most cases, applications should use `zone` as this query is too strict.
 

 The result from JDK classes implementing `TemporalAccessor` is as follows:

 `LocalDate` returns null

 `LocalTime` returns null

 `LocalDateTime` returns null

 `ZonedDateTime` returns the associated zone

 `OffsetTime` returns null

 `OffsetDateTime` returns null

 `ChronoLocalDate` returns null

 `ChronoLocalDateTime` returns null

 `ChronoZonedDateTime` returns the associated zone

 `Era` returns null

 `DayOfWeek` returns null

 `Month` returns null

 `Year` returns null

 `YearMonth` returns null

 `MonthDay` returns null

 `ZoneOffset` returns null

 `Instant` returns null

**返回**

- a query that can obtain the zone ID of a temporal, not null
