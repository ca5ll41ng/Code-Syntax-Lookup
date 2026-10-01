---
id: "java-en-function-chronolocaldate-isleapyear"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.isLeapYear"
signature: "default boolean isLeapYear()"
title: "ChronoLocalDate.isLeapYear"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.isLeapYear

```java
default boolean isLeapYear()
```

Checks if the year is a leap year, as defined by the calendar system.
 

 A leap-year is a year of a longer length than normal.
 The exact meaning is determined by the chronology with the constraint that
 a leap-year must imply a year-length longer than a non leap-year.
 

 This default implementation uses `isLeapYear`.

**返回**

- true if this date is in a leap year, false otherwise
