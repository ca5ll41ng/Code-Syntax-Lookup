---
id: "java-en-function-atomiclong-weakcompareandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicLong.weakCompareAndSet"
signature: "public final boolean weakCompareAndSet(long expectedValue, long newValue)"
title: "AtomicLong.weakCompareAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLong.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLong.weakCompareAndSet

```java
public final boolean weakCompareAndSet(long expectedValue, long newValue)
```

Possibly atomically sets the value to `newValue`
 if the current value `== expectedValue`,
 with memory effects as specified by `weakCompareAndSetPlain`.

**参数**

- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful

**参见**

- #weakCompareAndSetPlain

> **⚠ Deprecated** — This method has plain memory effects but the method name implies volatile memory effects (see methods such as `compareAndExchange` and `compareAndSet`).  To avoid confusion over plain or volatile memory effects it is recommended that the method `weakCompareAndSetPlain` be used instead.
