---
id: "java-en-function-atomicinteger-compareandexchange"
language: "java"
lang: "en"
category: "function"
name: "AtomicInteger.compareAndExchange"
signature: "public final int compareAndExchange(int expectedValue, int newValue)"
title: "AtomicInteger.compareAndExchange"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicInteger.compareAndExchange

```java
public final int compareAndExchange(int expectedValue, int newValue)
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
