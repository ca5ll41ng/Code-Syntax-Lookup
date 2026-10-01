---
id: "java-en-function-atomiclongarray-getandincrement"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongArray.getAndIncrement"
signature: "public final long getAndIncrement(int i)"
title: "AtomicLongArray.getAndIncrement"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongArray.getAndIncrement

```java
public final long getAndIncrement(int i)
```

Atomically increments the value of the element at index `i`,
 with memory effects as specified by `getAndAdd`.

 

Equivalent to `getAndAdd(i, 1)`.

**参数**

- **i** — the index

**返回**

- the previous value
