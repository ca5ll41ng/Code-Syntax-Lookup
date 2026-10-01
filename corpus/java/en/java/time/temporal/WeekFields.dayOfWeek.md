---
id: "java-en-function-weekfields-dayofweek"
language: "java"
lang: "en"
category: "function"
name: "WeekFields.dayOfWeek"
signature: "public TemporalField dayOfWeek()"
title: "WeekFields.dayOfWeek"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/WeekFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeekFields.dayOfWeek

```java
public TemporalField dayOfWeek()
```

Returns a field to access the day of week based on this `WeekFields`.
 

 This is similar to `DAY_OF_WEEK` but uses values for
 the day-of-week based on this `WeekFields`.
 The days are numbered from 1 to 7 where the
 `getFirstDayOfWeek() first day-of-week` is assigned the value 1.
 

 For example, if the first day-of-week is Sunday, then that will have the
 value 1, with other days ranging from Monday as 2 to Saturday as 7.
 

 In the resolving phase of parsing, a localized day-of-week will be converted
 to a standardized `ChronoField` day-of-week.
 The day-of-week must be in the valid range 1 to 7.
 Other fields in this class build dates using the standardized day-of-week.

**返回**

- a field providing access to the day-of-week with localized numbering, not null
