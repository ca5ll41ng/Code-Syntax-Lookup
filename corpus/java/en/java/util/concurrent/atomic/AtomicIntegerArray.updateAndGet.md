---
id: "java-en-function-atomicintegerarray-updateandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerArray.updateAndGet"
signature: "public final int updateAndGet(int i, IntUnaryOperator updateFunction)"
title: "AtomicIntegerArray.updateAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerArray.updateAndGet

```java
public final int updateAndGet(int i, IntUnaryOperator updateFunction)
```

Atomically updates (with memory effects as specified by `compareAndSet`) the element at index `i` with
 the results of applying the given function, returning the
 updated value. The function should be side-effect-free, since it
 may be re-applied when attempted updates fail due to contention
 among threads.

**参数**

- **i** — the index
- **updateFunction** — a side-effect-free function

**返回**

- the updated value

> *Since 1.8*
