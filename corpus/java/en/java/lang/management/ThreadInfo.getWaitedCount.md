---
id: "java-en-function-threadinfo-getwaitedcount"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.getWaitedCount"
signature: "public long getWaitedCount()"
title: "ThreadInfo.getWaitedCount"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.getWaitedCount

```java
public long getWaitedCount()
```

Returns the total number of times that
 the thread associated with this `ThreadInfo`
 waited for notification.
 I.e. the number of times that a thread has been
 in the `WAITING WAITING`
 or `TIMED_WAITING TIMED_WAITING` state.

**返回**

- the total number of times that the thread was in the `WAITING` or `TIMED_WAITING` state.
