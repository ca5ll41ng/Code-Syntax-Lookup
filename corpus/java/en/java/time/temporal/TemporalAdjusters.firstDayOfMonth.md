---
id: "java-en-function-temporaladjusters-firstdayofmonth"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.firstDayOfMonth"
signature: "public static TemporalAdjuster firstDayOfMonth()"
title: "TemporalAdjusters.firstDayOfMonth"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.firstDayOfMonth

```java
public static TemporalAdjuster firstDayOfMonth()
```

Returns the "first day of month" adjuster, which returns a new date set to
 the first day of the current month.
 

 The ISO calendar system behaves as follows:

 The input 2011-01-15 will return 2011-01-01.

 The input 2011-02-15 will return 2011-02-01.
 

 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 
```

  temporal.with(DAY_OF_MONTH, 1);
 
```

**返回**

- the first day-of-month adjuster, not null
