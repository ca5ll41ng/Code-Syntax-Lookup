---
id: "java-en-function-weekfields-weekofmonth"
language: "java"
lang: "en"
category: "function"
name: "WeekFields.weekOfMonth"
signature: "public TemporalField weekOfMonth()"
title: "WeekFields.weekOfMonth"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/WeekFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeekFields.weekOfMonth

```java
public TemporalField weekOfMonth()
```

Returns a field to access the week of month based on this `WeekFields`.
 

 This represents the concept of the count of weeks within the month where weeks
 start on a fixed day-of-week, such as Monday.
 This field is typically used with `dayOfWeek`.
 

 Week one (1) is the week starting on the `getFirstDayOfWeek`
 where there are at least `getMinimalDaysInFirstWeek` days in the month.
 Thus, week one may start up to `minDays` days before the start of the month.
 If the first week starts after the start of the month then the period before is week zero (0).
 

 For example:

 - if the 1st day of the month is a Monday, week one starts on the 1st and there is no week zero

 - if the 2nd day of the month is a Monday, week one starts on the 2nd and the 1st is in week zero

 - if the 4th day of the month is a Monday, week one starts on the 4th and the 1st to 3rd is in week zero

 - if the 5th day of the month is a Monday, week two starts on the 5th and the 1st to 4th is in week one

 

 This field can be used with any calendar system.
 

 In the resolving phase of parsing, a date can be created from a year,
 week-of-month, month-of-year and day-of-week.
 

 In `STRICT strict mode`, all four fields are
 validated against their range of valid values. The week-of-month field
 is validated to ensure that the resulting month is the month requested.
 

 In `SMART smart mode`, all four fields are
 validated against their range of valid values. The week-of-month field
 is validated from 0 to 6, meaning that the resulting date can be in a
 different month to that specified.
 

 In `LENIENT lenient mode`, the year and day-of-week
 are validated against the range of valid values. The resulting date is calculated
 equivalent to the following four stage approach.
 First, create a date on the first day of the first week of January in the requested year.
 Then take the month-of-year, subtract one, and add the amount in months to the date.
 Then take the week-of-month, subtract one, and add the amount in weeks to the date.
 Finally, adjust to the correct day-of-week within the localized week.

**返回**

- a field providing access to the week-of-month, not null
