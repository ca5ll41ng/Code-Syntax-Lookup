---
id: "java-en-function-chronolocaldatetime-isequal"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDateTime.isEqual"
signature: "default boolean isEqual(ChronoLocalDateTime<?> other)"
title: "ChronoLocalDateTime.isEqual"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDateTime.isEqual

```java
default boolean isEqual(ChronoLocalDateTime<?> other)
```

Checks if this date-time is equal to the specified date-time ignoring the chronology.
 

 This method differs from the comparison in `compareTo` in that it
 only compares the underlying date and time and not the chronology.
 This allows date-times in different calendar systems to be compared based
 on the time-line position.
 

 This default implementation performs the comparison based on the epoch-day
 and nano-of-day.

**参数**

- **other** — the other date-time to compare to, not null

**返回**

- true if the underlying date-time is equal to the specified date-time on the timeline
