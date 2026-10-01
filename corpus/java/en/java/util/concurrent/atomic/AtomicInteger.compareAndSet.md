---
id: "java-en-function-atomicinteger-compareandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicInteger.compareAndSet"
signature: "public final boolean compareAndSet(int expectedValue, int newValue)"
title: "AtomicInteger.compareAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicInteger.compareAndSet

```java
public final boolean compareAndSet(int expectedValue, int newValue)
```

Atomically sets the value to `newValue`
 if the current value `== expectedValue`,
 with memory effects as specified by `compareAndSet`.

**参数**

- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful. False return indicates that the actual value was not equal to the expected value.
