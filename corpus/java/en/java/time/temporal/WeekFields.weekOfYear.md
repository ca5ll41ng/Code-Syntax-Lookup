---
id: "java-en-function-weekfields-weekofyear"
language: "java"
lang: "en"
category: "function"
name: "WeekFields.weekOfYear"
signature: "public TemporalField weekOfYear()"
title: "WeekFields.weekOfYear"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/WeekFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeekFields.weekOfYear

```java
public TemporalField weekOfYear()
```

Returns a field to access the week of year based on this `WeekFields`.
 

 This represents the concept of the count of weeks within the year where weeks
 start on a fixed day-of-week, such as Monday.
 This field is typically used with `dayOfWeek`.
 

 Week one(1) is the week starting on the `getFirstDayOfWeek`
 where there are at least `getMinimalDaysInFirstWeek` days in the year.
 Thus, week one may start up to `minDays` days before the start of the year.
 If the first week starts after the start of the year then the period before is week zero (0).
 

 For example:

 - if the 1st day of the year is a Monday, week one starts on the 1st and there is no week zero

 - if the 2nd day of the year is a Monday, week one starts on the 2nd and the 1st is in week zero

 - if the 4th day of the year is a Monday, week one starts on the 4th and the 1st to 3rd is in week zero

 - if the 5th day of the year is a Monday, week two starts on the 5th and the 1st to 4th is in week one

 

 This field can be used with any calendar system.
 

 In the resolving phase of parsing, a date can be created from a year,
 week-of-year and day-of-week.
 

 In `STRICT strict mode`, all three fields are
 validated against their range of valid values. The week-of-year field
 is validated to ensure that the resulting year is the year requested.
 

 In `SMART smart mode`, all three fields are
 validated against their range of valid values. The week-of-year field
 is validated from 0 to 54, meaning that the resulting date can be in a
 different year to that specified.
 

 In `LENIENT lenient mode`, the year and day-of-week
 are validated against the range of valid values. The resulting date is calculated
 equivalent to the following three stage approach.
 First, create a date on the first day of the first week in the requested year.
 Then take the week-of-year, subtract one, and add the amount in weeks to the date.
 Finally, adjust to the correct day-of-week within the localized week.

**返回**

- a field providing access to the week-of-year, not null
