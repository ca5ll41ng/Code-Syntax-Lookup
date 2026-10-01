---
id: "java-en-function-stampedlock-iswritelockstamp"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.isWriteLockStamp"
signature: "public static boolean isWriteLockStamp(long stamp)"
title: "StampedLock.isWriteLockStamp"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.isWriteLockStamp

```java
public static boolean isWriteLockStamp(long stamp)
```

Tells whether a stamp represents holding a lock exclusively.
 This method may be useful in conjunction with
 `tryConvertToWriteLock`, for example: 
```
 `long stamp = sl.tryOptimisticRead();
 try {
   ...
   stamp = sl.tryConvertToWriteLock(stamp);
   ...
 ` finally {
   if (StampedLock.isWriteLockStamp(stamp))
     sl.unlockWrite(stamp);
 }}
```

**参数**

- **stamp** — a stamp returned by a previous StampedLock operation

**返回**

- `true` if the stamp was returned by a successful write-lock operation

> *Since 10*
