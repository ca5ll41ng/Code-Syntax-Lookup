---
id: "java-en-function-abstractownablesynchronizer-getexclusiveownerthread"
language: "java"
lang: "en"
category: "function"
name: "AbstractOwnableSynchronizer.getExclusiveOwnerThread"
signature: "protected final Thread getExclusiveOwnerThread()"
title: "AbstractOwnableSynchronizer.getExclusiveOwnerThread"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractOwnableSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractOwnableSynchronizer.getExclusiveOwnerThread

```java
protected final Thread getExclusiveOwnerThread()
```

Returns the thread last set by `setExclusiveOwnerThread`,
 or `null` if never set.  This method does not otherwise
 impose any synchronization or `volatile` field accesses.

**返回**

- the owner thread
