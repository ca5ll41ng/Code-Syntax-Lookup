---
id: "java-en-function-atomicinteger-decrementandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicInteger.decrementAndGet"
signature: "public final int decrementAndGet()"
title: "AtomicInteger.decrementAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicInteger.decrementAndGet

```java
public final int decrementAndGet()
```

Atomically decrements the current value,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `addAndGet(-1)`.

**返回**

- the updated value
