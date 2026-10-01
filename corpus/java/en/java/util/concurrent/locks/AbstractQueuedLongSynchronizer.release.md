---
id: "java-en-function-abstractqueuedlongsynchronizer-release"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.release"
signature: "public final boolean release(long arg)"
title: "AbstractQueuedLongSynchronizer.release"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.release

```java
public final boolean release(long arg)
```

Releases in exclusive mode.  Implemented by unblocking one or
 more threads if `tryRelease` returns true.
 This method can be used to implement method `unlock`.

**参数**

- **arg** — the release argument.  This value is conveyed to `tryRelease` but is otherwise uninterpreted and can represent anything you like.

**返回**

- the value returned from `tryRelease`
