---
id: "java-en-function-completablefuture-defaultexecutor"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.defaultExecutor"
signature: "public Executor defaultExecutor()"
title: "CompletableFuture.defaultExecutor"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.defaultExecutor

```java
public Executor defaultExecutor()
```

Returns the default Executor used for async methods that do not
 specify an Executor. This class uses the `commonPool` if it supports more than one
 parallel thread, or else an Executor using one thread per async
 task.  This method may be overridden in subclasses to return
 an Executor that provides at least one independent thread.

**返回**

- the executor

> *Since 9*
