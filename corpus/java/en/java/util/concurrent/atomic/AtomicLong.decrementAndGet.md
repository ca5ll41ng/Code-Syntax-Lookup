---
id: "java-en-function-atomiclong-decrementandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicLong.decrementAndGet"
signature: "public final long decrementAndGet()"
title: "AtomicLong.decrementAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLong.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLong.decrementAndGet

```java
public final long decrementAndGet()
```

Atomically decrements the current value,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `addAndGet(-1)`.

**返回**

- the updated value
