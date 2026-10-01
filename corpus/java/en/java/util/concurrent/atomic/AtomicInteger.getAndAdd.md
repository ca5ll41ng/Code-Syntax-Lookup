---
id: "java-en-function-atomicinteger-getandadd"
language: "java"
lang: "en"
category: "function"
name: "AtomicInteger.getAndAdd"
signature: "public final int getAndAdd(int delta)"
title: "AtomicInteger.getAndAdd"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicInteger.getAndAdd

```java
public final int getAndAdd(int delta)
```

Atomically adds the given value to the current value,
 with memory effects as specified by `getAndAdd`.

**参数**

- **delta** — the value to add

**返回**

- the previous value
