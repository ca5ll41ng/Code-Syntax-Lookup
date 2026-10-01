---
id: "java-en-function-atomiclong-getandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicLong.getAndSet"
signature: "public final long getAndSet(long newValue)"
title: "AtomicLong.getAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLong.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLong.getAndSet

```java
public final long getAndSet(long newValue)
```

Atomically sets the value to `newValue` and returns the old value,
 with memory effects as specified by `getAndSet`.

**参数**

- **newValue** — the new value

**返回**

- the previous value
