---
id: "java-en-function-forkjointask-adapt"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.adapt"
signature: "public static ForkJoinTask<?> adapt(Runnable runnable)"
title: "ForkJoinTask.adapt"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.adapt

```java
public static ForkJoinTask<?> adapt(Runnable runnable)
```

Returns a new `ForkJoinTask` that performs the `run`
 method of the given `Runnable` as its action, and returns
 a null result upon `join`.

**参数**

- **runnable** — the runnable action

**返回**

- the task
