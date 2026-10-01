---
id: "java-en-function-reentrantlock-trylock"
language: "java"
lang: "en"
category: "function"
name: "ReentrantLock.tryLock"
signature: "public boolean tryLock()"
title: "ReentrantLock.tryLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock.tryLock

```java
public boolean tryLock()
```

Acquires the lock only if it is not held by another thread at the time
 of invocation.

 

Acquires the lock if it is not held by another thread and
 returns immediately with the value `true`, setting the
 lock hold count to one. Even when this lock has been set to use a
 fair ordering policy, a call to `tryLock()` will
 immediately acquire the lock if it is available, whether or not
 other threads are currently waiting for the lock.
 This &quot;barging&quot; behavior can be useful in certain
 circumstances, even though it breaks fairness. If you want to honor
 the fairness setting for this lock, then use
 `tryLock`
 which is almost equivalent (it also detects interruption).

 

If the current thread already holds this lock then the hold
 count is incremented by one and the method returns `true`.

 

If the lock is held by another thread then this method will return
 immediately with the value `false`.

**返回**

- `true` if the lock was free and was acquired by the current thread, or the lock was already held by the current thread; and `false` otherwise
