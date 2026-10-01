---
id: "java-en-function-atomiclong-weakcompareandsetacquire"
language: "java"
lang: "en"
category: "function"
name: "AtomicLong.weakCompareAndSetAcquire"
signature: "public final boolean weakCompareAndSetAcquire(long expectedValue, long newValue)"
title: "AtomicLong.weakCompareAndSetAcquire"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLong.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLong.weakCompareAndSetAcquire

```java
public final boolean weakCompareAndSetAcquire(long expectedValue, long newValue)
```

Possibly atomically sets the value to `newValue`
 if the current value `== expectedValue`,
 with memory effects as specified by
 `weakCompareAndSetAcquire`.

**参数**

- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful

> *Since 9*
