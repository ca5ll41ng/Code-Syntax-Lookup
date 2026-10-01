---
id: "java-en-function-stampedlock-asreadwritelock"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.asReadWriteLock"
signature: "public ReadWriteLock asReadWriteLock()"
title: "StampedLock.asReadWriteLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.asReadWriteLock

```java
public ReadWriteLock asReadWriteLock()
```

Returns a `ReadWriteLock` view of this StampedLock in
 which the `readLock` method is mapped to
 `asReadLock`, and `writeLock` to
 `asWriteLock`.

**返回**

- the lock
