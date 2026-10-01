---
id: "java-en-function-completionstage-thencompose"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.thenCompose"
signature: "public <U> CompletionStage<U> thenCompose (Function<? super T, ? extends CompletionStage<U>> fn)"
title: "CompletionStage.thenCompose"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.thenCompose

```java
public <U> CompletionStage<U> thenCompose (Function<? super T, ? extends CompletionStage<U>> fn)
```

Returns a new CompletionStage that is completed with the same
 value as the CompletionStage returned by the given function.

 

When `this` stage completes normally, the given function is
 invoked with `this` stage's result as the argument, returning
 another CompletionStage.  When that stage completes normally,
 the CompletionStage returned is completed with
 the same value.

 

To ensure progress, the supplied function must arrange
 eventual completion of its result.

 

This method is analogous to
 `flatMap Optional.flatMap` and
 `flatMap Stream.flatMap`.

 

See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **fn** — the function to use to compute another CompletionStage
- **the** — type of the returned CompletionStage's result

**返回**

- the new CompletionStage
