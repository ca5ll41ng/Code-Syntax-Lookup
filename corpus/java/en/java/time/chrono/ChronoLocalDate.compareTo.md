---
id: "java-en-function-chronolocaldate-compareto"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.compareTo"
signature: "default int compareTo(ChronoLocalDate other)"
title: "ChronoLocalDate.compareTo"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.compareTo

```java
default int compareTo(ChronoLocalDate other)
```

Compares this date to another date, including the chronology.
 

 The comparison is based first on the underlying time-line date, then
 on the chronology.
 It is "consistent with equals", as defined by `Comparable`.
 

 For example, the following is the comparator order:
 
 
- `2012-12-03 (ISO)`
 
- `2012-12-04 (ISO)`
 
- `2555-12-04 (ThaiBuddhist)`
 
- `2012-12-05 (ISO)`
 

 Values #2 and #3 represent the same date on the time-line.
 When two values represent the same date, the chronology ID is compared to distinguish them.
 This step is needed to make the ordering "consistent with equals".
 

 If all the date objects being compared are in the same chronology, then the
 additional chronology stage is not required and only the local date is used.
 To compare the dates of two `TemporalAccessor` instances, including dates
 in two different chronologies, use `EPOCH_DAY` as a comparator.
 

 This default implementation performs the comparison defined above.

**参数**

- **other** — the other date to compare to, not null

**返回**

- the comparator value, that is the comparison of this local date with the `other` local date and this chronology with the `other` chronology, in order, returning the first non-zero result, and otherwise returning zero

**参见**

- #isBefore
- #isAfter
