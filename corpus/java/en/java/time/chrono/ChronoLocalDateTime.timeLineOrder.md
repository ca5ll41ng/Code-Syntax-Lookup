---
id: "java-en-function-chronolocaldatetime-timelineorder"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDateTime.timeLineOrder"
signature: "static Comparator<ChronoLocalDateTime<?>> timeLineOrder()"
title: "ChronoLocalDateTime.timeLineOrder"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDateTime.timeLineOrder

```java
static Comparator<ChronoLocalDateTime<?>> timeLineOrder()
```

Gets a comparator that compares `ChronoLocalDateTime` in
 time-line order ignoring the chronology.
 

 This comparator differs from the comparison in `compareTo` in that it
 only compares the underlying date-time and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the position of the date-time on the local time-line.
 The underlying comparison is equivalent to comparing the epoch-day and nano-of-day.

**返回**

- a comparator that compares in time-line order ignoring the chronology

**参见**

- #isAfter
- #isBefore
- #isEqual
