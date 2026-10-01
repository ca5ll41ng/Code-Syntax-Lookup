---
id: "java-en-function-weekfields-week_based_years"
language: "java"
lang: "en"
category: "function"
name: "WeekFields.WEEK_BASED_YEARS"
signature: "public static final TemporalUnit WEEK_BASED_YEARS = IsoFields.WEEK_BASED_YEARS"
title: "WeekFields.WEEK_BASED_YEARS"
directive: "field"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/WeekFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeekFields.WEEK_BASED_YEARS

```java
public static final TemporalUnit WEEK_BASED_YEARS = IsoFields.WEEK_BASED_YEARS
```

The unit that represents week-based-years for the purpose of addition and subtraction.
 

 This allows a number of week-based-years to be added to, or subtracted from, a date.
 The unit is equal to either 52 or 53 weeks.
 The estimated duration of a week-based-year is the same as that of a standard ISO
 year at `365.2425 Days`.
 

 The rules for addition add the number of week-based-years to the existing value
 for the week-based-year field retaining the week-of-week-based-year
 and day-of-week, unless the week number it too large for the target year.
 In that case, the week is set to the last week of the year
 with the same day-of-week.
 

 This unit is an immutable and thread-safe singleton.
