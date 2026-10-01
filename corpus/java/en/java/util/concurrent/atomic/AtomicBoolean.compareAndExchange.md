---
id: "java-en-function-atomicboolean-compareandexchange"
language: "java"
lang: "en"
category: "function"
name: "AtomicBoolean.compareAndExchange"
signature: "public final boolean compareAndExchange(boolean expectedValue, boolean newValue)"
title: "AtomicBoolean.compareAndExchange"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicBoolean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicBoolean.compareAndExchange

```java
public final boolean compareAndExchange(boolean expectedValue, boolean newValue)
```

Atomically sets the value to `newValue` if the current value,
 referred to as the witness value, `== expectedValue`,
 with memory effects as specified by
 `compareAndExchange`.

**参数**

- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- the witness value, which will be the same as the expected value if successful

> *Since 9*
