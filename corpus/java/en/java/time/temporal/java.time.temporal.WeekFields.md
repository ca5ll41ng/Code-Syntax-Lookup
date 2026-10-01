---
id: "java-en-function-java-time-temporal-weekfields"
language: "java"
lang: "en"
category: "function"
name: "java.time.temporal.WeekFields"
title: "WeekFields"
directive: "type"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/WeekFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeekFields

Localized definitions of the day-of-week, week-of-month and week-of-year fields.
 

 A standard week is seven days long, but cultures have different definitions for some
 other aspects of a week. This class represents the definition of the week, for the
 purpose of providing `TemporalField` instances.
 

 WeekFields provides five fields,
 `dayOfWeek`, `weekOfMonth`, `weekOfYear`,
 `weekOfWeekBasedYear`, and `weekBasedYear`
 that provide access to the values from any `Temporal temporal object`.
 

 The computations for day-of-week, week-of-month, and week-of-year are based
 on the  `YEAR proleptic-year`,
 `MONTH_OF_YEAR month-of-year`,
 `DAY_OF_MONTH day-of-month`, and
 `DAY_OF_WEEK ISO day-of-week` which are based on the
 `EPOCH_DAY epoch-day` and the chronology.
 The values may not be aligned with the `YEAR_OF_ERA year-of-Era`
 depending on the Chronology.
 

A week is defined by:
 
 
- The first day-of-week.
 For example, the ISO-8601 standard considers Monday to be the first day-of-week.
 
- The minimal number of days in the first week.
 For example, the ISO-8601 standard counts the first week as needing at least 4 days.
 

 Together these two values allow a year or month to be divided into weeks.

 Week of Month
 One field is used: week-of-month.
 The calculation ensures that weeks never overlap a month boundary.
 The month is divided into periods where each period starts on the defined first day-of-week.
 The earliest period is referred to as week 0 if it has less than the minimal number of days
 and week 1 if it has at least the minimal number of days.

 
 Examples of WeekFields
 
 DateDay-of-week
  First day: Monday
Minimal days: 4First day: Monday
Minimal days: 5
 
 
 2008-12-31Wednesday
  Week 5 of December 2008Week 5 of December 2008
 2009-01-01Thursday
  Week 1 of January 2009Week 0 of January 2009
 2009-01-04Sunday
  Week 1 of January 2009Week 0 of January 2009
 2009-01-05Monday
  Week 2 of January 2009Week 1 of January 2009
 
 

 Week of Year
 One field is used: week-of-year.
 The calculation ensures that weeks never overlap a year boundary.
 The year is divided into periods where each period starts on the defined first day-of-week.
 The earliest period is referred to as week 0 if it has less than the minimal number of days
 and week 1 if it has at least the minimal number of days.

 Week Based Year
 Two fields are used for week-based-year, one for the
 `weekOfWeekBasedYear() week-of-week-based-year` and one for
 `weekBasedYear() week-based-year`.  In a week-based-year, each week
 belongs to only a single year.  Week 1 of a year is the first week that
 starts on the first day-of-week and has at least the minimum number of days.
 The first and last weeks of a year may contain days from the
 previous calendar year or next calendar year respectively.

 
 Examples of WeekFields for week-based-year
 
 DateDay-of-week
  First day: Monday
Minimal days: 4First day: Monday
Minimal days: 5
 
 
 2008-12-31Wednesday
  Week 1 of 2009Week 53 of 2008
 2009-01-01Thursday
  Week 1 of 2009Week 53 of 2008
 2009-01-04Sunday
  Week 1 of 2009Week 53 of 2008
 2009-01-05Monday
  Week 2 of 2009Week 1 of 2009
 
 

 This class is immutable and thread-safe.

> *Since 1.8*
