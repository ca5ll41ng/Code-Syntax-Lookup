---
id: "java-en-function-timezone-getoffset"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.getOffset"
signature: "public abstract int getOffset(int era, int year, int month, int day, int dayOfWeek, int milliseconds)"
title: "TimeZone.getOffset"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.getOffset

```java
public abstract int getOffset(int era, int year, int month, int day, int dayOfWeek, int milliseconds)
```

Gets the time zone offset, for current date, modified in case of
 daylight savings. This is the offset to add to UTC to get local time.
 

 This method returns a historically correct offset if an
 underlying `TimeZone` implementation subclass
 supports historical Daylight Saving Time schedule and GMT
 offset changes.

**参数**

- **era** — the era of the given date.
- **year** — the year in the given date.
- **month** — the month in the given date. Month is 0-based. e.g., 0 for January.
- **day** — the day-in-month of the given date.
- **dayOfWeek** — the day-of-week of the given date.
- **milliseconds** — the milliseconds in day in standard local time.

**返回**

- the offset in milliseconds to add to GMT to get local time.

**参见**

- Calendar#ZONE_OFFSET
- Calendar#DST_OFFSET
