---
id: "java-en-function-writelock-lock"
language: "java"
lang: "en"
category: "function"
name: "WriteLock.lock"
signature: "public void lock()"
title: "WriteLock.lock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WriteLock.lock

```java
public void lock()
```

Acquires the write lock.

 

Acquires the write lock if neither the read nor write lock
 are held by another thread
 and returns immediately, setting the write lock hold count to
 one.

 

If the current thread already holds the write lock then the
 hold count is incremented by one and the method returns
 immediately.

 

If the lock is held by another thread then the current
 thread becomes disabled for thread scheduling purposes and
 lies dormant until the write lock has been acquired, at which
 time the write lock hold count is set to one.
