---
id: "java-en-function-abstractqueuedlongsynchronizer-setstate"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.setState"
signature: "protected final void setState(long newState)"
title: "AbstractQueuedLongSynchronizer.setState"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.setState

```java
protected final void setState(long newState)
```

Sets the value of synchronization state.
 This operation has memory semantics of a `volatile` write.

**参数**

- **newState** — the new state value
