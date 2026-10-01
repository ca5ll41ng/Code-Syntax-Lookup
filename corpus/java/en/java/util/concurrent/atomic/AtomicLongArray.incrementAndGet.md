---
id: "java-en-function-atomiclongarray-incrementandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongArray.incrementAndGet"
signature: "public final long incrementAndGet(int i)"
title: "AtomicLongArray.incrementAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongArray.incrementAndGet

```java
public final long incrementAndGet(int i)
```

Atomically increments the value of the element at index `i`,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `addAndGet(i, 1)`.

**参数**

- **i** — the index

**返回**

- the updated value
