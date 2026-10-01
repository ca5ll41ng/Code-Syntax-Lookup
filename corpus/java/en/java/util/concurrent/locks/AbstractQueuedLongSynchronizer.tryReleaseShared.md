---
id: "java-en-function-abstractqueuedlongsynchronizer-tryreleaseshared"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.tryReleaseShared"
signature: "protected boolean tryReleaseShared(long arg)"
title: "AbstractQueuedLongSynchronizer.tryReleaseShared"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.tryReleaseShared

```java
protected boolean tryReleaseShared(long arg)
```

Attempts to set the state to reflect a release in shared mode.

 

This method is always invoked by the thread performing release.

 

The default implementation throws
 `UnsupportedOperationException`.

**参数**

- **arg** — the release argument. This value is always the one passed to a release method, or the current state value upon entry to a condition wait.  The value is otherwise uninterpreted and can represent anything you like.

**返回**

- `true` if this release of shared mode may permit a waiting acquire (shared or exclusive) to succeed; and `false` otherwise

**异常**

- **IllegalMonitorStateException** — if releasing would place this synchronizer in an illegal state. This exception must be thrown in a consistent fashion for synchronization to work correctly.
- **UnsupportedOperationException** — if shared mode is not supported
