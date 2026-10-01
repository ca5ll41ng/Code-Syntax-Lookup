---
id: "java-en-function-cyclicbarrier-cyclicbarrier"
language: "java"
lang: "en"
category: "function"
name: "CyclicBarrier.CyclicBarrier"
signature: "public CyclicBarrier(int parties, Runnable barrierAction)"
title: "CyclicBarrier.CyclicBarrier"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CyclicBarrier.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CyclicBarrier.CyclicBarrier

```java
public CyclicBarrier(int parties, Runnable barrierAction)
```

Creates a new `CyclicBarrier` that will trip when the
 given number of parties (threads) are waiting upon it, and which
 will execute the given barrier action when the barrier is tripped,
 performed by the last thread entering the barrier.

**参数**

- **parties** — the number of threads that must invoke `await` before the barrier is tripped
- **barrierAction** — the command to execute when the barrier is tripped, or `null` if there is no action

**异常**

- **IllegalArgumentException** — if `parties` is less than 1
