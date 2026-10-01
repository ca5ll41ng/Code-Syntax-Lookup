---
id: "java-en-function-reentrantreadwritelock-getqueuedwriterthreads"
language: "java"
lang: "en"
category: "function"
name: "ReentrantReadWriteLock.getQueuedWriterThreads"
signature: "protected Collection<Thread> getQueuedWriterThreads()"
title: "ReentrantReadWriteLock.getQueuedWriterThreads"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantReadWriteLock.getQueuedWriterThreads

```java
protected Collection<Thread> getQueuedWriterThreads()
```

Returns a collection containing threads that may be waiting to
 acquire the write lock.  Because the actual set of threads may
 change dynamically while constructing this result, the returned
 collection is only a best-effort estimate.  The elements of the
 returned collection are in no particular order.  This method is
 designed to facilitate construction of subclasses that provide
 more extensive lock monitoring facilities.

**返回**

- the collection of threads
