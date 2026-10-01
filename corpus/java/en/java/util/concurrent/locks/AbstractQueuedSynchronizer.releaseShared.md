---
id: "java-en-function-abstractqueuedsynchronizer-releaseshared"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.releaseShared"
signature: "public final boolean releaseShared(int arg)"
title: "AbstractQueuedSynchronizer.releaseShared"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.releaseShared

```java
public final boolean releaseShared(int arg)
```

Releases in shared mode.  Implemented by unblocking one or more
 threads if `tryReleaseShared` returns true.

**参数**

- **arg** — the release argument.  This value is conveyed to `tryReleaseShared` but is otherwise uninterpreted and can represent anything you like.

**返回**

- the value returned from `tryReleaseShared`
