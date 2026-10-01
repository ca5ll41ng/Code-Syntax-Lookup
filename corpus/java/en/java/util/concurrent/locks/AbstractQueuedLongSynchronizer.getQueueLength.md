---
id: "java-en-function-abstractqueuedlongsynchronizer-getqueuelength"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.getQueueLength"
signature: "public final int getQueueLength()"
title: "AbstractQueuedLongSynchronizer.getQueueLength"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.getQueueLength

```java
public final int getQueueLength()
```

Returns an estimate of the number of threads waiting to
 acquire.  The value is only an estimate because the number of
 threads may change dynamically while this method traverses
 internal data structures.  This method is designed for use in
 monitoring system state, not for synchronization control.

**返回**

- the estimated number of threads waiting to acquire
