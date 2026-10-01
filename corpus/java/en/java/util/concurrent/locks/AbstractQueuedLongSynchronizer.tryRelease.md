---
id: "java-en-function-abstractqueuedlongsynchronizer-tryrelease"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.tryRelease"
signature: "protected boolean tryRelease(long arg)"
title: "AbstractQueuedLongSynchronizer.tryRelease"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.tryRelease

```java
protected boolean tryRelease(long arg)
```

Attempts to set the state to reflect a release in exclusive
 mode.

 

This method is always invoked by the thread performing release.

 

The default implementation throws
 `UnsupportedOperationException`.

**参数**

- **arg** — the release argument. This value is always the one passed to a release method, or the current state value upon entry to a condition wait.  The value is otherwise uninterpreted and can represent anything you like.

**返回**

- `true` if this object is now in a fully released state, so that any waiting threads may attempt to acquire; and `false` otherwise.

**异常**

- **IllegalMonitorStateException** — if releasing would place this synchronizer in an illegal state. This exception must be thrown in a consistent fashion for synchronization to work correctly.
- **UnsupportedOperationException** — if exclusive mode is not supported
