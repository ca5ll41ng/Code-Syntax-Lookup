---
id: "java-en-function-atomicintegerarray-compareandexchangeacquire"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerArray.compareAndExchangeAcquire"
signature: "public final int compareAndExchangeAcquire(int i, int expectedValue, int newValue)"
title: "AtomicIntegerArray.compareAndExchangeAcquire"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerArray.compareAndExchangeAcquire

```java
public final int compareAndExchangeAcquire(int i, int expectedValue, int newValue)
```

Atomically sets the element at index `i` to `newValue`
 if the element's current value, referred to as the witness
 value, `== expectedValue`,
 with memory effects as specified by
 `compareAndExchangeAcquire`.

**参数**

- **i** — the index
- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- the witness value, which will be the same as the expected value if successful

> *Since 9*
