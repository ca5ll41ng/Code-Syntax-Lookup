---
id: "java-en-function-completablefuture-runasync"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.runAsync"
signature: "public static CompletableFuture<Void> runAsync(Runnable runnable)"
title: "CompletableFuture.runAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.runAsync

```java
public static CompletableFuture<Void> runAsync(Runnable runnable)
```

Returns a new CompletableFuture that is asynchronously completed
 by a task running in the `commonPool` after
 it runs the given action.

**参数**

- **runnable** — the action to run before completing the returned CompletableFuture

**返回**

- the new CompletableFuture
