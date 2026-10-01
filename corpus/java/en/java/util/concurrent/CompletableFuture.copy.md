---
id: "java-en-function-completablefuture-copy"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.copy"
signature: "public CompletableFuture<T> copy()"
title: "CompletableFuture.copy"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.copy

```java
public CompletableFuture<T> copy()
```

Returns a new CompletableFuture that is completed normally with
 the same value as this CompletableFuture when it completes
 normally. If this CompletableFuture completes exceptionally,
 then the returned CompletableFuture completes exceptionally
 with a CompletionException with this exception as cause. The
 behavior is equivalent to `thenApply(x -> x)`. This
 method may be useful as a form of "defensive copying", to
 prevent clients from completing, while still being able to
 arrange dependent actions.

**返回**

- the new CompletableFuture

> *Since 9*
