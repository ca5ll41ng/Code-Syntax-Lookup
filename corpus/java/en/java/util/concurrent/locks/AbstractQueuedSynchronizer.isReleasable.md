---
id: "java-en-function-abstractqueuedsynchronizer-isreleasable"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.isReleasable"
signature: "public final boolean isReleasable()"
title: "AbstractQueuedSynchronizer.isReleasable"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.isReleasable

```java
public final boolean isReleasable()
```

Allows Conditions to be used in ForkJoinPools without
 risking fixed pool exhaustion. This is usable only for
 untimed Condition waits, not timed versions.
