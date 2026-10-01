---
id: "java-en-function-atomicinteger-getanddecrement"
language: "java"
lang: "en"
category: "function"
name: "AtomicInteger.getAndDecrement"
signature: "public final int getAndDecrement()"
title: "AtomicInteger.getAndDecrement"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicInteger.getAndDecrement

```java
public final int getAndDecrement()
```

Atomically decrements the current value,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `getAndAdd(-1)`.

**返回**

- the previous value
