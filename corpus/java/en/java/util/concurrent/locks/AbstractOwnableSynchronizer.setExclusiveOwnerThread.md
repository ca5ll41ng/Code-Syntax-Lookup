---
id: "java-en-function-abstractownablesynchronizer-setexclusiveownerthread"
language: "java"
lang: "en"
category: "function"
name: "AbstractOwnableSynchronizer.setExclusiveOwnerThread"
signature: "protected final void setExclusiveOwnerThread(Thread thread)"
title: "AbstractOwnableSynchronizer.setExclusiveOwnerThread"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractOwnableSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractOwnableSynchronizer.setExclusiveOwnerThread

```java
protected final void setExclusiveOwnerThread(Thread thread)
```

Sets the thread that currently owns exclusive access.
 A `null` argument indicates that no thread owns access.
 This method does not otherwise impose any synchronization or
 `volatile` field accesses.

**参数**

- **thread** — the owner thread
