---
id: "java-en-function-stampedlock-readlockinterruptibly"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.readLockInterruptibly"
signature: "public long readLockInterruptibly() throws InterruptedException"
title: "StampedLock.readLockInterruptibly"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.readLockInterruptibly

```java
public long readLockInterruptibly() throws InterruptedException
```

Non-exclusively acquires the lock, blocking if necessary
 until available or the current thread is interrupted.
 Behavior under interruption matches that specified
 for method `lockInterruptibly`.

**返回**

- a read stamp that can be used to unlock or convert mode

**异常**

- **InterruptedException** — if the current thread is interrupted before acquiring the lock
