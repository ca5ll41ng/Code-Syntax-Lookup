---
id: "java-en-function-atomicintegerarray-weakcompareandsetacquire"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerArray.weakCompareAndSetAcquire"
signature: "public final boolean weakCompareAndSetAcquire(int i, int expectedValue, int newValue)"
title: "AtomicIntegerArray.weakCompareAndSetAcquire"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerArray.weakCompareAndSetAcquire

```java
public final boolean weakCompareAndSetAcquire(int i, int expectedValue, int newValue)
```

Possibly atomically sets the element at index `i` to
 `newValue` if the element's current value `== expectedValue`,
 with memory effects as specified by
 `weakCompareAndSetAcquire`.

**参数**

- **i** — the index
- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful

> *Since 9*
