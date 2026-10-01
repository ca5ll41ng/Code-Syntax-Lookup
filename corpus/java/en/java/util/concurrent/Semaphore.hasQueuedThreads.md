---
id: "java-en-function-semaphore-hasqueuedthreads"
language: "java"
lang: "en"
category: "function"
name: "Semaphore.hasQueuedThreads"
signature: "public final boolean hasQueuedThreads()"
title: "Semaphore.hasQueuedThreads"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Semaphore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Semaphore.hasQueuedThreads

```java
public final boolean hasQueuedThreads()
```

Queries whether any threads are waiting to acquire. Note that
 because cancellations may occur at any time, a `true`
 return does not guarantee that any other thread will ever
 acquire.  This method is designed primarily for use in
 monitoring of the system state.

**返回**

- `true` if there may be other threads waiting to acquire the lock
