---
id: "java-en-function-completablefuture-exceptionallycompose"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.exceptionallyCompose"
signature: "public CompletableFuture<T> exceptionallyCompose( Function<Throwable, ? extends CompletionStage<T>> fn)"
title: "CompletableFuture.exceptionallyCompose"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.exceptionallyCompose

```java
public CompletableFuture<T> exceptionallyCompose( Function<Throwable, ? extends CompletionStage<T>> fn)
```

> *Since 12*
