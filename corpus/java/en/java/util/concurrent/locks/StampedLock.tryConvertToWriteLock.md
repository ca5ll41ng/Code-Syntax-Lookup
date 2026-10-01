---
id: "java-en-function-stampedlock-tryconverttowritelock"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.tryConvertToWriteLock"
signature: "public long tryConvertToWriteLock(long stamp)"
title: "StampedLock.tryConvertToWriteLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.tryConvertToWriteLock

```java
public long tryConvertToWriteLock(long stamp)
```

If the lock state matches the given stamp, atomically performs one of
 the following actions. If the stamp represents holding a write
 lock, returns it.  Or, if a read lock, if the write lock is
 available, releases the read lock and returns a write stamp.
 Or, if an optimistic read, returns a write stamp only if
 immediately available. This method returns zero in all other
 cases.

**参数**

- **stamp** — a stamp

**返回**

- a valid write stamp, or zero on failure
