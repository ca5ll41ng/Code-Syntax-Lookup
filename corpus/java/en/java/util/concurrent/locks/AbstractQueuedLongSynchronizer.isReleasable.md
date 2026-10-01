---
id: "java-en-function-abstractqueuedlongsynchronizer-isreleasable"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.isReleasable"
signature: "public final boolean isReleasable()"
title: "AbstractQueuedLongSynchronizer.isReleasable"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.isReleasable

```java
public final boolean isReleasable()
```

Allows Conditions to be used in ForkJoinPools without
 risking fixed pool exhaustion. This is usable only for
 untimed Condition waits, not timed versions.
