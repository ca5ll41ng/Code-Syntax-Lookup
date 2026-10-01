---
id: "java-en-function-completionstage-runafterboth"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.runAfterBoth"
signature: "public CompletionStage<Void> runAfterBoth(CompletionStage<?> other, Runnable action)"
title: "CompletionStage.runAfterBoth"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.runAfterBoth

```java
public CompletionStage<Void> runAfterBoth(CompletionStage<?> other, Runnable action)
```

Returns a new CompletionStage that, when `this` and the other
 given stage both complete normally, executes the given action.

 See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **other** — the other CompletionStage
- **action** — the action to perform before completing the returned CompletionStage

**返回**

- the new CompletionStage
