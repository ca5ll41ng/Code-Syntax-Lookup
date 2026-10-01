---
id: "java-en-function-reentrantlock-getwaitingthreads"
language: "java"
lang: "en"
category: "function"
name: "ReentrantLock.getWaitingThreads"
signature: "protected Collection<Thread> getWaitingThreads(Condition condition)"
title: "ReentrantLock.getWaitingThreads"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock.getWaitingThreads

```java
protected Collection<Thread> getWaitingThreads(Condition condition)
```

Returns a collection containing those threads that may be
 waiting on the given condition associated with this lock.
 Because the actual set of threads may change dynamically while
 constructing this result, the returned collection is only a
 best-effort estimate. The elements of the returned collection
 are in no particular order.  This method is designed to
 facilitate construction of subclasses that provide more
 extensive condition monitoring facilities.

**参数**

- **condition** — the condition

**返回**

- the collection of threads

**异常**

- **IllegalMonitorStateException** — if this lock is not held
- **IllegalArgumentException** — if the given condition is not associated with this lock
- **NullPointerException** — if the condition is null
