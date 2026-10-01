---
id: "java-en-function-abstractqueuedsynchronizer-getfirstqueuedthread"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.getFirstQueuedThread"
signature: "public final Thread getFirstQueuedThread()"
title: "AbstractQueuedSynchronizer.getFirstQueuedThread"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.getFirstQueuedThread

```java
public final Thread getFirstQueuedThread()
```

Returns the first (longest-waiting) thread in the queue, or
 `null` if no threads are currently queued.

 

In this implementation, this operation normally returns in
 constant time, but may iterate upon contention if other threads are
 concurrently modifying the queue.

**返回**

- the first (longest-waiting) thread in the queue, or `null` if no threads are currently queued
