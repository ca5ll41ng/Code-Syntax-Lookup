---
id: "java-en-function-completionstage-handle"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.handle"
signature: "public <U> CompletionStage<U> handle (BiFunction<? super T, Throwable, ? extends U> fn)"
title: "CompletionStage.handle"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.handle

```java
public <U> CompletionStage<U> handle (BiFunction<? super T, Throwable, ? extends U> fn)
```

Returns a new CompletionStage that, when `this` stage completes
 either normally or exceptionally, is executed with `this` stage's
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
