---
id: "java-en-function-abstractqueuedsynchronizer-compareandsetstate"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.compareAndSetState"
signature: "protected final boolean compareAndSetState(int expect, int update)"
title: "AbstractQueuedSynchronizer.compareAndSetState"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.compareAndSetState

```java
protected final boolean compareAndSetState(int expect, int update)
```

Atomically sets synchronization state to the given updated
 value if the current state value equals the expected value.
 This operation has memory semantics of a `volatile` read
 and write.

**参数**

- **expect** — the expected value
- **update** — the new value

**返回**

- `true` if successful. False return indicates that the actual value was not equal to the expected value.
