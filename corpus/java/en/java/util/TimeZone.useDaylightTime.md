---
id: "java-en-function-timezone-usedaylighttime"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.useDaylightTime"
signature: "public abstract boolean useDaylightTime()"
title: "TimeZone.useDaylightTime"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.useDaylightTime

```java
public abstract boolean useDaylightTime()
```

Queries if this `TimeZone` uses Daylight Saving Time.

 

If an underlying `TimeZone` implementation subclass
 supports historical and future Daylight Saving Time schedule
 changes, this method refers to the last known Daylight Saving Time
 rule that can be a future prediction and may not be the same as
 the current rule. Consider calling `observesDaylightTime`
 if the current rule should also be taken into account.

**返回**

- `true` if this `TimeZone` uses Daylight Saving Time, `false`, otherwise.

**参见**

- #inDaylightTime(Date)
- Calendar#DST_OFFSET
