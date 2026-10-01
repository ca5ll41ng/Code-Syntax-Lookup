---
id: "java-en-function-japanesechronology-dateyearday"
language: "java"
lang: "en"
category: "function"
name: "JapaneseChronology.dateYearDay"
signature: "public JapaneseDate dateYearDay(Era era, int yearOfEra, int dayOfYear)"
title: "JapaneseChronology.dateYearDay"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/JapaneseChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseChronology.dateYearDay

```java
public JapaneseDate dateYearDay(Era era, int yearOfEra, int dayOfYear)
```

Obtains a local date in Japanese calendar system from the
 era, year-of-era and day-of-year fields.
 

 The day-of-year in this factory is expressed relative to the start of the year-of-era.
 This definition changes the normal meaning of day-of-year only in those years
 where the year-of-era is reset to one due to a change in the era.
 For example:
 
```

  6th Jan Showa 64 = day-of-year 6
  7th Jan Showa 64 = day-of-year 7
  8th Jan Heisei 1 = day-of-year 1
  9th Jan Heisei 1 = day-of-year 2
 
```

**参数**

- **era** — the Japanese era, not null
- **yearOfEra** — the year-of-era
- **dayOfYear** — the day-of-year

**返回**

- the Japanese local date, not null

**异常**

- **DateTimeException** — if unable to create the date
- **ClassCastException** — if the `era` is not a `JapaneseEra`
