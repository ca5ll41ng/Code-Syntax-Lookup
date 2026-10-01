---
id: "java-en-function-completionstage-thenrun"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.thenRun"
signature: "public CompletionStage<Void> thenRun(Runnable action)"
title: "CompletionStage.thenRun"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.thenRun

```java
public CompletionStage<Void> thenRun(Runnable action)
```

Returns a new CompletionStage that, when `this` stage completes
 normally, executes the given action.

 See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **action** — the action to perform before completing the returned CompletionStage

**返回**

- the new CompletionStage
