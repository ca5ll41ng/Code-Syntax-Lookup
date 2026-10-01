---
id: "java-en-function-completionstage-thencomposeasync"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.thenComposeAsync"
signature: "public <U> CompletionStage<U> thenComposeAsync (Function<? super T, ? extends CompletionStage<U>> fn)"
title: "CompletionStage.thenComposeAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.thenComposeAsync

```java
public <U> CompletionStage<U> thenComposeAsync (Function<? super T, ? extends CompletionStage<U>> fn)
```

Returns a new CompletionStage that is completed with the same
 value as the CompletionStage returned by the given function,
 executed using `this` stage's default asynchronous execution
 facility.

 

When `this` stage completes normally, the given function is
 invoked with `this` stage's result as the argument, returning
 another CompletionStage.  When that stage completes normally,
 the CompletionStage returned is completed with
 the same value.

 

To ensure progress, the supplied function must arrange
 eventual completion of its result.

 

See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **fn** — the function to use to compute another CompletionStage
- **the** — type of the returned CompletionStage's result

**返回**

- the new CompletionStage
