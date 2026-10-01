---
id: "java-en-function-timezone-observesdaylighttime"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.observesDaylightTime"
signature: "public boolean observesDaylightTime()"
title: "TimeZone.observesDaylightTime"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.observesDaylightTime

```java
public boolean observesDaylightTime()
```

Returns `true` if this `TimeZone` is currently in
 Daylight Saving Time, or if a transition from Standard Time to
 Daylight Saving Time occurs at any future time.

 

The default implementation returns `true` if
 `useDaylightTime()` or `inDaylightTime(new Date())`
 returns `true`.

**返回**

- `true` if this `TimeZone` is currently in Daylight Saving Time, or if a transition from Standard Time to Daylight Saving Time occurs at any future time; `false` otherwise.

**参见**

- #useDaylightTime()
- #inDaylightTime(Date)
- Calendar#DST_OFFSET

> *Since 1.7*
