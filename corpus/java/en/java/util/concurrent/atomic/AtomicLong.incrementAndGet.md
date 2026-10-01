---
id: "java-en-function-atomiclong-incrementandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicLong.incrementAndGet"
signature: "public final long incrementAndGet()"
title: "AtomicLong.incrementAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLong.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLong.incrementAndGet

```java
public final long incrementAndGet()
```

Atomically increments the current value,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `addAndGet(1)`.

**返回**

- the updated value
