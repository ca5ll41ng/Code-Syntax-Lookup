---
id: "java-en-function-temporaladjusters-previous"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.previous"
signature: "public static TemporalAdjuster previous(DayOfWeek dayOfWeek)"
title: "TemporalAdjusters.previous"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.previous

```java
public static TemporalAdjuster previous(DayOfWeek dayOfWeek)
```

Returns the previous day-of-week adjuster, which adjusts the date to the
 first occurrence of the specified day-of-week before the date being adjusted.
 

 The ISO calendar system behaves as follows:

 The input 2011-01-15 (a Saturday) for parameter (MONDAY) will return 2011-01-10 (five days earlier).

 The input 2011-01-15 (a Saturday) for parameter (WEDNESDAY) will return 2011-01-12 (three days earlier).

 The input 2011-01-15 (a Saturday) for parameter (SATURDAY) will return 2011-01-08 (seven days earlier).
 

 The behavior is suitable for use with most calendar systems.
 It uses the `DAY_OF_WEEK` field and the `DAYS` unit,
 and assumes a seven day week.

**参数**

- **dayOfWeek** — the day-of-week to move the date to, not null

**返回**

- the previous day-of-week adjuster, not null
