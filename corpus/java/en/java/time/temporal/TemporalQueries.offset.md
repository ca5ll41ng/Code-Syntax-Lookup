---
id: "java-en-function-temporalqueries-offset"
language: "java"
lang: "en"
category: "function"
name: "TemporalQueries.offset"
signature: "public static TemporalQuery<ZoneOffset> offset()"
title: "TemporalQueries.offset"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalQueries.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalQueries.offset

```java
public static TemporalQuery<ZoneOffset> offset()
```

A query for `ZoneOffset` returning null if not found.
 

 This returns a `TemporalQuery` that can be used to query a temporal
 object for the offset. The query will return null if the temporal
 object cannot supply an offset.
 

 The query implementation examines the `OFFSET_SECONDS OFFSET_SECONDS`
 field and uses it to create a `ZoneOffset`.
 

 The method `from` can be used as a
 `TemporalQuery` via a method reference, `ZoneOffset::from`.
 This query and `ZoneOffset::from` will return the same result if the
 temporal object contains an offset. If the temporal object does not contain
 an offset, then the method reference will throw an exception, whereas this
 query will return null.

**返回**

- a query that can obtain the offset of a temporal, not null
