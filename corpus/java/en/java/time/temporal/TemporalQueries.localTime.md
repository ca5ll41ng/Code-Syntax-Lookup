---
id: "java-en-function-temporalqueries-localtime"
language: "java"
lang: "en"
category: "function"
name: "TemporalQueries.localTime"
signature: "public static TemporalQuery<LocalTime> localTime()"
title: "TemporalQueries.localTime"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalQueries.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalQueries.localTime

```java
public static TemporalQuery<LocalTime> localTime()
```

A query for `LocalTime` returning null if not found.
 

 This returns a `TemporalQuery` that can be used to query a temporal
 object for the local time. The query will return null if the temporal
 object cannot supply a local time.
 

 The query implementation examines the `NANO_OF_DAY NANO_OF_DAY`
 field and uses it to create a `LocalTime`.
 

 The method `from` can be used as a
 `TemporalQuery` via a method reference, `LocalTime::from`.
 This query and `LocalTime::from` will return the same result if the
 temporal object contains a time. If the temporal object does not contain
 a time, then the method reference will throw an exception, whereas this
 query will return null.

**返回**

- a query that can obtain the time of a temporal, not null
