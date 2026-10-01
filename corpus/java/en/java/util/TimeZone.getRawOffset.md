---
id: "java-en-function-timezone-getrawoffset"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.getRawOffset"
signature: "public abstract int getRawOffset()"
title: "TimeZone.getRawOffset"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.getRawOffset

```java
public abstract int getRawOffset()
```

Returns the amount of time in milliseconds to add to UTC to get
 standard time in this time zone. Because this value is not
 affected by daylight saving time, it is called raw
 offset.
 

 If an underlying `TimeZone` implementation subclass
 supports historical GMT offset changes, the method returns the
 raw offset value of the current date. In Honolulu, for example,
 its raw offset changed from GMT-10:30 to GMT-10:00 in 1947, and
 this method always returns -36000000 milliseconds (i.e., -10
 hours).

**返回**

- the amount of raw offset time in milliseconds to add to UTC.

**参见**

- Calendar#ZONE_OFFSET
