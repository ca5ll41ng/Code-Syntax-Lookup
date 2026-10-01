---
id: "java-en-function-monitorinfo-getlockedstackdepth"
language: "java"
lang: "en"
category: "function"
name: "MonitorInfo.getLockedStackDepth"
signature: "public int getLockedStackDepth()"
title: "MonitorInfo.getLockedStackDepth"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MonitorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MonitorInfo.getLockedStackDepth

```java
public int getLockedStackDepth()
```

Returns the depth in the stack trace where the object monitor
 was locked.  The depth is the index to the `StackTraceElement`
 array returned in the `getStackTrace` method.

**返回**

- the depth in the stack trace where the object monitor was locked, or a negative number if not available.
