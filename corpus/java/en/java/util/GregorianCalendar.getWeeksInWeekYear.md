---
id: "java-en-function-gregoriancalendar-getweeksinweekyear"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.getWeeksInWeekYear"
signature: "public int getWeeksInWeekYear()"
title: "GregorianCalendar.getWeeksInWeekYear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.getWeeksInWeekYear

```java
public int getWeeksInWeekYear()
```

Returns the number of weeks in the week year
 represented by this `GregorianCalendar`.

 

For example, if this `GregorianCalendar`'s date is
 December 31, 2008 with the ISO
 8601 compatible setting, this method will return 53 for the
 period: December 29, 2008 to January 3, 2010 while `getActualMaximum` will return
 52 for the period: December 31, 2007 to December 28, 2008.

**返回**

- the number of weeks in the week year.

**参见**

- Calendar#WEEK_OF_YEAR
- #getWeekYear()
- #getActualMaximum(int)

> *Since 1.7*
