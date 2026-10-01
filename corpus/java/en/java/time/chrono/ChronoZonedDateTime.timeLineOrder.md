---
id: "java-en-function-chronozoneddatetime-timelineorder"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.timeLineOrder"
signature: "static Comparator<ChronoZonedDateTime<?>> timeLineOrder()"
title: "ChronoZonedDateTime.timeLineOrder"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.timeLineOrder

```java
static Comparator<ChronoZonedDateTime<?>> timeLineOrder()
```

Gets a comparator that compares `ChronoZonedDateTime` in
 time-line order ignoring the chronology.
 

 This comparator differs from the comparison in `compareTo` in that it
 only compares the underlying instant and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the position of the date-time on the instant time-line.
 The underlying comparison is equivalent to comparing the epoch-second and nano-of-second.

**返回**

- a comparator that compares in time-line order ignoring the chronology

**参见**

- #isAfter
- #isBefore
- #isEqual
