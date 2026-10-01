---
id: "java-en-function-chronolocaldate-isequal"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.isEqual"
signature: "default boolean isEqual(ChronoLocalDate other)"
title: "ChronoLocalDate.isEqual"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.isEqual

```java
default boolean isEqual(ChronoLocalDate other)
```

Checks if this date is equal to the specified date ignoring the chronology.
 

 This method differs from the comparison in `compareTo` in that it
 only compares the underlying date and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the time-line position.
 This is equivalent to using `date1.toEpochDay() == date2.toEpochDay()`.
 

 This default implementation performs the comparison based on the epoch-day.

**参数**

- **other** — the other date to compare to, not null

**返回**

- true if the underlying date is equal to the specified date
