---
id: "java-en-function-abstractqueuedlongsynchronizer-getsharedqueuedthreads"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.getSharedQueuedThreads"
signature: "public final Collection<Thread> getSharedQueuedThreads()"
title: "AbstractQueuedLongSynchronizer.getSharedQueuedThreads"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.getSharedQueuedThreads

```java
public final Collection<Thread> getSharedQueuedThreads()
```

Returns a collection containing threads that may be waiting to
 acquire in shared mode. This has the same properties
 as `getQueuedThreads` except that it only returns
 those threads waiting due to a shared acquire.

**返回**

- the collection of threads
