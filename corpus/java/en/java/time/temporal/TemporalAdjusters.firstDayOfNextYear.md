---
id: "java-en-function-temporaladjusters-firstdayofnextyear"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.firstDayOfNextYear"
signature: "public static TemporalAdjuster firstDayOfNextYear()"
title: "TemporalAdjusters.firstDayOfNextYear"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.firstDayOfNextYear

```java
public static TemporalAdjuster firstDayOfNextYear()
```

Returns the "first day of next year" adjuster, which returns a new date set to
 the first day of the next year.
 

 The ISO calendar system behaves as follows:

 The input 2011-01-15 will return 2012-01-01.
 

 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 
```

  temporal.with(DAY_OF_YEAR, 1).plus(1, YEARS);
 
```

**返回**

- the first day of next month adjuster, not null
