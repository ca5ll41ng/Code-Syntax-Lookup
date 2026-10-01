---
id: "java-en-function-completionstage-accepteitherasync"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.acceptEitherAsync"
signature: "public CompletionStage<Void> acceptEitherAsync (CompletionStage<? extends T> other, Consumer<? super T> action)"
title: "CompletionStage.acceptEitherAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.acceptEitherAsync

```java
public CompletionStage<Void> acceptEitherAsync (CompletionStage<? extends T> other, Consumer<? super T> action)
```

Returns a new CompletionStage that, when either `this` or the
 other given stage complete normally, is executed using `this`
 stage's default asynchronous execution facility, with the
 corresponding result as argument to the supplied action.

 See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **other** — the other CompletionStage
- **action** — the action to perform before completing the returned CompletionStage

**返回**

- the new CompletionStage
