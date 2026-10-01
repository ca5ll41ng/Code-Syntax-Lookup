---
id: "java-en-function-simpletimezone-getoffset"
language: "java"
lang: "en"
category: "function"
name: "SimpleTimeZone.getOffset"
signature: "public int getOffset(long date)"
title: "SimpleTimeZone.getOffset"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SimpleTimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleTimeZone.getOffset

```java
public int getOffset(long date)
```

Returns the offset of this time zone from UTC at the given
 time. If daylight saving time is in effect at the given time,
 the offset value is adjusted with the amount of daylight
 saving.

**参数**

- **date** — the time at which the time zone offset is found

**返回**

- the amount of time in milliseconds to add to UTC to get local time.

> *Since 1.4*
