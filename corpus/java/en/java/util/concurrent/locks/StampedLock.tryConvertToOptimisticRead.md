---
id: "java-en-function-stampedlock-tryconverttooptimisticread"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.tryConvertToOptimisticRead"
signature: "public long tryConvertToOptimisticRead(long stamp)"
title: "StampedLock.tryConvertToOptimisticRead"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.tryConvertToOptimisticRead

```java
public long tryConvertToOptimisticRead(long stamp)
```

If the lock state matches the given stamp then, atomically, if the stamp
 represents holding a lock, releases it and returns an
 observation stamp.  Or, if an optimistic read, returns it if
 validated. This method returns zero in all other cases, and so
 may be useful as a form of "tryUnlock".

**参数**

- **stamp** — a stamp

**返回**

- a valid optimistic read stamp, or zero on failure
