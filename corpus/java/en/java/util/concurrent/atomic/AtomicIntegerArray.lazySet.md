---
id: "java-en-function-atomicintegerarray-lazyset"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerArray.lazySet"
signature: "public final void lazySet(int i, int newValue)"
title: "AtomicIntegerArray.lazySet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerArray.lazySet

```java
public final void lazySet(int i, int newValue)
```

Sets the element at index `i` to `newValue`,
 with memory effects as specified by `setRelease`.

**参数**

- **i** — the index
- **newValue** — the new value

> *Since 1.6*
