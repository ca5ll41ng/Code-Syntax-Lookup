---
id: "java-en-function-completablefuture-failedstage"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.failedStage"
signature: "public static <U> CompletionStage<U> failedStage(Throwable ex)"
title: "CompletableFuture.failedStage"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.failedStage

```java
public static <U> CompletionStage<U> failedStage(Throwable ex)
```

Returns a new CompletionStage that is already completed
 exceptionally with the given exception and supports only those
 methods in interface `CompletionStage`.

**参数**

- **ex** — the exception
- **the** — type of the value

**返回**

- the exceptionally completed CompletionStage

> *Since 9*
