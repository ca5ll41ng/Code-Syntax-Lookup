---
id: "java-en-function-atomicreference-compareandexchangerelease"
language: "java"
lang: "en"
category: "function"
name: "AtomicReference.compareAndExchangeRelease"
signature: "public final V compareAndExchangeRelease(V expectedValue, V newValue)"
title: "AtomicReference.compareAndExchangeRelease"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReference.compareAndExchangeRelease

```java
public final V compareAndExchangeRelease(V expectedValue, V newValue)
```

Atomically sets the value to `newValue` if the current value,
 referred to as the witness value, `== expectedValue`,
 with memory effects as specified by
 `compareAndExchangeRelease`.

**参数**

- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- the witness value, which will be the same as the expected value if successful

> *Since 9*
