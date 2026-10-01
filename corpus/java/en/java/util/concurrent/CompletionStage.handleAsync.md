---
id: "java-en-function-completionstage-handleasync"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.handleAsync"
signature: "public <U> CompletionStage<U> handleAsync (BiFunction<? super T, Throwable, ? extends U> fn)"
title: "CompletionStage.handleAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.handleAsync

```java
public <U> CompletionStage<U> handleAsync (BiFunction<? super T, Throwable, ? extends U> fn)
```

Returns a new CompletionStage that, when `this` stage completes
 either normally or exceptionally, is executed using `this` stage's
 default asynchronous execution facility, with `this` stage's
 result and exception as arguments to the supplied function.

 

When `this` stage is complete, the given function is invoked
 with the result (or `null` if none) and the exception (or
 `null` if none) of `this` stage as arguments, and the
 function's result is used to complete the returned stage.

**参数**

- **fn** — the function to use to compute the value of the returned CompletionStage
- **the** — function's return type

**返回**

- the new CompletionStage
