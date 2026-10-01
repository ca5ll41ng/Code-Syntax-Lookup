---
id: "java-en-function-atomicintegerarray-getandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerArray.getAndSet"
signature: "public final int getAndSet(int i, int newValue)"
title: "AtomicIntegerArray.getAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerArray.getAndSet

```java
public final int getAndSet(int i, int newValue)
```

Atomically sets the element at index `i` to `newValue` and returns the old value,
 with memory effects as specified by `getAndSet`.

**参数**

- **i** — the index
- **newValue** — the new value

**返回**

- the previous value
