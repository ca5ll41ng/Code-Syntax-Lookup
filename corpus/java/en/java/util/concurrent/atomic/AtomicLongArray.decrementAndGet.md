---
id: "java-en-function-atomiclongarray-decrementandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongArray.decrementAndGet"
signature: "public final long decrementAndGet(int i)"
title: "AtomicLongArray.decrementAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongArray.decrementAndGet

```java
public final long decrementAndGet(int i)
```

Atomically decrements the value of the element at index `i`,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `addAndGet(i, -1)`.

**参数**

- **i** — the index

**返回**

- the updated value
