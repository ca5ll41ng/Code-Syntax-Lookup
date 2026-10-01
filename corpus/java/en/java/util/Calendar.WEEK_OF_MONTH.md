---
id: "java-en-function-calendar-week_of_month"
language: "java"
lang: "en"
category: "function"
name: "Calendar.WEEK_OF_MONTH"
signature: "public static final int WEEK_OF_MONTH = 4"
title: "Calendar.WEEK_OF_MONTH"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.WEEK_OF_MONTH

```java
public static final int WEEK_OF_MONTH = 4
```

Field number for `get` and `set` indicating the
 week number within the current month.  The first week of the month, as
 defined by `getFirstDayOfWeek()` and
 `getMinimalDaysInFirstWeek()`, has value 1.  Subclasses define
 the value of `WEEK_OF_MONTH` for days before the first week of
 the month.

**参见**

- #getFirstDayOfWeek
- #getMinimalDaysInFirstWeek
