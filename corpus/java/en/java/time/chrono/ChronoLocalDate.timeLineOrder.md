---
id: "java-en-function-chronolocaldate-timelineorder"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.timeLineOrder"
signature: "static Comparator<ChronoLocalDate> timeLineOrder()"
title: "ChronoLocalDate.timeLineOrder"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.timeLineOrder

```java
static Comparator<ChronoLocalDate> timeLineOrder()
```

Gets a comparator that compares `ChronoLocalDate` in
 time-line order ignoring the chronology.
 

 This comparator differs from the comparison in `compareTo` in that it
 only compares the underlying date and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the position of the date on the local time-line.
 The underlying comparison is equivalent to comparing the epoch-day.

**返回**

- a comparator that compares in time-line order ignoring the chronology

**参见**

- #isAfter
- #isBefore
- #isEqual
