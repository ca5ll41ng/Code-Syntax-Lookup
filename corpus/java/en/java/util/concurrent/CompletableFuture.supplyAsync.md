---
id: "java-en-function-completablefuture-supplyasync"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.supplyAsync"
signature: "public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier)"
title: "CompletableFuture.supplyAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.supplyAsync

```java
public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier)
```

Returns a new CompletableFuture that is asynchronously completed
 by a task running in the `commonPool` with
 the value obtained by calling the given Supplier.

**参数**

- **supplier** — a function returning the value to be used to complete the returned CompletableFuture
- **the** — function's return type

**返回**

- the new CompletableFuture
