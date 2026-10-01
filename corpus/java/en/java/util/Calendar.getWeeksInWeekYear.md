---
id: "java-en-function-calendar-getweeksinweekyear"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getWeeksInWeekYear"
signature: "public int getWeeksInWeekYear()"
title: "Calendar.getWeeksInWeekYear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getWeeksInWeekYear

```java
public int getWeeksInWeekYear()
```

Returns the number of weeks in the week year represented by this
 `Calendar`.

 

The default implementation of this method throws an
 `UnsupportedOperationException`.

**返回**

- the number of weeks in the week year.

**异常**

- **UnsupportedOperationException** — if any week year numbering isn't supported in this `Calendar`.

**参见**

- #WEEK_OF_YEAR
- #isWeekDateSupported()
- #getWeekYear()
- #getActualMaximum(int)

> *Since 1.7*
