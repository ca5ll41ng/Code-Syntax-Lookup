---
id: "java-en-function-chronolocaldate-lengthofyear"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.lengthOfYear"
signature: "default int lengthOfYear()"
title: "ChronoLocalDate.lengthOfYear"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.lengthOfYear

```java
default int lengthOfYear()
```

Returns the length of the year represented by this date, as defined by the calendar system.
 

 This returns the length of the year in days.
 

 The default implementation uses `isLeapYear` and returns 365 or 366.

**返回**

- the length of the year in days
