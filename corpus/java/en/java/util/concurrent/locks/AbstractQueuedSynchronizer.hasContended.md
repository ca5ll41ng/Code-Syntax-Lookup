---
id: "java-en-function-abstractqueuedsynchronizer-hascontended"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.hasContended"
signature: "public final boolean hasContended()"
title: "AbstractQueuedSynchronizer.hasContended"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.hasContended

```java
public final boolean hasContended()
```

Queries whether any threads have ever contended to acquire this
 synchronizer; that is, if an acquire method has ever blocked.

 

In this implementation, this operation returns in
 constant time.

**返回**

- `true` if there has ever been contention
