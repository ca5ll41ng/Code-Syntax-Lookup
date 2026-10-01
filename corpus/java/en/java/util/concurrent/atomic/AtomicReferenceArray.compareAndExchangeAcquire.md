---
id: "java-en-function-atomicreferencearray-compareandexchangeacquire"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceArray.compareAndExchangeAcquire"
signature: "public final E compareAndExchangeAcquire(int i, E expectedValue, E newValue)"
title: "AtomicReferenceArray.compareAndExchangeAcquire"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceArray.compareAndExchangeAcquire

```java
public final E compareAndExchangeAcquire(int i, E expectedValue, E newValue)
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
