---
id: "java-en-function-completionstage-exceptionallyasync"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.exceptionallyAsync"
signature: "public default CompletionStage<T> exceptionallyAsync (Function<Throwable, ? extends T> fn)"
title: "CompletionStage.exceptionallyAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.exceptionallyAsync

```java
public default CompletionStage<T> exceptionallyAsync (Function<Throwable, ? extends T> fn)
```

Returns a new CompletionStage that, when `this` stage completes
 exceptionally, is executed with `this` stage's exception as the
 argument to the supplied function, using `this` stage's default
 asynchronous execution facility.  Otherwise, if `this` stage
 completes normally, then the returned stage also completes
 normally with the same value.

 relaying to `handleAsync` on exception, then `thenCompose` for result.

**参数**

- **fn** — the function to use to compute the value of the returned CompletionStage if `this` CompletionStage completed exceptionally

**返回**

- the new CompletionStage

> *Since 12*
