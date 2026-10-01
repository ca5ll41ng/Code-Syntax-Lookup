---
id: "java-en-function-julianfields-rata_die"
language: "java"
lang: "en"
category: "function"
name: "JulianFields.RATA_DIE"
signature: "public static final TemporalField RATA_DIE = Field.RATA_DIE"
title: "JulianFields.RATA_DIE"
directive: "field"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/JulianFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JulianFields.RATA_DIE

```java
public static final TemporalField RATA_DIE = Field.RATA_DIE
```

Rata Die field.
 

 Rata Die counts whole days continuously starting day 1 at midnight at the beginning of 0001-01-01 (ISO).
 The field always refers to the local date-time, ignoring the offset or zone.
 

 For date-times, 'RATA_DIE.getFrom()' assumes the same value from
 midnight until just before the next midnight.
 When 'RATA_DIE.adjustInto()' is applied to a date-time, the time of day portion remains unaltered.
 'RATA_DIE.adjustInto()' and 'RATA_DIE.getFrom()' only apply to `Temporal` objects
 that can be converted into `EPOCH_DAY`.
 An `UnsupportedTemporalTypeException` is thrown for any other type of object.
 

 In the resolving phase of parsing, a date can be created from a Rata Die field.
 In `STRICT strict mode` and `SMART smart mode`
 the Rata Die value is validated against the range of valid values.
 In `LENIENT lenient mode` no validation occurs.
