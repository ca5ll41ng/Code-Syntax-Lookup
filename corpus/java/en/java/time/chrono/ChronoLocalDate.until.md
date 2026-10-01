---
id: "java-en-function-chronolocaldate-until"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.until"
signature: "ChronoPeriod until(ChronoLocalDate endDateExclusive)"
title: "ChronoLocalDate.until"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.until

```java
ChronoPeriod until(ChronoLocalDate endDateExclusive)
```

Calculates the period between this date and another date as a `ChronoPeriod`.
 

 This calculates the period between two dates. All supplied chronologies
 calculate the period using years, months and days, however the
 `ChronoPeriod` API allows the period to be represented using other units.
 

 The start and end points are `this` and the specified date.
 The result will be negative if the end is before the start.
 The negative sign will be the same in each of year, month and day.
 

 The calculation is performed using the chronology of this date.
 If necessary, the input date will be converted to match.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **endDateExclusive** — the end date, exclusive, which may be in any chronology, not null

**返回**

- the period between this date and the end date, not null

**异常**

- **DateTimeException** — if the period cannot be calculated
- **ArithmeticException** — if numeric overflow occurs
