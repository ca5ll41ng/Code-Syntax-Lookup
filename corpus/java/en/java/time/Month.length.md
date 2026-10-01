---
id: "java-en-function-month-length"
language: "java"
lang: "en"
category: "function"
name: "Month.length"
signature: "public int length(boolean leapYear)"
title: "Month.length"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.length

```java
public int length(boolean leapYear)
```

Gets the length of this month in days.
 

 This takes a flag to determine whether to return the length for a leap year or not.
 

 February has 28 days in a standard year and 29 days in a leap year.
 April, June, September and November have 30 days.
 All other months have 31 days.

**参数**

- **leapYear** — true if the length is required for a leap year

**返回**

- the length of this month in days, from 28 to 31
