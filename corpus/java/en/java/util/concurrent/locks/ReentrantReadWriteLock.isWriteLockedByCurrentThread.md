---
id: "java-en-function-reentrantreadwritelock-iswritelockedbycurrentthread"
language: "java"
lang: "en"
category: "function"
name: "ReentrantReadWriteLock.isWriteLockedByCurrentThread"
signature: "public boolean isWriteLockedByCurrentThread()"
title: "ReentrantReadWriteLock.isWriteLockedByCurrentThread"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantReadWriteLock.isWriteLockedByCurrentThread

```java
public boolean isWriteLockedByCurrentThread()
```

Queries if the write lock is held by the current thread.

**返回**

- `true` if the current thread holds the write lock and `false` otherwise
