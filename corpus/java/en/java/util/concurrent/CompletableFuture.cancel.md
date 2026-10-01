---
id: "java-en-function-completablefuture-cancel"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.cancel"
signature: "public boolean cancel(boolean mayInterruptIfRunning)"
title: "CompletableFuture.cancel"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.cancel

```java
public boolean cancel(boolean mayInterruptIfRunning)
```

If not already completed, completes this CompletableFuture with
 a `CancellationException`. Dependent CompletableFutures
 that have not already completed will also complete
 exceptionally, with a `CompletionException` caused by
 this `CancellationException`.

**参数**

- **mayInterruptIfRunning** — this value has no effect in this implementation because interrupts are not used to control processing.

**返回**

- `true` if this task is now cancelled
