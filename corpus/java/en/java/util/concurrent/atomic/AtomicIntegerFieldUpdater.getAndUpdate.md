---
id: "java-en-function-atomicintegerfieldupdater-getandupdate"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerFieldUpdater.getAndUpdate"
signature: "public final int getAndUpdate(T obj, IntUnaryOperator updateFunction)"
title: "AtomicIntegerFieldUpdater.getAndUpdate"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerFieldUpdater.getAndUpdate

```java
public final int getAndUpdate(T obj, IntUnaryOperator updateFunction)
```

Atomically updates (with memory effects as specified by `compareAndSet`) the field of the given object managed
 by this updater with the results of applying the given
 function, returning the previous value. The function should be
 side-effect-free, since it may be re-applied when attempted
 updates fail due to contention among threads.

**参数**

- **obj** — An object whose field to get and set
- **updateFunction** — a side-effect-free function

**返回**

- the previous value

> *Since 1.8*
