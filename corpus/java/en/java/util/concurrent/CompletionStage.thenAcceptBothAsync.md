---
id: "java-en-function-completionstage-thenacceptbothasync"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.thenAcceptBothAsync"
signature: "public <U> CompletionStage<Void> thenAcceptBothAsync (CompletionStage<? extends U> other, BiConsumer<? super T, ? super U> action)"
title: "CompletionStage.thenAcceptBothAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.thenAcceptBothAsync

```java
public <U> CompletionStage<Void> thenAcceptBothAsync (CompletionStage<? extends U> other, BiConsumer<? super T, ? super U> action)
```

Returns a new CompletionStage that, when `this` and the other
 given stage both complete normally, is executed using `this`
 stage's default asynchronous execution facility, with the two
 results as arguments to the supplied action.

 See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **other** — the other CompletionStage
- **action** — the action to perform before completing the returned CompletionStage
- **the** — type of the other CompletionStage's result

**返回**

- the new CompletionStage
