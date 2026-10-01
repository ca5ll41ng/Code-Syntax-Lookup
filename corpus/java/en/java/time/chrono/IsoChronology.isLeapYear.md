---
id: "java-en-function-isochronology-isleapyear"
language: "java"
lang: "en"
category: "function"
name: "IsoChronology.isLeapYear"
signature: "public boolean isLeapYear(long prolepticYear)"
title: "IsoChronology.isLeapYear"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/IsoChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IsoChronology.isLeapYear

```java
public boolean isLeapYear(long prolepticYear)
```

Checks if the year is a leap year, according to the ISO proleptic
 calendar system rules.
 

 This method applies the current rules for leap years across the whole time-line.
 In general, a year is a leap year if it is divisible by four without
 remainder. However, years divisible by 100, are not leap years, with
 the exception of years divisible by 400 which are.
 

 For example, 1904 is a leap year it is divisible by 4.
 1900 was not a leap year as it is divisible by 100, however 2000 was a
 leap year as it is divisible by 400.
 

 The calculation is proleptic - applying the same rules into the far future and far past.
 This is historically inaccurate, but is correct for the ISO-8601 standard.

**参数**

- **prolepticYear** — the ISO proleptic year to check

**返回**

- true if the year is leap, false otherwise
