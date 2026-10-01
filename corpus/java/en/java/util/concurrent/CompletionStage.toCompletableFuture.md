---
id: "java-en-function-completionstage-tocompletablefuture"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.toCompletableFuture"
signature: "public CompletableFuture<T> toCompletableFuture()"
title: "CompletionStage.toCompletableFuture"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.toCompletableFuture

```java
public CompletableFuture<T> toCompletableFuture()
```

Returns a `CompletableFuture` maintaining the same
 completion properties as `this` stage. If `this` stage is already a
 CompletableFuture, method `toCompletableFuture` may return `this` stage itself.
 Otherwise, invocation may be equivalent in
 effect to `thenApply(x -> x)`, but returning an instance
 of type `CompletableFuture`.

**返回**

- the CompletableFuture
