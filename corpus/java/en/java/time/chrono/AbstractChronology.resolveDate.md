---
id: "java-en-function-abstractchronology-resolvedate"
language: "java"
lang: "en"
category: "function"
name: "AbstractChronology.resolveDate"
signature: "public ChronoLocalDate resolveDate(Map<TemporalField, Long> fieldValues, ResolverStyle resolverStyle)"
title: "AbstractChronology.resolveDate"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/AbstractChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractChronology.resolveDate

```java
public ChronoLocalDate resolveDate(Map<TemporalField, Long> fieldValues, ResolverStyle resolverStyle)
```

Resolves parsed `ChronoField` values into a date during parsing.
 

 Most `TemporalField` implementations are resolved using the
 resolve method on the field. By contrast, the `ChronoField` class
 defines fields that only have meaning relative to the chronology.
 As such, `ChronoField` date fields are resolved here in the
 context of a specific chronology.
 

 `ChronoField` instances are resolved by this method, which may
 be overridden in subclasses.
 
 
- `EPOCH_DAY` - If present, this is converted to a date and
  all other date fields are then cross-checked against the date.
 
- `PROLEPTIC_MONTH` - If present, then it is split into the
  `YEAR` and `MONTH_OF_YEAR`. If the mode is strict or smart
  then the field is validated.
 
- `YEAR_OF_ERA` and `ERA` - If both are present, then they
  are combined to form a `YEAR`. In lenient mode, the `YEAR_OF_ERA`
  range is not validated, in smart and strict mode it is. The `ERA` is
  validated for range in all three modes. If only the `YEAR_OF_ERA` is
  present, and the mode is smart or lenient, then the last available era
  is assumed. In strict mode, no era is assumed and the `YEAR_OF_ERA` is
  left untouched. If only the `ERA` is present, then it is left untouched.
 
- `YEAR`, `MONTH_OF_YEAR` and `DAY_OF_MONTH` -
  If all three are present, then they are combined to form a date.
  In all three modes, the `YEAR` is validated.
  If the mode is smart or strict, then the month and day are validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the first month in the requested year,
  then adding the difference in months, then the difference in days.
  If the mode is smart, and the day-of-month is greater than the maximum for
  the year-month, then the day-of-month is adjusted to the last day-of-month.
  If the mode is strict, then the three fields must form a valid date.
 
- `YEAR` and `DAY_OF_YEAR` -
  If both are present, then they are combined to form a date.
  In all three modes, the `YEAR` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the requested year, then adding
  the difference in days.
  If the mode is smart or strict, then the two fields must form a valid date.
 
- `YEAR`, `MONTH_OF_YEAR`, `ALIGNED_WEEK_OF_MONTH` and
  `ALIGNED_DAY_OF_WEEK_IN_MONTH` -
  If all four are present, then they are combined to form a date.
  In all three modes, the `YEAR` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the first month in the requested year, then adding
  the difference in months, then the difference in weeks, then in days.
  If the mode is smart or strict, then the all four fields are validated to
  their outer ranges. The date is then combined in a manner equivalent to
  creating a date on the first day of the requested year and month, then adding
  the amount in weeks and days to reach their values. If the mode is strict,
  the date is additionally validated to check that the day and week adjustment
  did not change the month.
 
- `YEAR`, `MONTH_OF_YEAR`, `ALIGNED_WEEK_OF_MONTH` and
  `DAY_OF_WEEK` - If all four are present, then they are combined to
  form a date. The approach is the same as described above for
  years, months and weeks in `ALIGNED_DAY_OF_WEEK_IN_MONTH`.
  The day-of-week is adjusted as the next or same matching day-of-week once
  the years, months and weeks have been handled.
 
- `YEAR`, `ALIGNED_WEEK_OF_YEAR` and `ALIGNED_DAY_OF_WEEK_IN_YEAR` -
  If all three are present, then they are combined to form a date.
  In all three modes, the `YEAR` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the requested year, then adding
  the difference in weeks, then in days.
  If the mode is smart or strict, then the all three fields are validated to
  their outer ranges. The date is then combined in a manner equivalent to
  creating a date on the first day of the requested year, then adding
  the amount in weeks and days to reach their values. If the mode is strict,
  the date is additionally validated to check that the day and week adjustment
  did not change the year.
 
- `YEAR`, `ALIGNED_WEEK_OF_YEAR` and `DAY_OF_WEEK` -
  If all three are present, then they are combined to form a date.
  The approach is the same as described above for years and weeks in
  `ALIGNED_DAY_OF_WEEK_IN_YEAR`. The day-of-week is adjusted as the
  next or same matching day-of-week once the years and weeks have been handled.
 

 

 The default implementation is suitable for most calendar systems.
 If `YEAR_OF_ERA` is found without an `ERA`
 then the last era in `eras` is used.
 The implementation assumes a 7 day week, that the first day-of-month
 has the value 1, that first day-of-year has the value 1, and that the
 first of the month and year always exists.

**参数**

- **fieldValues** — the map of fields to values, which can be updated, not null
- **resolverStyle** — the requested type of resolve, not null

**返回**

- the resolved date, null if insufficient information to create a date

**异常**

- **java.time.DateTimeException** — if the date cannot be resolved, typically because of a conflict in the input data
