---
id: "java-en-function-temporaladjusters-lastdayofmonth"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.lastDayOfMonth"
signature: "public static TemporalAdjuster lastDayOfMonth()"
title: "TemporalAdjusters.lastDayOfMonth"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.lastDayOfMonth

```java
public static TemporalAdjuster lastDayOfMonth()
```

Returns the "last day of month" adjuster, which returns a new date set to
 the last day of the current month.
 

 The ISO calendar system behaves as follows:

 The input 2011-01-15 will return 2011-01-31.

 The input 2011-02-15 will return 2011-02-28.

 The input 2012-02-15 will return 2012-02-29 (leap year).

 The input 2011-04-15 will return 2011-04-30.
 

 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 
```

  long lastDay = temporal.range(DAY_OF_MONTH).getMaximum();
  temporal.with(DAY_OF_MONTH, lastDay);
 
```

**返回**

- the last day-of-month adjuster, not null
