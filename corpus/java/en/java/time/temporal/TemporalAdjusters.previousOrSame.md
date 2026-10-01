---
id: "java-en-function-temporaladjusters-previousorsame"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.previousOrSame"
signature: "public static TemporalAdjuster previousOrSame(DayOfWeek dayOfWeek)"
title: "TemporalAdjusters.previousOrSame"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.previousOrSame

```java
public static TemporalAdjuster previousOrSame(DayOfWeek dayOfWeek)
```

Returns the previous-or-same day-of-week adjuster, which adjusts the date to the
 first occurrence of the specified day-of-week before the date being adjusted
 unless it is already on that day in which case the same object is returned.
 

 The ISO calendar system behaves as follows:

 The input 2011-01-15 (a Saturday) for parameter (MONDAY) will return 2011-01-10 (five days earlier).

 The input 2011-01-15 (a Saturday) for parameter (WEDNESDAY) will return 2011-01-12 (three days earlier).

 The input 2011-01-15 (a Saturday) for parameter (SATURDAY) will return 2011-01-15 (same as input).
 

 The behavior is suitable for use with most calendar systems.
 It uses the `DAY_OF_WEEK` field and the `DAYS` unit,
 and assumes a seven day week.

**参数**

- **dayOfWeek** — the day-of-week to check for or move the date to, not null

**返回**

- the previous-or-same day-of-week adjuster, not null
