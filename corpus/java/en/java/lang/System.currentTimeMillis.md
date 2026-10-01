---
id: "java-en-function-system-currenttimemillis"
language: "java"
lang: "en"
category: "function"
name: "System.currentTimeMillis"
signature: "public static native long currentTimeMillis()"
title: "System.currentTimeMillis"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.currentTimeMillis

```java
public static native long currentTimeMillis()
```

Returns the current time in milliseconds.  Note that
 while the unit of time of the return value is a millisecond,
 the granularity of the value depends on the underlying
 operating system and may be larger.  For example, many
 operating systems measure time in units of tens of
 milliseconds.

 

 See the description of the class `Date` for
 a discussion of slight discrepancies that may arise between
 "computer time" and coordinated universal time (UTC).

**返回**

- the difference, measured in milliseconds, between the current time and midnight, January 1, 1970 UTC.

**参见**

- java.util.Date
