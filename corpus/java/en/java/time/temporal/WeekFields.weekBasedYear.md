---
id: "java-en-function-weekfields-weekbasedyear"
language: "java"
lang: "en"
category: "function"
name: "WeekFields.weekBasedYear"
signature: "public TemporalField weekBasedYear()"
title: "WeekFields.weekBasedYear"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/WeekFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeekFields.weekBasedYear

```java
public TemporalField weekBasedYear()
```

Returns a field to access the year of a week-based-year based on this `WeekFields`.
 

 This represents the concept of the year where weeks start on a fixed day-of-week,
 such as Monday and each week belongs to exactly one year.
 This field is typically used with `dayOfWeek` and
 `weekOfWeekBasedYear`.
 

 Week one(1) is the week starting on the `getFirstDayOfWeek`
 where there are at least `getMinimalDaysInFirstWeek` days in the year.
 Thus, week one may start before the start of the year.
 If the first week starts after the start of the year then the period before
 is in the last week of the previous year.
 

 This field can be used with any calendar system.
 

 In the resolving phase of parsing, a date can be created from a week-based-year,
 week-of-year and day-of-week.
 

 In `STRICT strict mode`, all three fields are
 validated against their range of valid values. The week-of-year field
 is validated to ensure that the resulting week-based-year is the
 week-based-year requested.
 

 In `SMART smart mode`, all three fields are
 validated against their range of valid values. The week-of-week-based-year field
 is validated from 1 to 53, meaning that the resulting date can be in the
 following week-based-year to that specified.
 

 In `LENIENT lenient mode`, the year and day-of-week
 are validated against the range of valid values. The resulting date is calculated
 equivalent to the following three stage approach.
 First, create a date on the first day of the first week in the requested week-based-year.
 Then take the week-of-week-based-year, subtract one, and add the amount in weeks to the date.
 Finally, adjust to the correct day-of-week within the localized week.

**返回**

- a field providing access to the week-based-year, not null
