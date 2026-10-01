---
id: "java-en-function-chronoperiod-getchronology"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriod.getChronology"
signature: "Chronology getChronology()"
title: "ChronoPeriod.getChronology"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod.getChronology

```java
Chronology getChronology()
```

Gets the chronology that defines the meaning of the supported units.
 

 The period is defined by the chronology.
 It controls the supported units and restricts addition/subtraction
 to `ChronoLocalDate` instances of the same chronology.

**返回**

- the chronology defining the period, not null
