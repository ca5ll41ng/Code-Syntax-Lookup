---
id: "java-en-function-chronology-eraof"
language: "java"
lang: "en"
category: "function"
name: "Chronology.eraOf"
signature: "Era eraOf(int eraValue)"
title: "Chronology.eraOf"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.eraOf

```java
Era eraOf(int eraValue)
```

Creates the chronology era object from the numeric value.
 

 The era is, conceptually, the largest division of the time-line.
 Most calendar systems have a single epoch dividing the time-line into two eras.
 However, some have multiple eras, such as one for the reign of each leader.
 The exact meaning is determined by the chronology according to the following constraints.
 

 The era in use at 1970-01-01 must have the value 1.
 Later eras must have sequentially higher values.
 Earlier eras must have sequentially lower values.
 Each chronology must refer to an enum or similar singleton to provide the era values.
 

 This method returns the singleton era of the correct type for the specified era value.

**参数**

- **eraValue** — the era value

**返回**

- the calendar system era, not null

**异常**

- **DateTimeException** — if unable to create the era
