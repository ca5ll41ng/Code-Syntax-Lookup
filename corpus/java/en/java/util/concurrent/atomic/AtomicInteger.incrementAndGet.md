---
id: "java-en-function-atomicinteger-incrementandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicInteger.incrementAndGet"
signature: "public final int incrementAndGet()"
title: "AtomicInteger.incrementAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicInteger.incrementAndGet

```java
public final int incrementAndGet()
```

Atomically increments the current value,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `addAndGet(1)`.

**返回**

- the updated value
