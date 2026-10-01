---
id: "java-en-function-thaibuddhistchronology-isleapyear"
language: "java"
lang: "en"
category: "function"
name: "ThaiBuddhistChronology.isLeapYear"
signature: "public boolean isLeapYear(long prolepticYear)"
title: "ThaiBuddhistChronology.isLeapYear"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ThaiBuddhistChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThaiBuddhistChronology.isLeapYear

```java
public boolean isLeapYear(long prolepticYear)
```

Checks if the specified year is a leap year.
 

 Thai Buddhist leap years occur exactly in line with ISO leap years.
 This method does not validate the year passed in, and only has a
 well-defined result for years in the supported range.

**参数**

- **prolepticYear** — the proleptic-year to check, not validated for range

**返回**

- true if the year is a leap year
