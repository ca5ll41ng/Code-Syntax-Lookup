---
id: "java-en-function-julianfields-modified_julian_day"
language: "java"
lang: "en"
category: "function"
name: "JulianFields.MODIFIED_JULIAN_DAY"
signature: "public static final TemporalField MODIFIED_JULIAN_DAY = Field.MODIFIED_JULIAN_DAY"
title: "JulianFields.MODIFIED_JULIAN_DAY"
directive: "field"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/JulianFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JulianFields.MODIFIED_JULIAN_DAY

```java
public static final TemporalField MODIFIED_JULIAN_DAY = Field.MODIFIED_JULIAN_DAY
```

Modified Julian Day field.
 

 This is an integer-based version of the Modified Julian Day Number.
 Modified Julian Day (MJD) is a well-known system that counts days continuously.
 It is defined relative to astronomical Julian Day as  `MJD = JD - 2400000.5`.
 Each Modified Julian Day runs from midnight to midnight.
 The field always refers to the local date-time, ignoring the offset or zone.
 

 For date-times, 'MODIFIED_JULIAN_DAY.getFrom()' assumes the same value from
 midnight until just before the next midnight.
 When 'MODIFIED_JULIAN_DAY.adjustInto()' is applied to a date-time, the time of day portion remains unaltered.
 'MODIFIED_JULIAN_DAY.adjustInto()' and 'MODIFIED_JULIAN_DAY.getFrom()' only apply to `Temporal` objects
 that can be converted into `EPOCH_DAY`.
 An `UnsupportedTemporalTypeException` is thrown for any other type of object.
 

 This implementation is an integer version of MJD with the decimal part rounded to floor.
 

 In the resolving phase of parsing, a date can be created from a Modified Julian Day field.
 In `STRICT strict mode` and `SMART smart mode`
 the Modified Julian Day value is validated against the range of valid values.
 In `LENIENT lenient mode` no validation occurs.

 Astronomical and Scientific Notes
 
```

  | ISO date          | Modified Julian Day |      Decimal MJD |
  | 1970-01-01T00:00  |             40,587  |       40,587.0   |
  | 1970-01-01T06:00  |             40,587  |       40,587.25  |
  | 1970-01-01T12:00  |             40,587  |       40,587.5   |
  | 1970-01-01T18:00  |             40,587  |       40,587.75  |
  | 1970-01-02T00:00  |             40,588  |       40,588.0   |
  | 1970-01-02T06:00  |             40,588  |       40,588.25  |
  | 1970-01-02T12:00  |             40,588  |       40,588.5   |
 
```

 Modified Julian Days are sometimes taken to imply Universal Time or UTC, but this
 implementation always uses the Modified Julian Day for the local date,
 regardless of the offset or time-zone.
