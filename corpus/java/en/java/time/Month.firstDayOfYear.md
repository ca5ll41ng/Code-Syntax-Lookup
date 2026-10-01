---
id: "java-en-function-month-firstdayofyear"
language: "java"
lang: "en"
category: "function"
name: "Month.firstDayOfYear"
signature: "public int firstDayOfYear(boolean leapYear)"
title: "Month.firstDayOfYear"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.firstDayOfYear

```java
public int firstDayOfYear(boolean leapYear)
```

Gets the day-of-year corresponding to the first day of this month.
 

 This returns the day-of-year that this month begins on, using the leap
 year flag to determine the length of February.

**参数**

- **leapYear** — true if the length is required for a leap year

**返回**

- the day of year corresponding to the first day of this month, from 1 to 336
