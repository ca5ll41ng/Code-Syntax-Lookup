---
id: "java-en-function-completablefuture-allof"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.allOf"
signature: "public static CompletableFuture<Void> allOf(CompletableFuture<?>... cfs)"
title: "CompletableFuture.allOf"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.allOf

```java
public static CompletableFuture<Void> allOf(CompletableFuture<?>... cfs)
```

Returns a new CompletableFuture that is completed when all of
 the given CompletableFutures complete.  If any of the given
 CompletableFutures complete exceptionally, then the returned
 CompletableFuture also does so, with a CompletionException
 holding this exception as its cause.  Otherwise, the results,
 if any, of the given CompletableFutures are not reflected in
 the returned CompletableFuture, but may be obtained by
 inspecting them individually. If no CompletableFutures are
 provided, returns a CompletableFuture completed with the value
 `null`.

 

Among the applications of this method is to await completion
 of a set of independent CompletableFutures before continuing a
 program, as in: `CompletableFuture.allOf(c1, c2,
 c3).join();`.

**参数**

- **cfs** — the CompletableFutures

**返回**

- a new CompletableFuture that is completed when all of the given CompletableFutures complete

**异常**

- **NullPointerException** — if the array or any of its elements are `null`
