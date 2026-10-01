---
id: "java-en-function-temporaladjusters-dayofweekinmonth"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.dayOfWeekInMonth"
signature: "public static TemporalAdjuster dayOfWeekInMonth(int ordinal, DayOfWeek dayOfWeek)"
title: "TemporalAdjusters.dayOfWeekInMonth"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.dayOfWeekInMonth

```java
public static TemporalAdjuster dayOfWeekInMonth(int ordinal, DayOfWeek dayOfWeek)
```

Returns the day-of-week in month adjuster, which returns a new date
 with the ordinal day-of-week based on the month.
 This is used for expressions like the 'second Tuesday in March'.
 

 The ISO calendar system behaves as follows:

 The input 2011-12-15 for (1,TUESDAY) will return 2011-12-06.

 The input 2011-12-15 for (2,TUESDAY) will return 2011-12-13.

 The input 2011-12-15 for (3,TUESDAY) will return 2011-12-20.

 The input 2011-12-15 for (4,TUESDAY) will return 2011-12-27.

 The input 2011-12-15 for (5,TUESDAY) will return 2012-01-03.

 The input 2011-12-15 for (-1,TUESDAY) will return 2011-12-27 (last in month).

 The input 2011-12-15 for (-4,TUESDAY) will return 2011-12-06 (3 weeks before last in month).

 The input 2011-12-15 for (-5,TUESDAY) will return 2011-11-29 (4 weeks before last in month).

 The input 2011-12-15 for (0,TUESDAY) will return 2011-11-29 (last in previous month).

 

 For a positive or zero ordinal, the algorithm is equivalent to finding the first
 day-of-week that matches within the month and then adding a number of weeks to it.
 For a negative ordinal, the algorithm is equivalent to finding the last
 day-of-week that matches within the month and then subtracting a number of weeks to it.
 The ordinal number of weeks is not validated and is interpreted leniently
 according to this algorithm. This definition means that an ordinal of zero finds
 the last matching day-of-week in the previous month.
 

 The behavior is suitable for use with most calendar systems.
 It uses the `DAY_OF_WEEK` and `DAY_OF_MONTH` fields
 and the `DAYS` unit, and assumes a seven day week.

**参数**

- **ordinal** — the week within the month, unbounded but typically from -5 to 5
- **dayOfWeek** — the day-of-week, not null

**返回**

- the day-of-week in month adjuster, not null
