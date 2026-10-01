---
id: "java-en-function-atomicboolean-getandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicBoolean.getAndSet"
signature: "public final boolean getAndSet(boolean newValue)"
title: "AtomicBoolean.getAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicBoolean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicBoolean.getAndSet

```java
public final boolean getAndSet(boolean newValue)
```

Atomically sets the value to `newValue` and returns the old value,
 with memory effects as specified by `getAndSet`.

**参数**

- **newValue** — the new value

**返回**

- the previous value
