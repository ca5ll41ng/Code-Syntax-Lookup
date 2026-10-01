---
id: "java-en-function-reentrantlock-hasqueuedthread"
language: "java"
lang: "en"
category: "function"
name: "ReentrantLock.hasQueuedThread"
signature: "public final boolean hasQueuedThread(Thread thread)"
title: "ReentrantLock.hasQueuedThread"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock.hasQueuedThread

```java
public final boolean hasQueuedThread(Thread thread)
```

Queries whether the given thread is waiting to acquire this
 lock. Note that because cancellations may occur at any time, a
 `true` return does not guarantee that this thread
 will ever acquire this lock.  This method is designed primarily for use
 in monitoring of the system state.

**参数**

- **thread** — the thread

**返回**

- `true` if the given thread is queued waiting for this lock

**异常**

- **NullPointerException** — if the thread is null
