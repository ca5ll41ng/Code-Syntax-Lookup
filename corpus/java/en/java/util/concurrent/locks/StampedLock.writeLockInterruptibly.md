---
id: "java-en-function-stampedlock-writelockinterruptibly"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.writeLockInterruptibly"
signature: "public long writeLockInterruptibly() throws InterruptedException"
title: "StampedLock.writeLockInterruptibly"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.writeLockInterruptibly

```java
public long writeLockInterruptibly() throws InterruptedException
```

Exclusively acquires the lock, blocking if necessary
 until available or the current thread is interrupted.
 Behavior under interruption matches that specified
 for method `lockInterruptibly`.

**返回**

- a write stamp that can be used to unlock or convert mode

**异常**

- **InterruptedException** — if the current thread is interrupted before acquiring the lock
