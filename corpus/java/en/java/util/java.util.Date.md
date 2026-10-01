---
id: "java-en-function-java-util-date"
language: "java"
lang: "en"
category: "function"
name: "java.util.Date"
title: "Date"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date

The class `Date` represents a specific instant
 in time, with millisecond precision.
 

 Prior to JDK&nbsp;1.1, the class `Date` had two additional
 functions.  It allowed the interpretation of dates as year, month, day, hour,
 minute, and second values.  It also allowed the formatting and parsing
 of date strings.  Unfortunately, the API for these functions was not
 amenable to internationalization.  As of JDK&nbsp;1.1, the
 `Calendar` class should be used to convert between dates and time
 fields and the `DateFormat` class should be used to format and
 parse date strings.
 The corresponding methods in `Date` are deprecated.
 

 Although the `Date` class is intended to reflect
 coordinated universal time (UTC), it may not do so exactly,
 depending on the host environment of the Java Virtual Machine.
 Nearly all modern operating systems assume that 1&nbsp;day&nbsp;=
 24&nbsp;&times;&nbsp;60&nbsp;&times;&nbsp;60&nbsp;= 86400 seconds
 in all cases. In UTC, however, about once every year or two there
 is an extra second, called a "leap second." The leap
 second is always added as the last second of the day, and always
 on December 31 or June 30. For example, the last minute of the
 year 1995 was 61 seconds long, thanks to an added leap second.
 Most computer clocks are not accurate enough to be able to reflect
 the leap-second distinction.
 

 Some computer standards are defined in terms of Greenwich mean
 time (GMT), which is equivalent to universal time (UT).  GMT is
 the "civil" name for the standard; UT is the
 "scientific" name for the same standard. The
 distinction between UTC and UT is that UTC is based on an atomic
 clock and UT is based on astronomical observations, which for all
 practical purposes is an invisibly fine hair to split. Because the
 earth's rotation is not uniform (it slows down and speeds up
 in complicated ways), UT does not always flow uniformly. Leap
 seconds are introduced as needed into UTC so as to keep UTC within
 0.9 seconds of UT1, which is a version of UT with certain
 corrections applied. There are other time and date systems as
 well; for example, the time scale used by the satellite-based
 global positioning system (GPS) is synchronized to UTC but is
 not adjusted for leap seconds. An interesting source of
 further information is the United States Naval Observatory (USNO):
 
```

     https://www.usno.navy.mil/USNO
 
```

 

 and the material regarding "Systems of Time" at:
 
```

     https://www.usno.navy.mil/USNO/time/master-clock/systems-of-time
 
```

 

 which has descriptions of various different time systems including
 UT, UT1, and UTC.
 

 In all methods of class `Date` that accept or return
 year, month, date, hours, minutes, and seconds values, the
 following representations are used:
 
 
- A year y is represented by the integer
     y&nbsp;`- 1900`.
 
- A month is represented by an integer from 0 to 11; 0 is January,
     1 is February, and so forth; thus 11 is December.
 
- A date (day of month) is represented by an integer from 1 to 31
     in the usual manner.
 
- An hour is represented by an integer from 0 to 23. Thus, the hour
     from midnight to 1 a.m. is hour 0, and the hour from noon to 1
     p.m. is hour 12.
 
- A minute is represented by an integer from 0 to 59 in the usual manner.
 
- A second is represented by an integer from 0 to 61; the values 60 and
     61 occur only for leap seconds and even then only in Java
     implementations that actually track leap seconds correctly. Because
     of the manner in which leap seconds are currently introduced, it is
     extremely unlikely that two leap seconds will occur in the same
     minute, but this specification follows the date and time conventions
     for ISO C.
 

 

 In all cases, arguments given to methods for these purposes need
 not fall within the indicated ranges; for example, a date may be
 specified as January 32 and is interpreted as meaning February 1.

**参见**

- java.text.DateFormat
- java.util.Calendar
- java.util.TimeZone

> *Since 1.0*
