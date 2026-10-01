---
id: "java-en-function-atomiclongarray-compareandexchangerelease"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongArray.compareAndExchangeRelease"
signature: "public final long compareAndExchangeRelease(int i, long expectedValue, long newValue)"
title: "AtomicLongArray.compareAndExchangeRelease"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongArray.compareAndExchangeRelease

```java
public final long compareAndExchangeRelease(int i, long expectedValue, long newValue)
```

Atomically sets the element at index `i` to `newValue`
 if the element's current value, referred to as the witness
 value, `== expectedValue`,
 with memory effects as specified by
 `compareAndExchangeRelease`.

**参数**

- **i** — the index
- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- the witness value, which will be the same as the expected value if successful

> *Since 9*
