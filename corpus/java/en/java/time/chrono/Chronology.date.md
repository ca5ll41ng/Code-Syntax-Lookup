---
id: "java-en-function-chronology-date"
language: "java"
lang: "en"
category: "function"
name: "Chronology.date"
signature: "default ChronoLocalDate date(Era era, int yearOfEra, int month, int dayOfMonth)"
title: "Chronology.date"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.date

```java
default ChronoLocalDate date(Era era, int yearOfEra, int month, int dayOfMonth)
```

Obtains a local date in this chronology from the era, year-of-era,
 month-of-year and day-of-month fields.

 The default implementation combines the era and year-of-era into a proleptic
 year before calling `date`.

**参数**

- **era** — the era of the correct type for the chronology, not null
- **yearOfEra** — the chronology year-of-era
- **month** — the chronology month-of-year
- **dayOfMonth** — the chronology day-of-month

**返回**

- the local date in this chronology, not null

**异常**

- **DateTimeException** — if unable to create the date
- **ClassCastException** — if the `era` is not of the correct type for the chronology
