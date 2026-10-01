---
id: "java-en-function-temporaladjusters-firstdayofnextmonth"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.firstDayOfNextMonth"
signature: "public static TemporalAdjuster firstDayOfNextMonth()"
title: "TemporalAdjusters.firstDayOfNextMonth"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.firstDayOfNextMonth

```java
public static TemporalAdjuster firstDayOfNextMonth()
```

Returns the "first day of next month" adjuster, which returns a new date set to
 the first day of the next month.
 

 The ISO calendar system behaves as follows:

 The input 2011-01-15 will return 2011-02-01.

 The input 2011-02-15 will return 2011-03-01.
 

 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 
```

  temporal.with(DAY_OF_MONTH, 1).plus(1, MONTHS);
 
```

**返回**

- the first day of next month adjuster, not null
