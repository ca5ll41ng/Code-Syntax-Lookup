---
id: "java-en-function-java-time-temporal-temporalquery"
language: "java"
lang: "en"
category: "function"
name: "java.time.temporal.TemporalQuery"
title: "TemporalQuery"
directive: "type"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalQuery.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalQuery

Strategy for querying a temporal object.
 

 Queries are a key tool for extracting information from temporal objects.
 They exist to externalize the process of querying, permitting different
 approaches, as per the strategy design pattern.
 Examples might be a query that checks if the date is the day before February 29th
 in a leap year, or calculates the number of days to your next birthday.
 

 The `TemporalField` interface provides another mechanism for querying
 temporal objects. That interface is limited to returning a `long`.
 By contrast, queries can return any type.
 

 There are two equivalent ways of using a `TemporalQuery`.
 The first is to invoke the method on this interface directly.
 The second is to use `query`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   result = thisQuery.queryFrom(temporal);
   result = temporal.query(thisQuery);
 
```

 It is recommended to use the second approach, `query(thisQuery)`,
 as it is a lot clearer to read in code.
 

 The most common implementations are method references, such as
 `LocalDate::from` and `ZoneId::from`.
 Additional common queries are provided as static methods in `TemporalQueries`.

 This interface places no restrictions on the mutability of implementations,
 however immutability is strongly recommended.

**参数**

- **the** — type returned from the query

> *Since 1.8*
