---
id: "java-en-function-isofields-week_of_week_based_year"
language: "java"
lang: "en"
category: "function"
name: "IsoFields.WEEK_OF_WEEK_BASED_YEAR"
signature: "public static final TemporalField WEEK_OF_WEEK_BASED_YEAR = Field.WEEK_OF_WEEK_BASED_YEAR"
title: "IsoFields.WEEK_OF_WEEK_BASED_YEAR"
directive: "field"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/IsoFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IsoFields.WEEK_OF_WEEK_BASED_YEAR

```java
public static final TemporalField WEEK_OF_WEEK_BASED_YEAR = Field.WEEK_OF_WEEK_BASED_YEAR
```

The field that represents the week-of-week-based-year.
 

 This field allows the week of the week-based-year value to be queried and set.
 The week-of-week-based-year has values from 1 to 52, or 53 if the
 week-based-year has 53 weeks.
 

 In the resolving phase of parsing, a date can be created from a
 week-based-year, week-of-week-based-year and day-of-week.
 

 In `STRICT strict mode`, all three fields are
 validated against their range of valid values. The week-of-week-based-year
 field is validated from 1 to 52 or 53 depending on the week-based-year.
 

 In `SMART smart mode`, all three fields are
 validated against their range of valid values. The week-of-week-based-year
 field is validated between 1 and 53, ignoring the week-based-year.
 If the week-of-week-based-year is 53, but the week-based-year only has
 52 weeks, then the resulting date is in week 1 of the following week-based-year.
 

 In `LENIENT lenient mode`, only the week-based-year
 is validated against the range of valid values. If the day-of-week is outside
 the range 1 to 7, then the resulting date is adjusted by a suitable number of
 weeks to reduce the day-of-week to the range 1 to 7. If the week-of-week-based-year
 value is outside the range 1 to 52, then any excess weeks are added or subtracted
 from the resulting date.
 

 This unit is an immutable and thread-safe singleton.
