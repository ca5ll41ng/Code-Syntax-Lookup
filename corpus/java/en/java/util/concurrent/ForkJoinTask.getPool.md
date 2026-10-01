---
id: "java-en-function-forkjointask-getpool"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.getPool"
signature: "public static ForkJoinPool getPool()"
title: "ForkJoinTask.getPool"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.getPool

```java
public static ForkJoinPool getPool()
```

Returns the pool hosting the current thread, or `null`
 if the current thread is executing outside of any ForkJoinPool.

 

This method returns `null` if and only if `inForkJoinPool` returns `false`.

**返回**

- the pool, or `null` if none
