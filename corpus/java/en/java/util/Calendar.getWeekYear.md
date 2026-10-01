---
id: "java-en-function-calendar-getweekyear"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getWeekYear"
signature: "public int getWeekYear()"
title: "Calendar.getWeekYear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getWeekYear

```java
public int getWeekYear()
```

Returns the week year represented by this `Calendar`. The
 week year is in sync with the week cycle. The `getFirstDayOfWeek() first day of the first week` is the first
 day of the week year.

 

The default implementation of this method throws an
 `UnsupportedOperationException`.

**返回**

- the week year of this `Calendar`

**异常**

- **UnsupportedOperationException** — if any week year numbering isn't supported in this `Calendar`.

**参见**

- #isWeekDateSupported()
- #getFirstDayOfWeek()
- #getMinimalDaysInFirstWeek()

> *Since 1.7*
