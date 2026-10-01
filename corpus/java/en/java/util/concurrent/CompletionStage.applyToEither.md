---
id: "java-en-function-completionstage-applytoeither"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.applyToEither"
signature: "public <U> CompletionStage<U> applyToEither (CompletionStage<? extends T> other, Function<? super T, U> fn)"
title: "CompletionStage.applyToEither"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.applyToEither

```java
public <U> CompletionStage<U> applyToEither (CompletionStage<? extends T> other, Function<? super T, U> fn)
```

Returns a new CompletionStage that, when either `this` or the
 other given stage complete normally, is executed with the
 corresponding result as argument to the supplied function.

 See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **other** — the other CompletionStage
- **fn** — the function to use to compute the value of the returned CompletionStage
- **the** — function's return type

**返回**

- the new CompletionStage
