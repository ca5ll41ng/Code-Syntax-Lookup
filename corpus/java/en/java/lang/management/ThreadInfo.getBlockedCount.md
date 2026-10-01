---
id: "java-en-function-threadinfo-getblockedcount"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.getBlockedCount"
signature: "public long getBlockedCount()"
title: "ThreadInfo.getBlockedCount"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.getBlockedCount

```java
public long getBlockedCount()
```

Returns the total number of times that
 the thread associated with this `ThreadInfo`
 blocked to enter or reenter a monitor.
 I.e. the number of times a thread has been in the
 `BLOCKED BLOCKED` state.

**返回**

- the total number of times that the thread entered the `BLOCKED` state.
