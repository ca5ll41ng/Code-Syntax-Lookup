---
id: "java-en-function-temporalaccessor-query"
language: "java"
lang: "en"
category: "function"
name: "TemporalAccessor.query"
signature: "default <R> R query(TemporalQuery<R> query)"
title: "TemporalAccessor.query"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAccessor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAccessor.query

```java
default <R> R query(TemporalQuery<R> query)
```

Queries this date-time.
 

 This queries this date-time using the specified query strategy object.
 

 Queries are a key tool for extracting information from date-times.
 They exists to externalize the process of querying, permitting different
 approaches, as per the strategy design pattern.
 Examples might be a query that checks if the date is the day before February 29th
 in a leap year, or calculates the number of days to your next birthday.
 

 The most common query implementations are method references, such as
 `LocalDate::from` and `ZoneId::from`.
 Additional implementations are provided as static methods on `TemporalQuery`.

 The default implementation must behave equivalent to this code:
 
```

  if (query == TemporalQueries.zoneId() ||
        query == TemporalQueries.chronology() || query == TemporalQueries.precision()) {
    return null;
  }
  return query.queryFrom(this);
 
```

 Future versions are permitted to add further queries to the if statement.
 

 All classes implementing this interface and overriding this method must call
 `TemporalAccessor.super.query(query)`. JDK classes may avoid calling
 super if they provide behavior equivalent to the default behaviour, however
 non-JDK classes may not utilize this optimization and must call `super`.
 

 If the implementation can supply a value for one of the queries listed in the
 if statement of the default implementation, then it must do so.
 For example, an application-defined `HourMin` class storing the hour
 and minute must override this method as follows:
 
```

  if (query == TemporalQueries.precision()) {
    return MINUTES;
  }
  return TemporalAccessor.super.query(query);
 
```

 

 Implementations must ensure that no observable state is altered when this
 read-only method is invoked.

**参数**

- **the** — type of the result
- **query** — the query to invoke, not null

**返回**

- the query result, null may be returned (defined by the query)

**异常**

- **DateTimeException** — if unable to query
- **ArithmeticException** — if numeric overflow occurs
