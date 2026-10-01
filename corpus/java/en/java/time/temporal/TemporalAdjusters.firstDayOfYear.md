---
id: "java-en-function-temporaladjusters-firstdayofyear"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.firstDayOfYear"
signature: "public static TemporalAdjuster firstDayOfYear()"
title: "TemporalAdjusters.firstDayOfYear"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.firstDayOfYear

```java
public static TemporalAdjuster firstDayOfYear()
```

Returns the "first day of year" adjuster, which returns a new date set to
 the first day of the current year.
 

 The ISO calendar system behaves as follows:

 The input 2011-01-15 will return 2011-01-01.

 The input 2011-02-15 will return 2011-01-01.

 

 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 
```

  temporal.with(DAY_OF_YEAR, 1);
 
```

**返回**

- the first day-of-year adjuster, not null
