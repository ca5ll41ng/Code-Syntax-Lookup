---
id: "java-en-function-atomicreferencearray-compareandexchange"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceArray.compareAndExchange"
signature: "public final E compareAndExchange(int i, E expectedValue, E newValue)"
title: "AtomicReferenceArray.compareAndExchange"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceArray.compareAndExchange

```java
public final E compareAndExchange(int i, E expectedValue, E newValue)
```

Atomically sets the element at index `i` to `newValue`
 if the element's current value, referred to as the witness
 value, `== expectedValue`,
 with memory effects as specified by
 `compareAndExchange`.

**参数**

- **i** — the index
- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- the witness value, which will be the same as the expected value if successful

> *Since 9*
