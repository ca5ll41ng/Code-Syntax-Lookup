---
id: "java-en-function-completablefuture-anyof"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.anyOf"
signature: "public static CompletableFuture<Object> anyOf(CompletableFuture<?>... cfs)"
title: "CompletableFuture.anyOf"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.anyOf

```java
public static CompletableFuture<Object> anyOf(CompletableFuture<?>... cfs)
```

Returns a new CompletableFuture that is completed when any of
 the given CompletableFutures complete, with the same result.
 Otherwise, if it completed exceptionally, the returned
 CompletableFuture also does so, with a CompletionException
 holding this exception as its cause.  If no CompletableFutures
 are provided, returns an incomplete CompletableFuture.

**参数**

- **cfs** — the CompletableFutures

**返回**

- a new CompletableFuture that is completed with the result or exception of any of the given CompletableFutures when one completes

**异常**

- **NullPointerException** — if the array or any of its elements are `null`
