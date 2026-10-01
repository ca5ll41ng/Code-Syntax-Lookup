---
id: "java-en-function-chronolocaldate-equals"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.equals"
signature: "boolean equals(Object obj)"
title: "ChronoLocalDate.equals"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.equals

```java
boolean equals(Object obj)
```

Checks if this date is equal to another date, including the chronology.
 

 Compares this date with another ensuring that the date and chronology are the same.
 

 To compare the dates of two `TemporalAccessor` instances, including dates
 in two different chronologies, use `EPOCH_DAY` as a comparator.

**参数**

- **obj** — the object to check, null returns false

**返回**

- true if this is equal to the other date
