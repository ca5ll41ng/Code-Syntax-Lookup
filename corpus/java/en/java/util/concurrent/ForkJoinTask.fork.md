---
id: "java-en-function-forkjointask-fork"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.fork"
signature: "public final ForkJoinTask<V> fork()"
title: "ForkJoinTask.fork"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.fork

```java
public final ForkJoinTask<V> fork()
```

Arranges to asynchronously execute this task in the pool the
 current task is running in, if applicable, or using the `commonPool` if not `inForkJoinPool`.  While
 it is not necessarily enforced, it is a usage error to fork a
 task more than once unless it has completed and been
 reinitialized.  Subsequent modifications to the state of this
 task or any data it operates on are not necessarily
 consistently observable by any thread other than the one
 executing it unless preceded by a call to `join` or
 related methods, or a call to `isDone` returning `true`.

**返回**

- `this`, to simplify usage
