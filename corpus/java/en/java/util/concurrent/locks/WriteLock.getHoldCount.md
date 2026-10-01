---
id: "java-en-function-writelock-getholdcount"
language: "java"
lang: "en"
category: "function"
name: "WriteLock.getHoldCount"
signature: "public int getHoldCount()"
title: "WriteLock.getHoldCount"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WriteLock.getHoldCount

```java
public int getHoldCount()
```

Queries the number of holds on this write lock by the current
 thread.  A thread has a hold on a lock for each lock action
 that is not matched by an unlock action.  Identical in effect
 to `getWriteHoldCount`.

**返回**

- the number of holds on this lock by the current thread, or zero if this lock is not held by the current thread

> *Since 1.6*
