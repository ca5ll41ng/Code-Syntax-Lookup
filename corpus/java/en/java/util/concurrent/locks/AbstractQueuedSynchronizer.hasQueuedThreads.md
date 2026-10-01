---
id: "java-en-function-abstractqueuedsynchronizer-hasqueuedthreads"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.hasQueuedThreads"
signature: "public final boolean hasQueuedThreads()"
title: "AbstractQueuedSynchronizer.hasQueuedThreads"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.hasQueuedThreads

```java
public final boolean hasQueuedThreads()
```

Queries whether any threads are waiting to acquire. Note that
 because cancellations due to interrupts and timeouts may occur
 at any time, a `true` return does not guarantee that any
 other thread will ever acquire.

**返回**

- `true` if there may be other threads waiting to acquire
