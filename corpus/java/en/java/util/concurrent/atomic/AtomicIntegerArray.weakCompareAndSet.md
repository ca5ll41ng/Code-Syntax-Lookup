---
id: "java-en-function-atomicintegerarray-weakcompareandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerArray.weakCompareAndSet"
signature: "public final boolean weakCompareAndSet(int i, int expectedValue, int newValue)"
title: "AtomicIntegerArray.weakCompareAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerArray.weakCompareAndSet

```java
public final boolean weakCompareAndSet(int i, int expectedValue, int newValue)
```

Possibly atomically sets the element at index `i` to
 `newValue` if the element's current value `== expectedValue`,
 with memory effects as specified by `weakCompareAndSetPlain`.

**参数**

- **i** — the index
- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful

**参见**

- #weakCompareAndSetPlain

> **⚠ Deprecated** — This method has plain memory effects but the method name implies volatile memory effects (see methods such as `compareAndExchange` and `compareAndSet`).  To avoid confusion over plain or volatile memory effects it is recommended that the method `weakCompareAndSetPlain` be used instead.
