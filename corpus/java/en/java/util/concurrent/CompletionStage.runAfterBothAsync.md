---
id: "java-en-function-completionstage-runafterbothasync"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.runAfterBothAsync"
signature: "public CompletionStage<Void> runAfterBothAsync(CompletionStage<?> other, Runnable action)"
title: "CompletionStage.runAfterBothAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.runAfterBothAsync

```java
public CompletionStage<Void> runAfterBothAsync(CompletionStage<?> other, Runnable action)
```

Returns a new CompletionStage that, when `this` and the other
 given stage both complete normally, executes the given action
 using `this` stage's default asynchronous execution facility.

 See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **other** — the other CompletionStage
- **action** — the action to perform before completing the returned CompletionStage

**返回**

- the new CompletionStage
