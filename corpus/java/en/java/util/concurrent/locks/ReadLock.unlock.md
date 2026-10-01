---
id: "java-en-function-readlock-unlock"
language: "java"
lang: "en"
category: "function"
name: "ReadLock.unlock"
signature: "public void unlock()"
title: "ReadLock.unlock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReadLock.unlock

```java
public void unlock()
```

Attempts to release this lock.

 

If the number of readers is now zero then the lock
 is made available for write lock attempts. If the current
 thread does not hold this lock then `IllegalMonitorStateException` is thrown.

**异常**

- **IllegalMonitorStateException** — if the current thread does not hold this lock
