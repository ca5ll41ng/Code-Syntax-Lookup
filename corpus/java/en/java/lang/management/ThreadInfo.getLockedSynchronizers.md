---
id: "java-en-function-threadinfo-getlockedsynchronizers"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.getLockedSynchronizers"
signature: "public LockInfo[] getLockedSynchronizers()"
title: "ThreadInfo.getLockedSynchronizers"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.getLockedSynchronizers

```java
public LockInfo[] getLockedSynchronizers()
```

Returns an array of `LockInfo` objects, each of which
 represents an ownable
 synchronizer currently locked by the thread associated with
 this `ThreadInfo`.  If no locked synchronizer was
 requested for this thread info or no synchronizer is locked by
 the thread, this method will return a zero-length array.

**返回**

- an array of `LockInfo` objects representing the ownable synchronizers locked by the thread.

> *Since 1.6*
