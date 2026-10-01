---
id: "java-en-function-atomicreference-weakcompareandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicReference.weakCompareAndSet"
signature: "public final boolean weakCompareAndSet(V expectedValue, V newValue)"
title: "AtomicReference.weakCompareAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReference.weakCompareAndSet

```java
public final boolean weakCompareAndSet(V expectedValue, V newValue)
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
