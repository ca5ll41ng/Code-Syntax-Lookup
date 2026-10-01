---
id: "java-en-function-atomicreference-getandaccumulate"
language: "java"
lang: "en"
category: "function"
name: "AtomicReference.getAndAccumulate"
signature: "public final V getAndAccumulate(V x, BinaryOperator<V> accumulatorFunction)"
title: "AtomicReference.getAndAccumulate"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReference.getAndAccumulate

```java
public final V getAndAccumulate(V x, BinaryOperator<V> accumulatorFunction)
```

Atomically updates (with memory effects as specified by `compareAndSet`) the current value with the results of
 applying the given function to the current and given values,
 returning the previous value. The function should be
 side-effect-free, since it may be re-applied when attempted
 updates fail due to contention among threads.  The function is
 applied with the current value as its first argument, and the
 given update as the second argument.

**参数**

- **x** — the update value
- **accumulatorFunction** — a side-effect-free function of two arguments

**返回**

- the previous value

> *Since 1.8*
