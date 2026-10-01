---
id: "java-en-function-atomicintegerarray-getandaccumulate"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerArray.getAndAccumulate"
signature: "public final int getAndAccumulate(int i, int x, IntBinaryOperator accumulatorFunction)"
title: "AtomicIntegerArray.getAndAccumulate"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerArray.getAndAccumulate

```java
public final int getAndAccumulate(int i, int x, IntBinaryOperator accumulatorFunction)
```

Atomically updates (with memory effects as specified by `compareAndSet`) the element at index `i` with
 the results of applying the given function to the current and
 given values, returning the previous value. The function should
 be side-effect-free, since it may be re-applied when attempted
 updates fail due to contention among threads.  The function is
 applied with the current value of the element at index `i`
 as its first argument, and the given update as the second
 argument.

**参数**

- **i** — the index
- **x** — the update value
- **accumulatorFunction** — a side-effect-free function of two arguments

**返回**

- the previous value

> *Since 1.8*
