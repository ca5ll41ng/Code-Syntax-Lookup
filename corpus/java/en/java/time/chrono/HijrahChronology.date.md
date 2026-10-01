---
id: "java-en-function-hijrahchronology-date"
language: "java"
lang: "en"
category: "function"
name: "HijrahChronology.date"
signature: "public HijrahDate date(Era era, int yearOfEra, int month, int dayOfMonth)"
title: "HijrahChronology.date"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/HijrahChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HijrahChronology.date

```java
public HijrahDate date(Era era, int yearOfEra, int month, int dayOfMonth)
```

Obtains a local date in Hijrah calendar system from the
 era, year-of-era, month-of-year and day-of-month fields.

**参数**

- **era** — the Hijrah era, not null
- **yearOfEra** — the year-of-era
- **month** — the month-of-year
- **dayOfMonth** — the day-of-month

**返回**

- the Hijrah local date, not null

**异常**

- **DateTimeException** — if unable to create the date
- **ClassCastException** — if the `era` is not a `HijrahEra`
