---
id: "java-en-function-atomicintegerfieldupdater-accumulateandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerFieldUpdater.accumulateAndGet"
signature: "public final int accumulateAndGet(T obj, int x, IntBinaryOperator accumulatorFunction)"
title: "AtomicIntegerFieldUpdater.accumulateAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerFieldUpdater.accumulateAndGet

```java
public final int accumulateAndGet(T obj, int x, IntBinaryOperator accumulatorFunction)
```

Atomically updates (with memory effects as specified by `compareAndSet`) the field of the given object managed
 by this updater with the results of applying the given function
 to the current and given values, returning the updated value.
 The function should be side-effect-free, since it may be
 re-applied when attempted updates fail due to contention among
 threads.  The function is applied with the current value as its
 first argument, and the given update as the second argument.

**参数**

- **obj** — An object whose field to get and set
- **x** — the update value
- **accumulatorFunction** — a side-effect-free function of two arguments

**返回**

- the updated value

> *Since 1.8*
