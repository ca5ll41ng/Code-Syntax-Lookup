---
id: "java-en-function-calendar-week_of_year"
language: "java"
lang: "en"
category: "function"
name: "Calendar.WEEK_OF_YEAR"
signature: "public static final int WEEK_OF_YEAR = 3"
title: "Calendar.WEEK_OF_YEAR"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.WEEK_OF_YEAR

```java
public static final int WEEK_OF_YEAR = 3
```

Field number for `get` and `set` indicating the
 week number within the current year.  The first week of the year, as
 defined by `getFirstDayOfWeek()` and
 `getMinimalDaysInFirstWeek()`, has value 1.  Subclasses define
 the value of `WEEK_OF_YEAR` for days before the first week of
 the year.

**参见**

- #getFirstDayOfWeek
- #getMinimalDaysInFirstWeek
