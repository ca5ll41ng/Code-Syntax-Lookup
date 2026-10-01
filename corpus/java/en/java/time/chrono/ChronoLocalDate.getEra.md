---
id: "java-en-function-chronolocaldate-getera"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.getEra"
signature: "default Era getEra()"
title: "ChronoLocalDate.getEra"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.getEra

```java
default Era getEra()
```

Gets the era, as defined by the chronology.
 

 The era is, conceptually, the largest division of the time-line.
 Most calendar systems have a single epoch dividing the time-line into two eras.
 However, some have multiple eras, such as one for the reign of each leader.
 The exact meaning is determined by the `Chronology`.
 

 All correctly implemented `Era` classes are singletons, thus it
 is valid code to write `date.getEra() == SomeChrono.ERA_NAME)`.
 

 This default implementation uses `eraOf`.

**返回**

- the chronology specific era constant applicable at this date, not null
