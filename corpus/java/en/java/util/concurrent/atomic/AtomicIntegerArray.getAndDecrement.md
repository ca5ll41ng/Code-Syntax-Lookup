---
id: "java-en-function-atomicintegerarray-getanddecrement"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerArray.getAndDecrement"
signature: "public final int getAndDecrement(int i)"
title: "AtomicIntegerArray.getAndDecrement"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerArray.getAndDecrement

```java
public final int getAndDecrement(int i)
```

Atomically decrements the value of the element at index `i`,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `getAndAdd(i, -1)`.

**参数**

- **i** — the index

**返回**

- the previous value
