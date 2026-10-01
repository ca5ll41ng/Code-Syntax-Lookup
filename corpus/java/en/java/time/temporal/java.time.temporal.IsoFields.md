---
id: "java-en-function-java-time-temporal-isofields"
language: "java"
lang: "en"
category: "function"
name: "java.time.temporal.IsoFields"
title: "IsoFields"
directive: "type"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/IsoFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IsoFields

Fields and units specific to the ISO-8601 calendar system,
 including quarter-of-year and week-based-year.
 

 This class defines fields and units that are specific to the ISO calendar system.

 Quarter of year
 The ISO-8601 standard is based on the standard civic 12 month year.
 This is commonly divided into four quarters, often abbreviated as Q1, Q2, Q3 and Q4.
 

 January, February and March are in Q1.
 April, May and June are in Q2.
 July, August and September are in Q3.
 October, November and December are in Q4.
 

 The complete date is expressed using three fields:
 
 
- `DAY_OF_QUARTER DAY_OF_QUARTER` - the day within the quarter, from 1 to 90, 91 or 92
 
- `QUARTER_OF_YEAR QUARTER_OF_YEAR` - the quarter within the year, from 1 to 4
 
- `YEAR YEAR` - the standard ISO year
 

 Week based years
 The ISO-8601 standard was originally intended as a data interchange format,
 defining a string format for dates and times. However, it also defines an
 alternate way of expressing the date, based on the concept of week-based-year.
 

 The date is expressed using three fields:
 
 
- `DAY_OF_WEEK DAY_OF_WEEK` - the standard field defining the
  day-of-week from Monday (1) to Sunday (7)
 
- `WEEK_OF_WEEK_BASED_YEAR` - the week within the week-based-year
 
- `WEEK_BASED_YEAR WEEK_BASED_YEAR` - the week-based-year
 

 The week-based-year itself is defined relative to the standard ISO proleptic year.
 It differs from the standard year in that it always starts on a Monday.
 

 The first week of a week-based-year is the first Monday-based week of the standard
 ISO year that has at least 4 days in the new year.
 
 
- If January 1st is Monday then week 1 starts on January 1st
 
- If January 1st is Tuesday then week 1 starts on December 31st of the previous standard year
 
- If January 1st is Wednesday then week 1 starts on December 30th of the previous standard year
 
- If January 1st is Thursday then week 1 starts on December 29th of the previous standard year
 
- If January 1st is Friday then week 1 starts on January 4th
 
- If January 1st is Saturday then week 1 starts on January 3rd
 
- If January 1st is Sunday then week 1 starts on January 2nd
 

 There are 52 weeks in most week-based years, however on occasion there are 53 weeks.
 

 For example:

 
 Examples of Week based Years
 
 DateDay-of-weekField values
 
 
 2008-12-28SundayWeek 52 of week-based-year 2008
 2008-12-29MondayWeek 1 of week-based-year 2009
 2008-12-31WednesdayWeek 1 of week-based-year 2009
 2009-01-01ThursdayWeek 1 of week-based-year 2009
 2009-01-04SundayWeek 1 of week-based-year 2009
 2009-01-05MondayWeek 2 of week-based-year 2009
 
 

 

 This class is immutable and thread-safe.

> *Since 1.8*
