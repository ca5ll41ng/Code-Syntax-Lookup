---
id: "java-en-function-hijrahchronology-dateyearday"
language: "java"
lang: "en"
category: "function"
name: "HijrahChronology.dateYearDay"
signature: "public HijrahDate dateYearDay(Era era, int yearOfEra, int dayOfYear)"
title: "HijrahChronology.dateYearDay"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/HijrahChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HijrahChronology.dateYearDay

```java
public HijrahDate dateYearDay(Era era, int yearOfEra, int dayOfYear)
```

Obtains a local date in Hijrah calendar system from the
 era, year-of-era and day-of-year fields.

**参数**

- **era** — the Hijrah era, not null
- **yearOfEra** — the year-of-era
- **dayOfYear** — the day-of-year

**返回**

- the Hijrah local date, not null

**异常**

- **DateTimeException** — if unable to create the date
- **ClassCastException** — if the `era` is not a `HijrahEra`
