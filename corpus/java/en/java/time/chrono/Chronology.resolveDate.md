---
id: "java-en-function-chronology-resolvedate"
language: "java"
lang: "en"
category: "function"
name: "Chronology.resolveDate"
signature: "ChronoLocalDate resolveDate(Map<TemporalField, Long> fieldValues, ResolverStyle resolverStyle)"
title: "Chronology.resolveDate"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.resolveDate

```java
ChronoLocalDate resolveDate(Map<TemporalField, Long> fieldValues, ResolverStyle resolverStyle)
```

Resolves parsed `ChronoField` values into a date during parsing.
 

 Most `TemporalField` implementations are resolved using the
 resolve method on the field. By contrast, the `ChronoField` class
 defines fields that only have meaning relative to the chronology.
 As such, `ChronoField` date fields are resolved here in the
 context of a specific chronology.
 

 The default implementation, which explains typical resolve behaviour,
 is provided in `AbstractChronology`.

**参数**

- **fieldValues** — the map of fields to values, which can be updated, not null
- **resolverStyle** — the requested type of resolve, not null

**返回**

- the resolved date, null if insufficient information to create a date

**异常**

- **DateTimeException** — if the date cannot be resolved, typically because of a conflict in the input data
