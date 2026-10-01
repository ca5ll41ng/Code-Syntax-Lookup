---
id: "java-en-function-java-time-temporal-temporalqueries"
language: "java"
lang: "en"
category: "function"
name: "java.time.temporal.TemporalQueries"
title: "TemporalQueries"
directive: "type"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalQueries.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalQueries

Common implementations of `TemporalQuery`.
 

 This class provides common implementations of `TemporalQuery`.
 These are defined here as they must be constants, and the definition
 of lambdas does not guarantee that. By assigning them once here,
 they become 'normal' Java constants.
 

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
 Additional common queries are provided to return:
 
 
-  a Chronology,
 
-  a LocalDate,
 
-  a LocalTime,
 
-  a ZoneOffset,
 
-  a precision,
 
-  a zone, or
 
-  a zoneId.

> *Since 1.8*
