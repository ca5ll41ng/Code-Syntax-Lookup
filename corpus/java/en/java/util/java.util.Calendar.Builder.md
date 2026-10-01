---
id: "java-en-function-java-util-calendar-builder"
language: "java"
lang: "en"
category: "function"
name: "java.util.Calendar.Builder"
title: "Builder"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder

`Calendar.Builder` is used for creating a `Calendar` from
 various date-time parameters.

 

There are two ways to set a `Calendar` to a date-time value. One
 is to set the instant parameter to a millisecond offset from the Epoch. The other is to set individual
 field parameters, such as `YEAR YEAR`, to their desired
 values. These two ways can't be mixed. Trying to set both the instant and
 individual fields will cause an `IllegalStateException` to be
 thrown. However, it is permitted to override previous values of the
 instant or field parameters.

 

If no enough field parameters are given for determining date and/or
 time, calendar specific default values are used when building a
 `Calendar`. For example, if the `YEAR YEAR` value
 isn't given for the Gregorian calendar, 1970 will be used. If there are
 any conflicts among field parameters, the  resolution rules are applied.
 Therefore, the order of field setting matters.

 

In addition to the date-time parameters,
 the `setLocale(Locale) locale`,
 `setTimeZone(TimeZone) time zone`,
 `setWeekDefinition(int, int) week definition`, and
 `setLenient(boolean) leniency mode` parameters can be set.

 

**Examples**
 

The following are sample usages. Sample code assumes that the
 `Calendar` constants are statically imported.

 

The following code produces a `Calendar` with date 2012-12-31
 (Gregorian) because Monday is the first day of a week with the  ISO 8601
 compatible week parameters.
 
```

   Calendar cal = new Calendar.Builder().setCalendarType("iso8601")
                        .setWeekDate(2013, 1, MONDAY).build();
```

 

The following code produces a Japanese `Calendar` with date
 1989-01-08 (Gregorian), assuming that the default `ERA ERA`
 is Heisei that started on that day.
 
```

   Calendar cal = new Calendar.Builder().setCalendarType("japanese")
                        .setFields(YEAR, 1, DAY_OF_YEAR, 1).build();
```

**参见**

- Calendar#getInstance(TimeZone, Locale)
- Calendar#fields

> *Since 1.8*
