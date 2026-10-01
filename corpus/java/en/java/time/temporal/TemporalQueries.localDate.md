---
id: "java-en-function-temporalqueries-localdate"
language: "java"
lang: "en"
category: "function"
name: "TemporalQueries.localDate"
signature: "public static TemporalQuery<LocalDate> localDate()"
title: "TemporalQueries.localDate"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalQueries.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalQueries.localDate

```java
public static TemporalQuery<LocalDate> localDate()
```

A query for `LocalDate` returning null if not found.
 

 This returns a `TemporalQuery` that can be used to query a temporal
 object for the local date. The query will return null if the temporal
 object cannot supply a local date.
 

 The query implementation examines the `EPOCH_DAY EPOCH_DAY`
 field and uses it to create a `LocalDate`.
 

 The method `from` can be used as a
 `TemporalQuery` via a method reference, `LocalDate::from`.
 This query and `LocalDate::from` will return the same result if the
 temporal object contains a date. If the temporal object does not contain
 a date, then the method reference will throw an exception, whereas this
 query will return null.

**返回**

- a query that can obtain the date of a temporal, not null
