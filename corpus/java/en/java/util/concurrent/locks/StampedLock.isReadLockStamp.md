---
id: "java-en-function-stampedlock-isreadlockstamp"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.isReadLockStamp"
signature: "public static boolean isReadLockStamp(long stamp)"
title: "StampedLock.isReadLockStamp"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.isReadLockStamp

```java
public static boolean isReadLockStamp(long stamp)
```

Tells whether a stamp represents holding a lock non-exclusively.
 This method may be useful in conjunction with
 `tryConvertToReadLock`, for example: 
```
 `long stamp = sl.tryOptimisticRead();
 try {
   ...
   stamp = sl.tryConvertToReadLock(stamp);
   ...
 ` finally {
   if (StampedLock.isReadLockStamp(stamp))
     sl.unlockRead(stamp);
 }}
```

**参数**

- **stamp** — a stamp returned by a previous StampedLock operation

**返回**

- `true` if the stamp was returned by a successful read-lock operation

> *Since 10*
