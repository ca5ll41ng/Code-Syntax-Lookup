---
id: "java-en-function-forkjoinpool-commonpool"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.commonPool"
signature: "public static ForkJoinPool commonPool()"
title: "ForkJoinPool.commonPool"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.commonPool

```java
public static ForkJoinPool commonPool()
```

Returns the common pool instance. This pool is statically
 constructed; its run state is unaffected by attempts to `shutdown` or `shutdownNow`. However this pool and any
 ongoing processing are automatically terminated upon program
 `exit`.  Any program that relies on asynchronous
 task processing to complete before program termination should
 invoke `commonPool().``awaitQuiescence awaitQuiescence`,
 before exit.

**返回**

- the common pool instance

> *Since 1.8*
