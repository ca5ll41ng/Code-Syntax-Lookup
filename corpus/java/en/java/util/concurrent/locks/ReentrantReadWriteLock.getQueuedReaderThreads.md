---
id: "java-en-function-reentrantreadwritelock-getqueuedreaderthreads"
language: "java"
lang: "en"
category: "function"
name: "ReentrantReadWriteLock.getQueuedReaderThreads"
signature: "protected Collection<Thread> getQueuedReaderThreads()"
title: "ReentrantReadWriteLock.getQueuedReaderThreads"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantReadWriteLock.getQueuedReaderThreads

```java
protected Collection<Thread> getQueuedReaderThreads()
```

Returns a collection containing threads that may be waiting to
 acquire the read lock.  Because the actual set of threads may
 change dynamically while constructing this result, the returned
 collection is only a best-effort estimate.  The elements of the
 returned collection are in no particular order.  This method is
 designed to facilitate construction of subclasses that provide
 more extensive lock monitoring facilities.

**返回**

- the collection of threads
