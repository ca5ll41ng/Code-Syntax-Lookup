---
id: "java-en-function-forkjointask-join"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.join"
signature: "public final V join()"
title: "ForkJoinTask.join"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.join

```java
public final V join()
```

Returns the result of the computation when it
 `isDone is done`.
 This method differs from `get` in that abnormal
 completion results in `RuntimeException` or `Error`,
 not `ExecutionException`, and that interrupts of the
 calling thread do not cause the method to abruptly
 return by throwing `InterruptedException`.

**返回**

- the computed result
