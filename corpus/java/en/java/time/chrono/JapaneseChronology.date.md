---
id: "java-en-function-japanesechronology-date"
language: "java"
lang: "en"
category: "function"
name: "JapaneseChronology.date"
signature: "public JapaneseDate date(Era era, int yearOfEra, int month, int dayOfMonth)"
title: "JapaneseChronology.date"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/JapaneseChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseChronology.date

```java
public JapaneseDate date(Era era, int yearOfEra, int month, int dayOfMonth)
```

Obtains a local date in Japanese calendar system from the
 era, year-of-era, month-of-year and day-of-month fields.
 

 The Japanese month and day-of-month are the same as those in the
 ISO calendar system. They are not reset when the era changes.
 For example:
 
```

  6th Jan Showa 64 = ISO 1989-01-06
  7th Jan Showa 64 = ISO 1989-01-07
  8th Jan Heisei 1 = ISO 1989-01-08
  9th Jan Heisei 1 = ISO 1989-01-09
 
```

**参数**

- **era** — the Japanese era, not null
- **yearOfEra** — the year-of-era
- **month** — the month-of-year
- **dayOfMonth** — the day-of-month

**返回**

- the Japanese local date, not null

**异常**

- **DateTimeException** — if unable to create the date
- **ClassCastException** — if the `era` is not a `JapaneseEra`
