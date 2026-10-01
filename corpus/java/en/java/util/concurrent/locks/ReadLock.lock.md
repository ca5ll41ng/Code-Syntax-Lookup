---
id: "java-en-function-readlock-lock"
language: "java"
lang: "en"
category: "function"
name: "ReadLock.lock"
signature: "public void lock()"
title: "ReadLock.lock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReadLock.lock

```java
public void lock()
```

Acquires the read lock.

 

Acquires the read lock if the write lock is not held by
 any thread and returns immediately.

 

If the write lock is held by any thread or the fairness
 policy prohibits acquisition of the read lock at this time,
 then the current thread becomes disabled for thread
 scheduling purposes and lies dormant until the read lock
 has been acquired.
