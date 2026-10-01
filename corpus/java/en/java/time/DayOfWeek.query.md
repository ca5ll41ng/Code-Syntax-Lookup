---
id: "java-en-function-dayofweek-query"
language: "java"
lang: "en"
category: "function"
name: "DayOfWeek.query"
signature: "public <R> R query(TemporalQuery<R> query)"
title: "DayOfWeek.query"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/DayOfWeek.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DayOfWeek.query

```java
public <R> R query(TemporalQuery<R> query)
```

Queries this day-of-week using the specified query.
 

 This queries this day-of-week using the specified query strategy object.
 The `TemporalQuery` object defines the logic to be used to
 obtain the result. Read the documentation of the query to understand
 what the result of this method will be.
 

 The result of this method is obtained by invoking the
 `queryFrom` method on the
 specified query passing `this` as the argument.

**参数**

- **the** — type of the result
- **query** — the query to invoke, not null

**返回**

- the query result, null may be returned (defined by the query)

**异常**

- **DateTimeException** — if unable to query (defined by the query)
- **ArithmeticException** — if numeric overflow occurs (defined by the query)
