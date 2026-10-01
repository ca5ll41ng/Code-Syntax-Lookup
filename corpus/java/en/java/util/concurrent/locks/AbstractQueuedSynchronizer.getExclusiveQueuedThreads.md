---
id: "java-en-function-abstractqueuedsynchronizer-getexclusivequeuedthreads"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.getExclusiveQueuedThreads"
signature: "public final Collection<Thread> getExclusiveQueuedThreads()"
title: "AbstractQueuedSynchronizer.getExclusiveQueuedThreads"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.getExclusiveQueuedThreads

```java
public final Collection<Thread> getExclusiveQueuedThreads()
```

Returns a collection containing threads that may be waiting to
 acquire in exclusive mode. This has the same properties
 as `getQueuedThreads` except that it only returns
 those threads waiting due to an exclusive acquire.

**返回**

- the collection of threads
