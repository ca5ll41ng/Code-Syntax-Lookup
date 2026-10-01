---
id: "java-en-function-stampedlock-islockstamp"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.isLockStamp"
signature: "public static boolean isLockStamp(long stamp)"
title: "StampedLock.isLockStamp"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.isLockStamp

```java
public static boolean isLockStamp(long stamp)
```

Tells whether a stamp represents holding a lock.
 This method may be useful in conjunction with
 `tryConvertToReadLock` and `tryConvertToWriteLock`,
 for example: 
```
 `long stamp = sl.tryOptimisticRead();
 try {
   ...
   stamp = sl.tryConvertToReadLock(stamp);
   ...
   stamp = sl.tryConvertToWriteLock(stamp);
   ...
 ` finally {
   if (StampedLock.isLockStamp(stamp))
     sl.unlock(stamp);
 }}
```

**参数**

- **stamp** — a stamp returned by a previous StampedLock operation

**返回**

- `true` if the stamp was returned by a successful read-lock or write-lock operation

> *Since 10*
