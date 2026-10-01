---
id: "java-en-function-reentrantreadwritelock-iswritelocked"
language: "java"
lang: "en"
category: "function"
name: "ReentrantReadWriteLock.isWriteLocked"
signature: "public boolean isWriteLocked()"
title: "ReentrantReadWriteLock.isWriteLocked"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantReadWriteLock.isWriteLocked

```java
public boolean isWriteLocked()
```

Queries if the write lock is held by any thread. This method is
 designed for use in monitoring system state, not for
 synchronization control.

**返回**

- `true` if any thread holds the write lock and `false` otherwise
