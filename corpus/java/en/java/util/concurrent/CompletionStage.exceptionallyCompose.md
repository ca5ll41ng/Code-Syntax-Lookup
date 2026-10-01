---
id: "java-en-function-completionstage-exceptionallycompose"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.exceptionallyCompose"
signature: "public default CompletionStage<T> exceptionallyCompose (Function<Throwable, ? extends CompletionStage<T>> fn)"
title: "CompletionStage.exceptionallyCompose"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.exceptionallyCompose

```java
public default CompletionStage<T> exceptionallyCompose (Function<Throwable, ? extends CompletionStage<T>> fn)
```

Returns a new CompletionStage that, when `this` stage completes
 exceptionally, is composed using the results of the supplied
 function applied to `this` stage's exception.

 invoking the given function on exception, then `thenCompose` for result.

**参数**

- **fn** — the function to use to compute the returned CompletionStage if `this` CompletionStage completed exceptionally

**返回**

- the new CompletionStage

> *Since 12*
