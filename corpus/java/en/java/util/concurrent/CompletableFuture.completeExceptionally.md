---
id: "java-en-function-completablefuture-completeexceptionally"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.completeExceptionally"
signature: "public boolean completeExceptionally(Throwable ex)"
title: "CompletableFuture.completeExceptionally"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.completeExceptionally

```java
public boolean completeExceptionally(Throwable ex)
```

If not already completed, causes invocations of `get`
 and related methods to throw the given exception.

**参数**

- **ex** — the exception

**返回**

- `true` if this invocation caused this CompletableFuture to transition to a completed state, else `false`
