---
id: "java-en-function-chronolocaldate-isbefore"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.isBefore"
signature: "default boolean isBefore(ChronoLocalDate other)"
title: "ChronoLocalDate.isBefore"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.isBefore

```java
default boolean isBefore(ChronoLocalDate other)
```

Checks if this date is before the specified date ignoring the chronology.
 

 This method differs from the comparison in `compareTo` in that it
 only compares the underlying date and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the time-line position.
 This is equivalent to using `date1.toEpochDay() < date2.toEpochDay()`.
 

 This default implementation performs the comparison based on the epoch-day.

**参数**

- **other** — the other date to compare to, not null

**返回**

- true if this is before the specified date
