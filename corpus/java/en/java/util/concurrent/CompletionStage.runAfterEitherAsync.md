---
id: "java-en-function-completionstage-runaftereitherasync"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.runAfterEitherAsync"
signature: "public CompletionStage<Void> runAfterEitherAsync (CompletionStage<?> other, Runnable action)"
title: "CompletionStage.runAfterEitherAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.runAfterEitherAsync

```java
public CompletionStage<Void> runAfterEitherAsync (CompletionStage<?> other, Runnable action)
```

Returns a new CompletionStage that, when either `this` or the
 other given stage complete normally, executes the given action
 using `this` stage's default asynchronous execution facility.

 See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **other** — the other CompletionStage
- **action** — the action to perform before completing the returned CompletionStage

**返回**

- the new CompletionStage
