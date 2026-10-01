---
id: "java-en-function-weekfields-getminimaldaysinfirstweek"
language: "java"
lang: "en"
category: "function"
name: "WeekFields.getMinimalDaysInFirstWeek"
signature: "public int getMinimalDaysInFirstWeek()"
title: "WeekFields.getMinimalDaysInFirstWeek"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/WeekFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeekFields.getMinimalDaysInFirstWeek

```java
public int getMinimalDaysInFirstWeek()
```

Gets the minimal number of days in the first week.
 

 The number of days considered to define the first week of a month or year
 varies by culture.
 For example, the ISO-8601 requires 4 days (more than half a week) to
 be present before counting the first week.

**返回**

- the minimal number of days in the first week of a month or year, from 1 to 7
