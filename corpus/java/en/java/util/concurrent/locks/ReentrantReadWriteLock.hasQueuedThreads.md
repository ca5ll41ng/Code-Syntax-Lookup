---
id: "java-en-function-reentrantreadwritelock-hasqueuedthreads"
language: "java"
lang: "en"
category: "function"
name: "ReentrantReadWriteLock.hasQueuedThreads"
signature: "public final boolean hasQueuedThreads()"
title: "ReentrantReadWriteLock.hasQueuedThreads"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantReadWriteLock.hasQueuedThreads

```java
public final boolean hasQueuedThreads()
```

Queries whether any threads are waiting to acquire the read or
 write lock. Note that because cancellations may occur at any
 time, a `true` return does not guarantee that any other
 thread will ever acquire a lock.  This method is designed
 primarily for use in monitoring of the system state.

**返回**

- `true` if there may be other threads waiting to acquire the lock
