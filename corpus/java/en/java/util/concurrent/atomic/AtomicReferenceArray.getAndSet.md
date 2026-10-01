---
id: "java-en-function-atomicreferencearray-getandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceArray.getAndSet"
signature: "public final E getAndSet(int i, E newValue)"
title: "AtomicReferenceArray.getAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceArray.getAndSet

```java
public final E getAndSet(int i, E newValue)
```

Atomically sets the element at index `i` to `newValue` and returns the old value,
 with memory effects as specified by `getAndSet`.

**参数**

- **i** — the index
- **newValue** — the new value

**返回**

- the previous value
