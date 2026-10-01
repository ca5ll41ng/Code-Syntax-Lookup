---
id: "java-en-function-atomicreferencearray-compareandexchangerelease"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceArray.compareAndExchangeRelease"
signature: "public final E compareAndExchangeRelease(int i, E expectedValue, E newValue)"
title: "AtomicReferenceArray.compareAndExchangeRelease"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceArray.compareAndExchangeRelease

```java
public final E compareAndExchangeRelease(int i, E expectedValue, E newValue)
```

Atomically sets the element at index `i` to `newValue`
 if the element's current value, referred to as the witness
 value, `== expectedValue`,
 with memory effects as specified by
 `compareAndExchangeRelease`.

**参数**

- **i** — the index
- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- the witness value, which will be the same as the expected value if successful

> *Since 9*
