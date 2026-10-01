---
id: "java-en-function-temporaladjusters-lastinmonth"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.lastInMonth"
signature: "public static TemporalAdjuster lastInMonth(DayOfWeek dayOfWeek)"
title: "TemporalAdjusters.lastInMonth"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.lastInMonth

```java
public static TemporalAdjuster lastInMonth(DayOfWeek dayOfWeek)
```

Returns the last in month adjuster, which returns a new date
 in the same month with the last matching day-of-week.
 This is used for expressions like 'last Tuesday in March'.
 

 The ISO calendar system behaves as follows:

 The input 2011-12-15 for (MONDAY) will return 2011-12-26.

 The input 2011-12-15 for (FRIDAY) will return 2011-12-30.

 

 The behavior is suitable for use with most calendar systems.
 It uses the `DAY_OF_WEEK` and `DAY_OF_MONTH` fields
 and the `DAYS` unit, and assumes a seven day week.

**参数**

- **dayOfWeek** — the day-of-week, not null

**返回**

- the first in month adjuster, not null
