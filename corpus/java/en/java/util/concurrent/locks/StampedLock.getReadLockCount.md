---
id: "java-en-function-stampedlock-getreadlockcount"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.getReadLockCount"
signature: "public int getReadLockCount()"
title: "StampedLock.getReadLockCount"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.getReadLockCount

```java
public int getReadLockCount()
```

Queries the number of read locks held for this lock. This
 method is designed for use in monitoring system state, not for
 synchronization control.

**返回**

- the number of read locks held
