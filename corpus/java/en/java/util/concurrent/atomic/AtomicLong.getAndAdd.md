---
id: "java-en-function-atomiclong-getandadd"
language: "java"
lang: "en"
category: "function"
name: "AtomicLong.getAndAdd"
signature: "public final long getAndAdd(long delta)"
title: "AtomicLong.getAndAdd"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLong.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLong.getAndAdd

```java
public final long getAndAdd(long delta)
```

Atomically adds the given value to the current value,
 with memory effects as specified by `getAndAdd`.

**参数**

- **delta** — the value to add

**返回**

- the previous value
