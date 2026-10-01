---
id: "java-en-function-atomicboolean-weakcompareandsetacquire"
language: "java"
lang: "en"
category: "function"
name: "AtomicBoolean.weakCompareAndSetAcquire"
signature: "public final boolean weakCompareAndSetAcquire(boolean expectedValue, boolean newValue)"
title: "AtomicBoolean.weakCompareAndSetAcquire"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicBoolean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicBoolean.weakCompareAndSetAcquire

```java
public final boolean weakCompareAndSetAcquire(boolean expectedValue, boolean newValue)
```

Possibly atomically sets the value to `newValue` if the current
 value `== expectedValue`,
 with memory effects as specified by
 `weakCompareAndSetAcquire`.

**参数**

- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful

> *Since 9*
