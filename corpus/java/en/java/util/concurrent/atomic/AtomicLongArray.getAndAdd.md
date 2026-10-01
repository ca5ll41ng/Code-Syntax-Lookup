---
id: "java-en-function-atomiclongarray-getandadd"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongArray.getAndAdd"
signature: "public final long getAndAdd(int i, long delta)"
title: "AtomicLongArray.getAndAdd"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongArray.getAndAdd

```java
public final long getAndAdd(int i, long delta)
```

Atomically adds the given value to the element at index `i`,
 with memory effects as specified by `getAndAdd`.

**参数**

- **i** — the index
- **delta** — the value to add

**返回**

- the previous value
