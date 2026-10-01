---
id: "java-en-function-abstractqueuedlongsynchronizer-getstate"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.getState"
signature: "protected final long getState()"
title: "AbstractQueuedLongSynchronizer.getState"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.getState

```java
protected final long getState()
```

Returns the current value of synchronization state.
 This operation has memory semantics of a `volatile` read.

**返回**

- current state value
