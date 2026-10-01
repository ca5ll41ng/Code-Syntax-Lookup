---
id: "java-en-function-semaphore-tryacquire"
language: "java"
lang: "en"
category: "function"
name: "Semaphore.tryAcquire"
signature: "public boolean tryAcquire()"
title: "Semaphore.tryAcquire"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Semaphore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Semaphore.tryAcquire

```java
public boolean tryAcquire()
```

Acquires a permit from this semaphore, only if one is available at the
 time of invocation.

 

Acquires a permit, if one is available and returns immediately,
 with the value `true`,
 reducing the number of available permits by one.

 

If no permit is available then this method will return
 immediately with the value `false`.

 

Even when this semaphore has been set to use a
 fair ordering policy, a call to `tryAcquire()` will
 immediately acquire a permit if one is available, whether or not
 other threads are currently waiting.
 This &quot;barging&quot; behavior can be useful in certain
 circumstances, even though it breaks fairness. If you want to honor
 the fairness setting, then use
 `tryAcquire`
 which is almost equivalent (it also detects interruption).

**返回**

- `true` if a permit was acquired and `false` otherwise
