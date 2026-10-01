---
id: "java-en-function-stampedlock-tryconverttoreadlock"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.tryConvertToReadLock"
signature: "public long tryConvertToReadLock(long stamp)"
title: "StampedLock.tryConvertToReadLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.tryConvertToReadLock

```java
public long tryConvertToReadLock(long stamp)
```

If the lock state matches the given stamp, atomically performs one of
 the following actions. If the stamp represents holding a write
 lock, releases it and obtains a read lock.  Or, if a read lock,
 returns it. Or, if an optimistic read, acquires a read lock and
 returns a read stamp only if immediately available. This method
 returns zero in all other cases.

**参数**

- **stamp** — a stamp

**返回**

- a valid read stamp, or zero on failure
