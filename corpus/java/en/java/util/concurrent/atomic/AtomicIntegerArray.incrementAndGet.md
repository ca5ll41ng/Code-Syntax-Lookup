---
id: "java-en-function-atomicintegerarray-incrementandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerArray.incrementAndGet"
signature: "public final int incrementAndGet(int i)"
title: "AtomicIntegerArray.incrementAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerArray.incrementAndGet

```java
public final int incrementAndGet(int i)
```

Atomically increments the value of the element at index `i`,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `addAndGet(i, 1)`.

**参数**

- **i** — the index

**返回**

- the updated value
