---
id: "java-en-function-atomiclong-getanddecrement"
language: "java"
lang: "en"
category: "function"
name: "AtomicLong.getAndDecrement"
signature: "public final long getAndDecrement()"
title: "AtomicLong.getAndDecrement"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLong.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLong.getAndDecrement

```java
public final long getAndDecrement()
```

Atomically decrements the current value,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `getAndAdd(-1)`.

**返回**

- the previous value
