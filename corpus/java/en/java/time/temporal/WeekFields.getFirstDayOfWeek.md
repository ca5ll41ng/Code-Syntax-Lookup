---
id: "java-en-function-weekfields-getfirstdayofweek"
language: "java"
lang: "en"
category: "function"
name: "WeekFields.getFirstDayOfWeek"
signature: "public DayOfWeek getFirstDayOfWeek()"
title: "WeekFields.getFirstDayOfWeek"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/WeekFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeekFields.getFirstDayOfWeek

```java
public DayOfWeek getFirstDayOfWeek()
```

Gets the first day-of-week.
 

 The first day-of-week varies by culture.
 For example, the US uses Sunday, while France and the ISO-8601 standard use Monday.
 This method returns the first day using the standard `DayOfWeek` enum.

**返回**

- the first day-of-week, not null
