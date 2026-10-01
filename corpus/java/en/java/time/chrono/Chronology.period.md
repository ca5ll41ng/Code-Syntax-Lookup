---
id: "java-en-function-chronology-period"
language: "java"
lang: "en"
category: "function"
name: "Chronology.period"
signature: "default ChronoPeriod period(int years, int months, int days)"
title: "Chronology.period"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.period

```java
default ChronoPeriod period(int years, int months, int days)
```

Obtains a period for this chronology based on years, months and days.
 

 This returns a period tied to this chronology using the specified
 years, months and days.  All supplied chronologies use periods
 based on years, months and days, however the `ChronoPeriod` API
 allows the period to be represented using other units.

 The default implementation returns an implementation class suitable
 for most calendar systems. It is based solely on the three units.
 Normalization, addition and subtraction derive the number of months
 in a year from the `range`. If the number of
 months within a year is fixed, then the calculation approach for
 addition, subtraction and normalization is slightly different.
 

 If implementing an unusual calendar system that is not based on
 years, months and days, or where you want direct control, then
 the `ChronoPeriod` interface must be directly implemented.
 

 The returned period is immutable and thread-safe.

**参数**

- **years** — the number of years, may be negative
- **months** — the number of years, may be negative
- **days** — the number of years, may be negative

**返回**

- the period in terms of this chronology, not null
