---
id: "java-en-function-hijrahchronology-eraof"
language: "java"
lang: "en"
category: "function"
name: "HijrahChronology.eraOf"
signature: "public HijrahEra eraOf(int eraValue)"
title: "HijrahChronology.eraOf"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/HijrahChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HijrahChronology.eraOf

```java
public HijrahEra eraOf(int eraValue)
```

Creates the HijrahEra object from the numeric value.
 The Hijrah calendar system has only one era covering the
 proleptic years greater than zero.
 This method returns the singleton HijrahEra for the value 1.

**参数**

- **eraValue** — the era value

**返回**

- the calendar system era, not null

**异常**

- **DateTimeException** — if unable to create the era
