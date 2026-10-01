---
id: "java-en-function-forkjoinpool-setparallelism"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.setParallelism"
signature: "public int setParallelism(int size)"
title: "ForkJoinPool.setParallelism"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.setParallelism

```java
public int setParallelism(int size)
```

Changes the target parallelism of this pool, controlling the
 future creation, use, and termination of worker threads.
 Applications include contexts in which the number of available
 processors changes over time.

 running threads to 32767

**参数**

- **size** — the target parallelism level

**返回**

- the previous parallelism level.

**异常**

- **IllegalArgumentException** — if size is less than 1 or greater than the maximum supported by this pool.
- **UnsupportedOperationException** — this is the`commonPool` and parallelism level was set by System property {@systemProperty java.util.concurrent.ForkJoinPool.common.parallelism}.

> *Since 19*
