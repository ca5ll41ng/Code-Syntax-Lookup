---
id: "java-en-function-temporalquery-queryfrom"
language: "java"
lang: "en"
category: "function"
name: "TemporalQuery.queryFrom"
signature: "R queryFrom(TemporalAccessor temporal)"
title: "TemporalQuery.queryFrom"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalQuery.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalQuery.queryFrom

```java
R queryFrom(TemporalAccessor temporal)
```

Queries the specified temporal object.
 

 This queries the specified temporal object to return an object using the logic
 encapsulated in the implementing class.
 Examples might be a query that checks if the date is the day before February 29th
 in a leap year, or calculates the number of days to your next birthday.
 

 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `query`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   result = thisQuery.queryFrom(temporal);
   result = temporal.query(thisQuery);
 
```

 It is recommended to use the second approach, `query(thisQuery)`,
 as it is a lot clearer to read in code.

 The implementation must take the input object and query it.
 The implementation defines the logic of the query and is responsible for
 documenting that logic.
 It may use any method on `TemporalAccessor` to determine the result.
 The input object must not be altered.
 

 The input temporal object may be in a calendar system other than ISO.
 Implementations may choose to document compatibility with other calendar systems,
 or reject non-ISO temporal objects by `chronology() querying the chronology`.
 

 This method may be called from multiple threads in parallel.
 It must be thread-safe when invoked.

**参数**

- **temporal** — the temporal object to query, not null

**返回**

- the queried value, may return null to indicate not found

**异常**

- **DateTimeException** — if unable to query
- **ArithmeticException** — if numeric overflow occurs
