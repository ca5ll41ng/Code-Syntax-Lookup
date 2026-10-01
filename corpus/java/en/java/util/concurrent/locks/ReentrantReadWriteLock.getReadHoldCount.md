---
id: "java-en-function-reentrantreadwritelock-getreadholdcount"
language: "java"
lang: "en"
category: "function"
name: "ReentrantReadWriteLock.getReadHoldCount"
signature: "public int getReadHoldCount()"
title: "ReentrantReadWriteLock.getReadHoldCount"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantReadWriteLock.getReadHoldCount

```java
public int getReadHoldCount()
```

Queries the number of reentrant read holds on this lock by the
 current thread.  A reader thread has a hold on a lock for
 each lock action that is not matched by an unlock action.

**返回**

- the number of holds on the read lock by the current thread, or zero if the read lock is not held by the current thread

> *Since 1.6*
