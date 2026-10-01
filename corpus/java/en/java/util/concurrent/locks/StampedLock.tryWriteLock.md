---
id: "java-en-function-stampedlock-trywritelock"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.tryWriteLock"
signature: "public long tryWriteLock()"
title: "StampedLock.tryWriteLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.tryWriteLock

```java
public long tryWriteLock()
```

Exclusively acquires the lock if it is immediately available.

**返回**

- a write stamp that can be used to unlock or convert mode, or zero if the lock is not available
