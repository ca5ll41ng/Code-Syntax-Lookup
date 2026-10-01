---
id: "java-en-function-atomicinteger-getandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicInteger.getAndSet"
signature: "public final int getAndSet(int newValue)"
title: "AtomicInteger.getAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicInteger.getAndSet

```java
public final int getAndSet(int newValue)
```

Atomically sets the value to `newValue` and returns the old value,
 with memory effects as specified by `getAndSet`.

**参数**

- **newValue** — the new value

**返回**

- the previous value
