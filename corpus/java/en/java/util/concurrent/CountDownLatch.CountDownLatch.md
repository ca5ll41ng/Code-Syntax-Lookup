---
id: "java-en-function-countdownlatch-countdownlatch"
language: "java"
lang: "en"
category: "function"
name: "CountDownLatch.CountDownLatch"
signature: "public CountDownLatch(int count)"
title: "CountDownLatch.CountDownLatch"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountDownLatch.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountDownLatch.CountDownLatch

```java
public CountDownLatch(int count)
```

Constructs a `CountDownLatch` initialized with the given count.

**参数**

- **count** — the number of times `countDown` must be invoked before threads can pass through `await`

**异常**

- **IllegalArgumentException** — if `count` is negative
