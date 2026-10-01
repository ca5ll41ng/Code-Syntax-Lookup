---
id: "java-en-function-completionstage-thenapply"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.thenApply"
signature: "public <U> CompletionStage<U> thenApply(Function<? super T,? extends U> fn)"
title: "CompletionStage.thenApply"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.thenApply

```java
public <U> CompletionStage<U> thenApply(Function<? super T,? extends U> fn)
```

Returns a new CompletionStage that, when `this` stage completes
 normally, is executed with `this` stage's result as the argument
 to the supplied function.

 

This method is analogous to
 `map Optional.map` and
 `map Stream.map`.

 

See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **fn** — the function to use to compute the value of the returned CompletionStage
- **the** — function's return type

**返回**

- the new CompletionStage
