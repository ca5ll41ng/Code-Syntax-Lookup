---
id: "java-en-function-completablefuture-completedstage"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.completedStage"
signature: "public static <U> CompletionStage<U> completedStage(U value)"
title: "CompletableFuture.completedStage"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.completedStage

```java
public static <U> CompletionStage<U> completedStage(U value)
```

Returns a new CompletionStage that is already completed with
 the given value and supports only those methods in
 interface `CompletionStage`.

**参数**

- **value** — the value
- **the** — type of the value

**返回**

- the completed CompletionStage

> *Since 9*
