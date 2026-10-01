---
id: "java-en-function-java-util-simpletimezone"
language: "java"
lang: "en"
category: "function"
name: "java.util.SimpleTimeZone"
title: "SimpleTimeZone"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SimpleTimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleTimeZone

`SimpleTimeZone` is a concrete subclass of `TimeZone`
 that represents a time zone for use with a Gregorian calendar.
 The class holds an offset from GMT, called raw offset, and start
 and end rules for a daylight saving time schedule.  Since it only holds
 single values for each, it cannot handle historical changes in the offset
 from GMT and the daylight saving schedule, except that the `setStartYear setStartYear` method can specify the year when the daylight
 saving time schedule starts in effect.
 

 To construct a `SimpleTimeZone` with a daylight saving time
 schedule, the schedule can be described with a set of rules,
 start-rule and end-rule. A day when daylight saving time
 starts or ends is specified by a combination of month,
 day-of-month, and day-of-week values. The month
 value is represented by a Calendar `MONTH MONTH` field
 value, such as `MARCH`. The day-of-week value is
 represented by a Calendar `DAY_OF_WEEK DAY_OF_WEEK` value,
 such as `SUNDAY SUNDAY`. The meanings of value combinations
 are as follows.

 
 
- **Exact day of month**

 To specify an exact day of month, set the month and
 day-of-month to an exact value, and day-of-week to zero. For
 example, to specify March 1, set the month to `MARCH
 MARCH`, day-of-month to 1, and day-of-week to 0.

 
- **Day of week on or after day of month**

 To specify a day of week on or after an exact day of month, set the
 month to an exact month value, day-of-month to the day on
 or after which the rule is applied, and day-of-week to a negative `DAY_OF_WEEK DAY_OF_WEEK` field value. For example, to specify the
 second Sunday of April, set month to `APRIL APRIL`,
 day-of-month to 8, and day-of-week to `-``SUNDAY SUNDAY`.

 
- **Day of week on or before day of month**

 To specify a day of the week on or before an exact day of the month, set
 day-of-month and day-of-week to a negative value. For
 example, to specify the last Wednesday on or before the 21st of March, set
 month to `MARCH MARCH`, day-of-month is -21
 and day-of-week is `-``WEDNESDAY WEDNESDAY`. 

 
- **Last day-of-week of month**

 To specify, the last day-of-week of the month, set day-of-week to a
 `DAY_OF_WEEK DAY_OF_WEEK` value and day-of-month to
 -1. For example, to specify the last Sunday of October, set month
 to `OCTOBER OCTOBER`, day-of-week to `SUNDAY SUNDAY` and day-of-month to -1.  

 

 The time of the day at which daylight saving time starts or ends is
 specified by a millisecond value within the day. There are three kinds of
 modes to specify the time: `WALL_TIME`, `STANDARD_TIME` and `UTC_TIME`. For example, if daylight
 saving time ends
 at 2:00 am in the wall clock time, it can be specified by 7200000
 milliseconds in the `WALL_TIME` mode. In this case, the wall clock time
 for an end-rule means the same thing as the daylight time.
 

 The following are examples of parameters for constructing time zone objects.
 
```

      // Base GMT offset: -8:00
      // DST starts:      at 2:00am in standard time
      //                  on the second Sunday in March
      // DST ends:        at 2:00am in daylight time
      //                  on the first Sunday in November
      // Save:            1 hour
      SimpleTimeZone(-28800000,
                     "America/Los_Angeles",
                     Calendar.MARCH, 8, -Calendar.SUNDAY,
                     7200000,
                     Calendar.NOVEMBER, 1, -Calendar.SUNDAY,
                     7200000,
                     3600000)

      // Base GMT offset: +1:00
      // DST starts:      at 1:00am in UTC time
      //                  on the last Sunday in March
      // DST ends:        at 1:00am in UTC time
      //                  on the last Sunday in October
      // Save:            1 hour
      SimpleTimeZone(3600000,
                     "Europe/Paris",
                     Calendar.MARCH, -1, Calendar.SUNDAY,
                     3600000, SimpleTimeZone.UTC_TIME,
                     Calendar.OCTOBER, -1, Calendar.SUNDAY,
                     3600000, SimpleTimeZone.UTC_TIME,
                     3600000)
 
```

 These parameter rules are also applicable to the set rule methods, such as
 `setStartRule`.

**参见**

- Calendar
- GregorianCalendar
- TimeZone

> *Since 1.1*
