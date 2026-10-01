---
id: "java-en-function-calendar-roll"
language: "java"
lang: "en"
category: "function"
name: "Calendar.roll"
signature: "public abstract void roll(int field, boolean up)"
title: "Calendar.roll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.roll

```java
public abstract void roll(int field, boolean up)
```

Adds or subtracts (up/down) a single unit of time on the given time
 field without changing larger fields. For example, to roll the current
 date up by one day, you can achieve it by calling:
 

roll(Calendar.DATE, true).
 When rolling on the year or Calendar.YEAR field, it will roll the year
 value in the range between 1 and the value returned by calling
 `getMaximum(Calendar.YEAR)`.
 When rolling on the month or Calendar.MONTH field, other fields like
 date might conflict and, need to be changed. For instance,
 rolling the month on the date 01/31/96 will result in 02/29/96.
 When rolling on the hour-in-day or Calendar.HOUR_OF_DAY field, it will
 roll the hour value in the range between 0 and 23, which is zero-based.

**参数**

- **field** — the time field.
- **up** — indicates if the value of the specified time field is to be rolled up or rolled down. Use true if rolling up, false otherwise.

**异常**

- **IllegalArgumentException** — if this `Calendar` is non-lenient and any of the calendar fields have invalid values or if `field` is `ZONE_OFFSET`, `DST_OFFSET`, or unknown.

**参见**

- Calendar#add(int,int)
- Calendar#set(int,int)
