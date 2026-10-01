---
id: "java-en-function-calendar-clear"
language: "java"
lang: "en"
category: "function"
name: "Calendar.clear"
signature: "public final void clear()"
title: "Calendar.clear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.clear

```java
public final void clear()
```

Sets all the calendar field values and the time value
 (millisecond offset from the Epoch) of
 this `Calendar` undefined. This means that `isSet` will return `false` for all the
 calendar fields, and the date and time calculations will treat
 the fields as if they had never been set. A
 `Calendar` implementation class may use its specific
 default field values for date/time calculations. For example,
 `GregorianCalendar` uses 1970 if the
 `YEAR` field value is undefined.

**参见**

- #clear(int)
