---
id: "java-en-function-temporaladjusters-lastdayofyear"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.lastDayOfYear"
signature: "public static TemporalAdjuster lastDayOfYear()"
title: "TemporalAdjusters.lastDayOfYear"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.lastDayOfYear

```java
public static TemporalAdjuster lastDayOfYear()
```

Returns the "last day of year" adjuster, which returns a new date set to
 the last day of the current year.
 

 The ISO calendar system behaves as follows:

 The input 2011-01-15 will return 2011-12-31.

 The input 2011-02-15 will return 2011-12-31.

 

 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 
```

  long lastDay = temporal.range(DAY_OF_YEAR).getMaximum();
  temporal.with(DAY_OF_YEAR, lastDay);
 
```

**返回**

- the last day-of-year adjuster, not null
