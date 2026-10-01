---
id: "java-en-function-reentrantlock-unlock"
language: "java"
lang: "en"
category: "function"
name: "ReentrantLock.unlock"
signature: "public void unlock()"
title: "ReentrantLock.unlock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock.unlock

```java
public void unlock()
```

Attempts to release this lock.

 

If the current thread is the holder of this lock then the hold
 count is decremented.  If the hold count is now zero then the lock
 is released.  If the current thread is not the holder of this
 lock then `IllegalMonitorStateException` is thrown.

**异常**

- **IllegalMonitorStateException** — if the current thread does not hold this lock
