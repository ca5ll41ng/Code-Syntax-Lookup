---
id: "java-en-function-chronology-isisobased"
language: "java"
lang: "en"
category: "function"
name: "Chronology.isIsoBased"
signature: "default boolean isIsoBased()"
title: "Chronology.isIsoBased"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.isIsoBased

```java
default boolean isIsoBased()
```

Checks if this chronology is ISO based.
 

 An ISO based chronology has the same basic structure as the `IsoChronology
 ISO chronology`, i.e., the chronology has the same number of months, the number
 of days in each month, and day-of-year and leap years are the same as ISO chronology.
 It also supports the concept of week-based-year of ISO chronology.
 For example, the `MinguoChronology Minguo`, `ThaiBuddhistChronology
 ThaiThaiBuddhist` and `JapaneseChronology Japanese` chronologies are ISO based.

 The default implementation returns `false`.

**返回**

- `true` only if all the fields of `IsoFields` are supported by this chronology. Otherwise, returns `false`.

**参见**

- IsoChronology
- JapaneseChronology
- MinguoChronology
- ThaiBuddhistChronology
- IsoFields

> *Since 19*
