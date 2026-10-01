---
id: "java-en-function-stampedlock-writelock"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.writeLock"
signature: "public long writeLock()"
title: "StampedLock.writeLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.writeLock

```java
public long writeLock()
```

Exclusively acquires the lock, blocking if necessary
 until available.

**返回**

- a write stamp that can be used to unlock or convert mode
