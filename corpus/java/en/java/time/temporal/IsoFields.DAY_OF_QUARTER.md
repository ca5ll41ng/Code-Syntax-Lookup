---
id: "java-en-function-isofields-day_of_quarter"
language: "java"
lang: "en"
category: "function"
name: "IsoFields.DAY_OF_QUARTER"
signature: "public static final TemporalField DAY_OF_QUARTER = Field.DAY_OF_QUARTER"
title: "IsoFields.DAY_OF_QUARTER"
directive: "field"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/IsoFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IsoFields.DAY_OF_QUARTER

```java
public static final TemporalField DAY_OF_QUARTER = Field.DAY_OF_QUARTER
```

The field that represents the day-of-quarter.
 

 This field allows the day-of-quarter value to be queried and set.
 The day-of-quarter has values from 1 to 90 in Q1 of a standard year, from 1 to 91
 in Q1 of a leap year, from 1 to 91 in Q2 and from 1 to 92 in Q3 and Q4.
 

 The day-of-quarter can only be calculated if the day-of-year, month-of-year and year
 are available.
 

 When setting this field, the value is allowed to be partially lenient, taking any
 value from 1 to 92. If the quarter has less than 92 days, then day 92, and
 potentially day 91, is in the following quarter.
 

 In the resolving phase of parsing, a date can be created from a year,
 quarter-of-year and day-of-quarter.
 

 In `STRICT strict mode`, all three fields are
 validated against their range of valid values. The day-of-quarter field
 is validated from 1 to 90, 91 or 92 depending on the year and quarter.
 

 In `SMART smart mode`, all three fields are
 validated against their range of valid values. The day-of-quarter field is
 validated between 1 and 92, ignoring the actual range based on the year and quarter.
 If the day-of-quarter exceeds the actual range by one day, then the resulting date
 is one day later. If the day-of-quarter exceeds the actual range by two days,
 then the resulting date is two days later.
 

 In `LENIENT lenient mode`, only the year is validated
 against the range of valid values. The resulting date is calculated equivalent to
 the following three stage approach. First, create a date on the first of January
 in the requested year. Then take the quarter-of-year, subtract one, and add the
 amount in quarters to the date. Finally, take the day-of-quarter, subtract one,
 and add the amount in days to the date.
 

 This unit is an immutable and thread-safe singleton.
