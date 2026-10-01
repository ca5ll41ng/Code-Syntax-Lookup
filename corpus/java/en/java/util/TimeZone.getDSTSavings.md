---
id: "java-en-function-timezone-getdstsavings"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.getDSTSavings"
signature: "public int getDSTSavings()"
title: "TimeZone.getDSTSavings"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.getDSTSavings

```java
public int getDSTSavings()
```

Returns the amount of time to be added to local standard time
 to get local wall clock time.

 

The default implementation returns 3600000 milliseconds
 (i.e., one hour) if a call to `useDaylightTime`
 returns `true`. Otherwise, 0 (zero) is returned.

 

If an underlying `TimeZone` implementation subclass
 supports historical and future Daylight Saving Time schedule
 changes, this method returns the amount of saving time of the
 last known Daylight Saving Time rule that can be a future
 prediction.

 

If the amount of saving time at any given time stamp is
 required, construct a `Calendar` with this `TimeZone` and the time stamp, and call `get(int)
 Calendar.get``(``DST_OFFSET``)`.

**返回**

- the amount of saving time in milliseconds

**参见**

- #inDaylightTime(Date)
- #getOffset(long)
- #getOffset(int,int,int,int,int,int)
- Calendar#ZONE_OFFSET

> *Since 1.4*
