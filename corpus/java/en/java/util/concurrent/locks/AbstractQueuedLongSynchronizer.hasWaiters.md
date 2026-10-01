---
id: "java-en-function-abstractqueuedlongsynchronizer-haswaiters"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.hasWaiters"
signature: "public final boolean hasWaiters(ConditionObject condition)"
title: "AbstractQueuedLongSynchronizer.hasWaiters"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.hasWaiters

```java
public final boolean hasWaiters(ConditionObject condition)
```

Queries whether any threads are waiting on the given condition
 associated with this synchronizer. Note that because timeouts
 and interrupts may occur at any time, a `true` return
 does not guarantee that a future `signal` will awaken
 any threads.  This method is designed primarily for use in
 monitoring of the system state.

**参数**

- **condition** — the condition

**返回**

- `true` if there are any waiting threads

**异常**

- **IllegalMonitorStateException** — if exclusive synchronization is not held
- **IllegalArgumentException** — if the given condition is not associated with this synchronizer
- **NullPointerException** — if the condition is null
