---
id: "java-en-function-chronology-dateyearday"
language: "java"
lang: "en"
category: "function"
name: "Chronology.dateYearDay"
signature: "default ChronoLocalDate dateYearDay(Era era, int yearOfEra, int dayOfYear)"
title: "Chronology.dateYearDay"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.dateYearDay

```java
default ChronoLocalDate dateYearDay(Era era, int yearOfEra, int dayOfYear)
```

Obtains a local date in this chronology from the era, year-of-era and
 day-of-year fields.

 The default implementation combines the era and year-of-era into a proleptic
 year before calling `dateYearDay`.

**参数**

- **era** — the era of the correct type for the chronology, not null
- **yearOfEra** — the chronology year-of-era
- **dayOfYear** — the chronology day-of-year

**返回**

- the local date in this chronology, not null

**异常**

- **DateTimeException** — if unable to create the date
- **ClassCastException** — if the `era` is not of the correct type for the chronology
