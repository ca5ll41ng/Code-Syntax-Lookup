---
id: "java-en-function-completablefuture-iscompletedexceptionally"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.isCompletedExceptionally"
signature: "public boolean isCompletedExceptionally()"
title: "CompletableFuture.isCompletedExceptionally"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.isCompletedExceptionally

```java
public boolean isCompletedExceptionally()
```

Returns `true` if this CompletableFuture completed
 exceptionally, in any way. Possible causes include
 cancellation, explicit invocation of `completeExceptionally`, and abrupt termination of a
 CompletionStage action.

**返回**

- `true` if this CompletableFuture completed exceptionally
