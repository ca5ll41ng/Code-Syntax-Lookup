---
id: "java-en-function-completionstage-thenrunasync"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.thenRunAsync"
signature: "public CompletionStage<Void> thenRunAsync(Runnable action)"
title: "CompletionStage.thenRunAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.thenRunAsync

```java
public CompletionStage<Void> thenRunAsync(Runnable action)
```

Returns a new CompletionStage that, when `this` stage completes
 normally, executes the given action using `this` stage's default
 asynchronous execution facility.

 See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **action** — the action to perform before completing the returned CompletionStage

**返回**

- the new CompletionStage
