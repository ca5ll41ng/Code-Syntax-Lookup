---
id: "java-en-function-completionstage-thenacceptasync"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.thenAcceptAsync"
signature: "public CompletionStage<Void> thenAcceptAsync(Consumer<? super T> action)"
title: "CompletionStage.thenAcceptAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.thenAcceptAsync

```java
public CompletionStage<Void> thenAcceptAsync(Consumer<? super T> action)
```

Returns a new CompletionStage that, when `this` stage completes
 normally, is executed using `this` stage's default asynchronous
 execution facility, with `this` stage's result as the argument to
 the supplied action.

 See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **action** — the action to perform before completing the returned CompletionStage

**返回**

- the new CompletionStage
