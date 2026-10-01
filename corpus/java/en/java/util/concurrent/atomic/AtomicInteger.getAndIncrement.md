---
id: "java-en-function-atomicinteger-getandincrement"
language: "java"
lang: "en"
category: "function"
name: "AtomicInteger.getAndIncrement"
signature: "public final int getAndIncrement()"
title: "AtomicInteger.getAndIncrement"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicInteger.getAndIncrement

```java
public final int getAndIncrement()
```

Atomically increments the current value,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `getAndAdd(1)`.

**返回**

- the previous value
