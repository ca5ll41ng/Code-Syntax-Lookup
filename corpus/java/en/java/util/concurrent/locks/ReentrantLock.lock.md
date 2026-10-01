---
id: "java-en-function-reentrantlock-lock"
language: "java"
lang: "en"
category: "function"
name: "ReentrantLock.lock"
signature: "public void lock()"
title: "ReentrantLock.lock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock.lock

```java
public void lock()
```

Acquires the lock.

 

Acquires the lock if it is not held by another thread and returns
 immediately, setting the lock hold count to one.

 

If the current thread already holds the lock then the hold
 count is incremented by one and the method returns immediately.

 

If the lock is held by another thread then the
 current thread becomes disabled for thread scheduling
 purposes and lies dormant until the lock has been acquired,
 at which time the lock hold count is set to one.
