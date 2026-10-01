---
id: "java-en-function-atomiclongfieldupdater-getandaccumulate"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongFieldUpdater.getAndAccumulate"
signature: "public final long getAndAccumulate(T obj, long x, LongBinaryOperator accumulatorFunction)"
title: "AtomicLongFieldUpdater.getAndAccumulate"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongFieldUpdater.getAndAccumulate

```java
public final long getAndAccumulate(T obj, long x, LongBinaryOperator accumulatorFunction)
```

Atomically updates (with memory effects as specified by `compareAndSet`) the field of the given object managed
 by this updater with the results of applying the given function
 to the current and given values, returning the previous value.
 The function should be side-effect-free, since it may be
 re-applied when attempted updates fail due to contention among
 threads.  The function is applied with the current value as its
 first argument, and the given update as the second argument.

**参数**

- **obj** — An object whose field to get and set
- **x** — the update value
- **accumulatorFunction** — a side-effect-free function of two arguments

**返回**

- the previous value

> *Since 1.8*
