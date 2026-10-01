---
id: "java-en-function-writelock-isheldbycurrentthread"
language: "java"
lang: "en"
category: "function"
name: "WriteLock.isHeldByCurrentThread"
signature: "public boolean isHeldByCurrentThread()"
title: "WriteLock.isHeldByCurrentThread"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WriteLock.isHeldByCurrentThread

```java
public boolean isHeldByCurrentThread()
```

Queries if this write lock is held by the current thread.
 Identical in effect to `isWriteLockedByCurrentThread`.

**返回**

- `true` if the current thread holds this lock and `false` otherwise

> *Since 1.6*
