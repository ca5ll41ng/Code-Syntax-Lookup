---
id: "java-en-function-threadinfo-getlockedmonitors"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.getLockedMonitors"
signature: "public MonitorInfo[] getLockedMonitors()"
title: "ThreadInfo.getLockedMonitors"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.getLockedMonitors

```java
public MonitorInfo[] getLockedMonitors()
```

Returns an array of `MonitorInfo` objects, each of which
 represents an object monitor currently locked by the thread
 associated with this `ThreadInfo`.
 If no locked monitor was requested for this thread info or
 no monitor is locked by the thread, this method
 will return a zero-length array.

**返回**

- an array of `MonitorInfo` objects representing the object monitors locked by the thread.

> *Since 1.6*
