---
id: "java-en-function-julianfields-julian_day"
language: "java"
lang: "en"
category: "function"
name: "JulianFields.JULIAN_DAY"
signature: "public static final TemporalField JULIAN_DAY = Field.JULIAN_DAY"
title: "JulianFields.JULIAN_DAY"
directive: "field"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/JulianFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JulianFields.JULIAN_DAY

```java
public static final TemporalField JULIAN_DAY = Field.JULIAN_DAY
```

Julian Day field.
 

 This is an integer-based version of the Julian Day Number.
 Julian Day is a well-known system that represents the count of whole days since day 0,
 which is defined to be January 1, 4713 BCE in the Julian calendar, and -4713-11-24 Gregorian.
 The field  has "JulianDay" as 'name', and 'DAYS' as 'baseUnit'.
 The field always refers to the local date-time, ignoring the offset or zone.
 

 For date-times, 'JULIAN_DAY.getFrom()' assumes the same value from
 midnight until just before the next midnight.
 When 'JULIAN_DAY.adjustInto()' is applied to a date-time, the time of day portion remains unaltered.
 'JULIAN_DAY.adjustInto()' and 'JULIAN_DAY.getFrom()' only apply to `Temporal` objects that
 can be converted into `EPOCH_DAY`.
 An `UnsupportedTemporalTypeException` is thrown for any other type of object.
 

 In the resolving phase of parsing, a date can be created from a Julian Day field.
 In `STRICT strict mode` and `SMART smart mode`
 the Julian Day value is validated against the range of valid values.
 In `LENIENT lenient mode` no validation occurs.

 Astronomical and Scientific Notes
 The standard astronomical definition uses a fraction to indicate the time-of-day,
 where each day is counted from midday to midday. For example,
 a fraction of 0 represents midday, a fraction of 0.25
 represents 18:00, a fraction of 0.5 represents midnight and a fraction
 of 0.75 represents 06:00.
 

 By contrast, this implementation has no fractional part, and counts
 days from midnight to midnight.
 This implementation uses an integer and days starting at midnight.
 The integer value for the Julian Day Number is the astronomical Julian Day value at midday
 of the date in question.
 This amounts to the astronomical Julian Day, rounded to an integer `JDN = floor(JD + 0.5)`.

 
```

  | ISO date          |  Julian Day Number | Astronomical Julian Day |
  | 1970-01-01T00:00  |         2,440,588  |         2,440,587.5     |
  | 1970-01-01T06:00  |         2,440,588  |         2,440,587.75    |
  | 1970-01-01T12:00  |         2,440,588  |         2,440,588.0     |
  | 1970-01-01T18:00  |         2,440,588  |         2,440,588.25    |
  | 1970-01-02T00:00  |         2,440,589  |         2,440,588.5     |
  | 1970-01-02T06:00  |         2,440,589  |         2,440,588.75    |
  | 1970-01-02T12:00  |         2,440,589  |         2,440,589.0     |
 
```

 

 Julian Days are sometimes taken to imply Universal Time or UTC, but this
 implementation always uses the Julian Day number for the local date,
 regardless of the offset or time-zone.
