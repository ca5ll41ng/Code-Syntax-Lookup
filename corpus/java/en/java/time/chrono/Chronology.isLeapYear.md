---
id: "java-en-function-chronology-isleapyear"
language: "java"
lang: "en"
category: "function"
name: "Chronology.isLeapYear"
signature: "boolean isLeapYear(long prolepticYear)"
title: "Chronology.isLeapYear"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.isLeapYear

```java
boolean isLeapYear(long prolepticYear)
```

Checks if the specified year is a leap year.
 

 A leap-year is a year of a longer length than normal.
 The exact meaning is determined by the chronology according to the following constraints.
 
 
- a leap-year must imply a year-length longer than a non leap-year.
 
- a chronology that does not support the concept of a year must return false.
 
- the correct result must be returned for all years within the
     valid range of years for the chronology.
 

 

 Outside the range of valid years an implementation is free to return
 either a best guess or false.
 An implementation must not throw an exception, even if the year is
 outside the range of valid years.

**参数**

- **prolepticYear** — the proleptic-year to check, not validated for range

**返回**

- true if the year is a leap year
