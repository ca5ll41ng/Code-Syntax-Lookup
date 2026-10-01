---
id: "java-en-function-temporaladjusters-next"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.next"
signature: "public static TemporalAdjuster next(DayOfWeek dayOfWeek)"
title: "TemporalAdjusters.next"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.next

```java
public static TemporalAdjuster next(DayOfWeek dayOfWeek)
```

Returns the next day-of-week adjuster, which adjusts the date to the
 first occurrence of the specified day-of-week after the date being adjusted.
 

 The ISO calendar system behaves as follows:

 The input 2011-01-15 (a Saturday) for parameter (MONDAY) will return 2011-01-17 (two days later).

 The input 2011-01-15 (a Saturday) for parameter (WEDNESDAY) will return 2011-01-19 (four days later).

 The input 2011-01-15 (a Saturday) for parameter (SATURDAY) will return 2011-01-22 (seven days later).
 

 The behavior is suitable for use with most calendar systems.
 It uses the `DAY_OF_WEEK` field and the `DAYS` unit,
 and assumes a seven day week.

**参数**

- **dayOfWeek** — the day-of-week to move the date to, not null

**返回**

- the next day-of-week adjuster, not null
