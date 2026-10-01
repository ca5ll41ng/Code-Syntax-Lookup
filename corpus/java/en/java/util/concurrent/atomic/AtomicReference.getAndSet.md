---
id: "java-en-function-atomicreference-getandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicReference.getAndSet"
signature: "public final V getAndSet(V newValue)"
title: "AtomicReference.getAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReference.getAndSet

```java
public final V getAndSet(V newValue)
```

Atomically sets the value to `newValue` and returns the old value,
 with memory effects as specified by `getAndSet`.

**参数**

- **newValue** — the new value

**返回**

- the previous value
