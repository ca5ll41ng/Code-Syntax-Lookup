---
id: "java-en-function-chronoperiod-getunits"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriod.getUnits"
signature: "List<TemporalUnit> getUnits()"
title: "ChronoPeriod.getUnits"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod.getUnits

```java
List<TemporalUnit> getUnits()
```

Gets the set of units supported by this period.
 

 The supported units are chronology specific.
 They will typically be `YEARS YEARS`,
 `MONTHS MONTHS` and `DAYS DAYS`.
 They are returned in order from largest to smallest.
 

 This set can be used in conjunction with `get`
 to access the entire state of the period.

**返回**

- a list containing the supported units, not null
