---
id: "java-en-function-completablefuture-minimalcompletionstage"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.minimalCompletionStage"
signature: "public CompletionStage<T> minimalCompletionStage()"
title: "CompletableFuture.minimalCompletionStage"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.minimalCompletionStage

```java
public CompletionStage<T> minimalCompletionStage()
```

Returns a new CompletionStage that is completed normally with
 the same value as this CompletableFuture when it completes
 normally, and cannot be independently completed or otherwise
 used in ways not defined by the methods of interface `CompletionStage`.  If this CompletableFuture completes
 exceptionally, then the returned CompletionStage completes
 exceptionally with a CompletionException with this exception as
 cause.

 

Unless overridden by a subclass, a new non-minimal
 CompletableFuture with all methods available can be obtained from
 a minimal CompletionStage via `toCompletableFuture`.
 For example, completion of a minimal stage can be awaited by

 
```
 `minimalStage.toCompletableFuture().join(); `
```

**返回**

- the new CompletionStage

> *Since 9*
