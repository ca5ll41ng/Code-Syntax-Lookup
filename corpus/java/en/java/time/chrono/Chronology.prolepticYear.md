---
id: "java-en-function-chronology-prolepticyear"
language: "java"
lang: "en"
category: "function"
name: "Chronology.prolepticYear"
signature: "int prolepticYear(Era era, int yearOfEra)"
title: "Chronology.prolepticYear"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.prolepticYear

```java
int prolepticYear(Era era, int yearOfEra)
```

Calculates the proleptic-year given the era and year-of-era.
 

 This combines the era and year-of-era into the single proleptic-year field.
 

 If the chronology makes active use of eras, such as `JapaneseChronology`
 then the year-of-era will be validated against the era.
 For other chronologies, validation is optional.

**参数**

- **era** — the era of the correct type for the chronology, not null
- **yearOfEra** — the chronology year-of-era

**返回**

- the proleptic-year

**异常**

- **DateTimeException** — if unable to convert to a proleptic-year, such as if the year is invalid for the era
- **ClassCastException** — if the `era` is not of the correct type for the chronology
