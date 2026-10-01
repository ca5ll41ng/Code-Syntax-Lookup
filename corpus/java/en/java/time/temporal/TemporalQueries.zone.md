---
id: "java-en-function-temporalqueries-zone"
language: "java"
lang: "en"
category: "function"
name: "TemporalQueries.zone"
signature: "public static TemporalQuery<ZoneId> zone()"
title: "TemporalQueries.zone"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalQueries.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalQueries.zone

```java
public static TemporalQuery<ZoneId> zone()
```

A lenient query for the `ZoneId`, falling back to the `ZoneOffset`.
 

 This queries a `TemporalAccessor` for the zone.
 It first tries to obtain the zone, using `zoneId`.
 If that is not found it tries to obtain the `offset`.
 Thus a `java.time.ZonedDateTime` will return the result of `getZone()`,
 while an `java.time.OffsetDateTime` will return the result of `getOffset()`.
 

 In most cases, applications should use this query rather than `#zoneId()`.
 

 The method `from` can be used as a
 `TemporalQuery` via a method reference, `ZoneId::from`.
 That method is equivalent to this query, except that it throws an
 exception if a zone cannot be obtained.

**返回**

- a query that can obtain the zone ID or offset of a temporal, not null
