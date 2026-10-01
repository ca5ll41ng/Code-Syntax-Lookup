---
id: "java-en-function-executors-newworkstealingpool"
language: "java"
lang: "en"
category: "function"
name: "Executors.newWorkStealingPool"
signature: "public static ExecutorService newWorkStealingPool(int parallelism)"
title: "Executors.newWorkStealingPool"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.newWorkStealingPool

```java
public static ExecutorService newWorkStealingPool(int parallelism)
```

Creates a thread pool that maintains enough threads to support
 the given parallelism level, and may use multiple queues to
 reduce contention. The parallelism level corresponds to the
 maximum number of threads actively engaged in, or available to
 engage in, task processing. The actual number of threads may
 grow and shrink dynamically. A work-stealing pool makes no
 guarantees about the order in which submitted tasks are
 executed.

**参数**

- **parallelism** — the targeted parallelism level

**返回**

- the newly created thread pool

**异常**

- **IllegalArgumentException** — if `parallelism <= 0`

> *Since 1.8*
