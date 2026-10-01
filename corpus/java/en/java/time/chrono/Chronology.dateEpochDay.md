---
id: "java-en-function-chronology-dateepochday"
language: "java"
lang: "en"
category: "function"
name: "Chronology.dateEpochDay"
signature: "ChronoLocalDate dateEpochDay(long epochDay)"
title: "Chronology.dateEpochDay"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.dateEpochDay

```java
ChronoLocalDate dateEpochDay(long epochDay)
```

Obtains a local date in this chronology from the epoch-day.
 

 The definition of `EPOCH_DAY EPOCH_DAY` is the same
 for all calendar systems, thus it can be used for conversion.

**参数**

- **epochDay** — the epoch day

**返回**

- the local date in this chronology, not null

**异常**

- **DateTimeException** — if unable to create the date
