---
id: "java-en-function-stampedlock-tryunlockwrite"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.tryUnlockWrite"
signature: "public boolean tryUnlockWrite()"
title: "StampedLock.tryUnlockWrite"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.tryUnlockWrite

```java
public boolean tryUnlockWrite()
```

Releases the write lock if it is held, without requiring a
 stamp value. This method may be useful for recovery after
 errors.

**返回**

- `true` if the lock was held, else false
