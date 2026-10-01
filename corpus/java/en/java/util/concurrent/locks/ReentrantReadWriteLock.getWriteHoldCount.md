---
id: "java-en-function-reentrantreadwritelock-getwriteholdcount"
language: "java"
lang: "en"
category: "function"
name: "ReentrantReadWriteLock.getWriteHoldCount"
signature: "public int getWriteHoldCount()"
title: "ReentrantReadWriteLock.getWriteHoldCount"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantReadWriteLock.getWriteHoldCount

```java
public int getWriteHoldCount()
```

Queries the number of reentrant write holds on this lock by the
 current thread.  A writer thread has a hold on a lock for
 each lock action that is not matched by an unlock action.

**返回**

- the number of holds on the write lock by the current thread, or zero if the write lock is not held by the current thread
