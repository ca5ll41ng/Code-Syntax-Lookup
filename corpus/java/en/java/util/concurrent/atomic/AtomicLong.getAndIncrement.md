---
id: "java-en-function-atomiclong-getandincrement"
language: "java"
lang: "en"
category: "function"
name: "AtomicLong.getAndIncrement"
signature: "public final long getAndIncrement()"
title: "AtomicLong.getAndIncrement"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLong.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLong.getAndIncrement

```java
public final long getAndIncrement()
```

Atomically increments the current value,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `getAndAdd(1)`.

**返回**

- the previous value
