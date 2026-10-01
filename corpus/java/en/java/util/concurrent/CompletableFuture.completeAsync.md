---
id: "java-en-function-completablefuture-completeasync"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.completeAsync"
signature: "public CompletableFuture<T> completeAsync(Supplier<? extends T> supplier, Executor executor)"
title: "CompletableFuture.completeAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.completeAsync

```java
public CompletableFuture<T> completeAsync(Supplier<? extends T> supplier, Executor executor)
```

Completes this CompletableFuture with the result of
 the given Supplier function invoked from an asynchronous
 task using the given executor.

**参数**

- **supplier** — a function returning the value to be used to complete this CompletableFuture
- **executor** — the executor to use for asynchronous execution

**返回**

- this CompletableFuture

> *Since 9*
