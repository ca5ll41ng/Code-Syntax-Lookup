---
id: "java-en-function-atomiclongarray-getandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongArray.getAndSet"
signature: "public final long getAndSet(int i, long newValue)"
title: "AtomicLongArray.getAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongArray.getAndSet

```java
public final long getAndSet(int i, long newValue)
```

Atomically sets the element at index `i` to `newValue` and returns the old value,
 with memory effects as specified by `getAndSet`.

**参数**

- **i** — the index
- **newValue** — the new value

**返回**

- the previous value
