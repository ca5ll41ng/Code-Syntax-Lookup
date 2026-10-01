---
id: "java-en-function-atomicintegerarray-getandadd"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerArray.getAndAdd"
signature: "public final int getAndAdd(int i, int delta)"
title: "AtomicIntegerArray.getAndAdd"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerArray.getAndAdd

```java
public final int getAndAdd(int i, int delta)
```

Atomically adds the given value to the element at index `i`,
 with memory effects as specified by `getAndAdd`.

**参数**

- **i** — the index
- **delta** — the value to add

**返回**

- the previous value
