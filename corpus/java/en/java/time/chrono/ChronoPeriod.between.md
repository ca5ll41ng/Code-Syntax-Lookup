---
id: "java-en-function-chronoperiod-between"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriod.between"
signature: "public static ChronoPeriod between(ChronoLocalDate startDateInclusive, ChronoLocalDate endDateExclusive)"
title: "ChronoPeriod.between"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod.between

```java
public static ChronoPeriod between(ChronoLocalDate startDateInclusive, ChronoLocalDate endDateExclusive)
```

Obtains a `ChronoPeriod` consisting of amount of time between two dates.
 

 The start date is included, but the end date is not.
 The period is calculated using `until`.
 As such, the calculation is chronology specific.
 

 The chronology of the first date is used.
 The chronology of the second date is ignored, with the date being converted
 to the target chronology system before the calculation starts.
 

 The result of this method can be a negative period if the end is before the start.
 In most cases, the positive/negative sign will be the same in each of the supported fields.

**参数**

- **startDateInclusive** — the start date, inclusive, specifying the chronology of the calculation, not null
- **endDateExclusive** — the end date, exclusive, in any chronology, not null

**返回**

- the period between this date and the end date, not null

**参见**

- ChronoLocalDate#until(ChronoLocalDate)
