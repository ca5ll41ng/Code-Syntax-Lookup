---
id: "java-en-function-abstractqueuedsynchronizer-setstate"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.setState"
signature: "protected final void setState(int newState)"
title: "AbstractQueuedSynchronizer.setState"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.setState

```java
protected final void setState(int newState)
```

Sets the value of synchronization state.
 This operation has memory semantics of a `volatile` write.

**参数**

- **newState** — the new state value
