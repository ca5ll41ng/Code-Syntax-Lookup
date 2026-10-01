---
id: "java-en-function-abstractqueuedlongsynchronizer-isqueued"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.isQueued"
signature: "public final boolean isQueued(Thread thread)"
title: "AbstractQueuedLongSynchronizer.isQueued"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.isQueued

```java
public final boolean isQueued(Thread thread)
```

Returns true if the given thread is currently queued.

 

This implementation traverses the queue to determine
 presence of the given thread.

**参数**

- **thread** — the thread

**返回**

- `true` if the given thread is on the queue

**异常**

- **NullPointerException** — if the thread is null
