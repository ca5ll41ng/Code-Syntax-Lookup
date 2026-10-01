---
id: "java-en-function-atomicreference-updateandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicReference.updateAndGet"
signature: "public final V updateAndGet(UnaryOperator<V> updateFunction)"
title: "AtomicReference.updateAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReference.updateAndGet

```java
public final V updateAndGet(UnaryOperator<V> updateFunction)
```

Atomically updates (with memory effects as specified by `compareAndSet`) the current value with the results of
 applying the given function, returning the updated value. The
 function should be side-effect-free, since it may be re-applied
 when attempted updates fail due to contention among threads.

**参数**

- **updateFunction** — a side-effect-free function

**返回**

- the updated value

> *Since 1.8*
