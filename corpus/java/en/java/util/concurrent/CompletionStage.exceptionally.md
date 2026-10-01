---
id: "java-en-function-completionstage-exceptionally"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.exceptionally"
signature: "public CompletionStage<T> exceptionally (Function<Throwable, ? extends T> fn)"
title: "CompletionStage.exceptionally"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.exceptionally

```java
public CompletionStage<T> exceptionally (Function<Throwable, ? extends T> fn)
```

Returns a new CompletionStage that, when `this` stage completes
 exceptionally, is executed with `this` stage's exception as the
 argument to the supplied function.  Otherwise, if `this` stage
 completes normally, then the returned stage also completes
 normally with the same value.

**参数**

- **fn** — the function to use to compute the value of the returned CompletionStage if `this` CompletionStage completed exceptionally

**返回**

- the new CompletionStage
