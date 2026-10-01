---
id: "java-en-function-abstractqueuedsynchronizer-getwaitingthreads"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.getWaitingThreads"
signature: "public final Collection<Thread> getWaitingThreads(ConditionObject condition)"
title: "AbstractQueuedSynchronizer.getWaitingThreads"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.getWaitingThreads

```java
public final Collection<Thread> getWaitingThreads(ConditionObject condition)
```

Returns a collection containing those threads that may be
 waiting on the given condition associated with this
 synchronizer.  Because the actual set of threads may change
 dynamically while constructing this result, the returned
 collection is only a best-effort estimate. The elements of the
 returned collection are in no particular order.

**参数**

- **condition** — the condition

**返回**

- the collection of threads

**异常**

- **IllegalMonitorStateException** — if exclusive synchronization is not held
- **IllegalArgumentException** — if the given condition is not associated with this synchronizer
- **NullPointerException** — if the condition is null
