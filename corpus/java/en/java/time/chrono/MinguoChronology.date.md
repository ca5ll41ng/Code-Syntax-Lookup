---
id: "java-en-function-minguochronology-date"
language: "java"
lang: "en"
category: "function"
name: "MinguoChronology.date"
signature: "public MinguoDate date(Era era, int yearOfEra, int month, int dayOfMonth)"
title: "MinguoChronology.date"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/MinguoChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MinguoChronology.date

```java
public MinguoDate date(Era era, int yearOfEra, int month, int dayOfMonth)
```

Obtains a local date in Minguo calendar system from the
 era, year-of-era, month-of-year and day-of-month fields.

**参数**

- **era** — the Minguo era, not null
- **yearOfEra** — the year-of-era
- **month** — the month-of-year
- **dayOfMonth** — the day-of-month

**返回**

- the Minguo local date, not null

**异常**

- **DateTimeException** — if unable to create the date
- **ClassCastException** — if the `era` is not a `MinguoEra`
