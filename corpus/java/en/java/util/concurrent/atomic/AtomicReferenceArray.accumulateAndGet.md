---
id: "java-en-function-atomicreferencearray-accumulateandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceArray.accumulateAndGet"
signature: "public final E accumulateAndGet(int i, E x, BinaryOperator<E> accumulatorFunction)"
title: "AtomicReferenceArray.accumulateAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceArray.accumulateAndGet

```java
public final E accumulateAndGet(int i, E x, BinaryOperator<E> accumulatorFunction)
```

Atomically updates (with memory effects as specified by `compareAndSet`) the element at index `i` with
 the results of applying the given function to the current and
 given values, returning the updated value. The function should
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

- the updated value

> *Since 1.8*
