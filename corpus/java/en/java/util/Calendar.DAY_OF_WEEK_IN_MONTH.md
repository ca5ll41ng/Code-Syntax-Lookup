---
id: "java-en-function-calendar-day_of_week_in_month"
language: "java"
lang: "en"
category: "function"
name: "Calendar.DAY_OF_WEEK_IN_MONTH"
signature: "public static final int DAY_OF_WEEK_IN_MONTH = 8"
title: "Calendar.DAY_OF_WEEK_IN_MONTH"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.DAY_OF_WEEK_IN_MONTH

```java
public static final int DAY_OF_WEEK_IN_MONTH = 8
```

Field number for `get` and `set` indicating the
 ordinal number of the day of the week within the current month. Together
 with the `DAY_OF_WEEK` field, this uniquely specifies a day
 within a month.  Unlike `WEEK_OF_MONTH` and
 `WEEK_OF_YEAR`, this field's value does not depend on
 `getFirstDayOfWeek()` or
 `getMinimalDaysInFirstWeek()`.  `DAY_OF_MONTH 1`
 through `7` always correspond to DAY_OF_WEEK_IN_MONTH
 1; `8` through `14` correspond to
 `DAY_OF_WEEK_IN_MONTH 2`, and so on.
 `DAY_OF_WEEK_IN_MONTH 0` indicates the week before
 `DAY_OF_WEEK_IN_MONTH 1`.  Negative values count back from the
 end of the month, so the last Sunday of a month is specified as
 `DAY_OF_WEEK = SUNDAY, DAY_OF_WEEK_IN_MONTH = -1`.  Because
 negative values count backward they will usually be aligned differently
 within the month than positive values.  For example, if a month has 31
 days, `DAY_OF_WEEK_IN_MONTH -1` will overlap
 `DAY_OF_WEEK_IN_MONTH 5` and the end of `4`.

**参见**

- #DAY_OF_WEEK
- #WEEK_OF_MONTH
