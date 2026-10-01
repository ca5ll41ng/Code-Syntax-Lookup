---
id: "java-en-function-gregoriancalendar-setweekdate"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.setWeekDate"
signature: "public void setWeekDate(int weekYear, int weekOfYear, int dayOfWeek)"
title: "GregorianCalendar.setWeekDate"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.setWeekDate

```java
public void setWeekDate(int weekYear, int weekOfYear, int dayOfWeek)
```

Sets this `GregorianCalendar` to the date given by the
 date specifiers - `weekYear`,
 `weekOfYear`, and `dayOfWeek`. `weekOfYear`
 follows the `WEEK_OF_YEAR`
 numbering.  The `dayOfWeek` value must be one of the
 `DAY_OF_WEEK DAY_OF_WEEK` values: `SUNDAY SUNDAY` to `SATURDAY SATURDAY`.

 

Note that the numeric day-of-week representation differs from
 the ISO 8601 standard, and that the `weekOfYear`
 numbering is compatible with the standard when `getFirstDayOfWeek()` is `MONDAY` and `getMinimalDaysInFirstWeek()` is 4.

 

Unlike the `set` method, all of the calendar fields
 and the instant of time value are calculated upon return.

 

If `weekOfYear` is out of the valid week-of-year
 range in `weekYear`, the `weekYear`
 and `weekOfYear` values are adjusted in lenient
 mode, or an `IllegalArgumentException` is thrown in
 non-lenient mode.

**参数**

- **weekYear** — the week year
- **weekOfYear** — the week number based on `weekYear`
- **dayOfWeek** — the day of week value: one of the constants for the `DAY_OF_WEEK DAY_OF_WEEK` field: `SUNDAY SUNDAY`, ..., `SATURDAY SATURDAY`.

**异常**

- **IllegalArgumentException** — if any of the given date specifiers is invalid, or if any of the calendar fields are inconsistent with the given date specifiers in non-lenient mode

**参见**

- GregorianCalendar#isWeekDateSupported()
- Calendar#getFirstDayOfWeek()
- Calendar#getMinimalDaysInFirstWeek()

> *Since 1.7*
