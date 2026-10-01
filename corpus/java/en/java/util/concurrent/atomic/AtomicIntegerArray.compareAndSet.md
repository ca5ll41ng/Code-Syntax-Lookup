---
id: "java-en-function-atomicintegerarray-compareandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerArray.compareAndSet"
signature: "public final boolean compareAndSet(int i, int expectedValue, int newValue)"
title: "AtomicIntegerArray.compareAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerArray.compareAndSet

```java
public final boolean compareAndSet(int i, int expectedValue, int newValue)
```

Atomically sets the element at index `i` to `newValue` if the element's current value `== expectedValue`,
 with memory effects as specified by `compareAndSet`.

**参数**

- **i** — the index
- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful. False return indicates that the actual value was not equal to the expected value.
