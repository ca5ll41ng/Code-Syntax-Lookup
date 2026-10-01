---
id: "java-en-function-readlock-trylock"
language: "java"
lang: "en"
category: "function"
name: "ReadLock.tryLock"
signature: "public boolean tryLock()"
title: "ReadLock.tryLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReadLock.tryLock

```java
public boolean tryLock()
```

Acquires the read lock only if the write lock is not held by
 another thread at the time of invocation.

 

Acquires the read lock if the write lock is not held by
 any thread and returns immediately with the value
 `true`. Even when this lock has been set to use a
 fair ordering policy, a call to `tryLock()`
 will immediately acquire the read lock if it is
 available, whether or not other threads are currently
 waiting for the read lock.  This &quot;barging&quot; behavior
 can be useful in certain circumstances, even though it
 breaks fairness. If you want to honor the fairness setting
 for this lock, then use `tryLock(long, TimeUnit)
 tryLock` which is almost equivalent
 (it also detects interruption).

 

If the write lock is held by any thread then
 this method will return immediately with the value
 `false`.

**返回**

- `true` if the read lock was acquired
