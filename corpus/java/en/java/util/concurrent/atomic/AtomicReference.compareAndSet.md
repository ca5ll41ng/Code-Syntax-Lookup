---
id: "java-en-function-atomicreference-compareandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicReference.compareAndSet"
signature: "public final boolean compareAndSet(V expectedValue, V newValue)"
title: "AtomicReference.compareAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReference.compareAndSet

```java
public final boolean compareAndSet(V expectedValue, V newValue)
```

Atomically sets the value to `newValue`
 if the current value `== expectedValue`,
 with memory effects as specified by `compareAndSet`.

**参数**

- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful. False return indicates that the actual value was not equal to the expected value.
