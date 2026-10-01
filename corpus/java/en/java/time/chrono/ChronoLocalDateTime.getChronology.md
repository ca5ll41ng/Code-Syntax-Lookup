---
id: "java-en-function-chronolocaldatetime-getchronology"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDateTime.getChronology"
signature: "default Chronology getChronology()"
title: "ChronoLocalDateTime.getChronology"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDateTime.getChronology

```java
default Chronology getChronology()
```

Gets the chronology of this date-time.
 

 The `Chronology` represents the calendar system in use.
 The era and other fields in `ChronoField` are defined by the chronology.

**返回**

- the chronology, not null
