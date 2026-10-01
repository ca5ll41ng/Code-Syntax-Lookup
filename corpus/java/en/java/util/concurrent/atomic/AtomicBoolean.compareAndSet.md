---
id: "java-en-function-atomicboolean-compareandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicBoolean.compareAndSet"
signature: "public final boolean compareAndSet(boolean expectedValue, boolean newValue)"
title: "AtomicBoolean.compareAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicBoolean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicBoolean.compareAndSet

```java
public final boolean compareAndSet(boolean expectedValue, boolean newValue)
```

Atomically sets the value to `newValue`
 if the current value `== expectedValue`,
 with memory effects as specified by `compareAndSet`.

**参数**

- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful. False return indicates that the actual value was not equal to the expected value.
