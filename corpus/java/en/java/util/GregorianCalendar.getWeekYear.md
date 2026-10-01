---
id: "java-en-function-gregoriancalendar-getweekyear"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.getWeekYear"
signature: "public int getWeekYear()"
title: "GregorianCalendar.getWeekYear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.getWeekYear

```java
public int getWeekYear()
```

Returns the week year represented by this
 `GregorianCalendar`. The dates in the weeks between 1 and the
 maximum week number of the week year have the same week year value
 that may be one year before or after the `YEAR YEAR`
 (calendar year) value.

 

This method calls `complete` before
 calculating the week year.

**返回**

- the week year represented by this `GregorianCalendar`. If the `ERA ERA` value is `BC`, the year is represented by 0 or a negative number: BC 1 is 0, BC 2 is -1, BC 3 is -2, and so on.

**异常**

- **IllegalArgumentException** — if any of the calendar fields is invalid in non-lenient mode.

**参见**

- #isWeekDateSupported()
- #getWeeksInWeekYear()
- Calendar#getFirstDayOfWeek()
- Calendar#getMinimalDaysInFirstWeek()

> *Since 1.7*
