---
id: "java-en-function-chronozoneddatetime-compareto"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.compareTo"
signature: "default int compareTo(ChronoZonedDateTime<?> other)"
title: "ChronoZonedDateTime.compareTo"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.compareTo

```java
default int compareTo(ChronoZonedDateTime<?> other)
```

Compares this date-time to another date-time, including the chronology.
 

 The comparison is based first on the instant, then on the local date-time,
 then on the zone ID, then on the chronology.
 It is "consistent with equals", as defined by `Comparable`.
 

 If all the date-time objects being compared are in the same chronology, then the
 additional chronology stage is not required.
 

 This default implementation performs the comparison defined above.

**参数**

- **other** — the other date-time to compare to, not null

**返回**

- the comparator value, that is the comparison of this with the `other` values for the instant, the local date-time, the zone ID, and the chronology, in order, returning the first non-zero result, and otherwise returning zero

**参见**

- #isBefore
- #isAfter
