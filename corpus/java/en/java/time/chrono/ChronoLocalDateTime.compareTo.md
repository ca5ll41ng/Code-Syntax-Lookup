---
id: "java-en-function-chronolocaldatetime-compareto"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDateTime.compareTo"
signature: "default int compareTo(ChronoLocalDateTime<?> other)"
title: "ChronoLocalDateTime.compareTo"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDateTime.compareTo

```java
default int compareTo(ChronoLocalDateTime<?> other)
```

Compares this date-time to another date-time, including the chronology.
 

 The comparison is based first on the underlying time-line date-time, then
 on the chronology.
 It is "consistent with equals", as defined by `Comparable`.
 

 For example, the following is the comparator order:
 
 
- `2012-12-03T12:00 (ISO)`
 
- `2012-12-04T12:00 (ISO)`
 
- `2555-12-04T12:00 (ThaiBuddhist)`
 
- `2012-12-05T12:00 (ISO)`
 

 Values #2 and #3 represent the same date-time on the time-line.
 When two values represent the same date-time, the chronology ID is compared to distinguish them.
 This step is needed to make the ordering "consistent with equals".
 

 If all the date-time objects being compared are in the same chronology, then the
 additional chronology stage is not required and only the local date-time is used.
 

 This default implementation performs the comparison defined above.

**参数**

- **other** — the other date-time to compare to, not null

**返回**

- the comparator value, that is the comparison of this local date-time with the `other` local date-time and this chronology with the `other` chronology, in order, returning the first non-zero result, and otherwise returning zero

**参见**

- #isBefore
- #isAfter
