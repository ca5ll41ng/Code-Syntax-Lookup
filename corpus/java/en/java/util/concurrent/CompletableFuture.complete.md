---
id: "java-en-function-completablefuture-complete"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.complete"
signature: "public boolean complete(T value)"
title: "CompletableFuture.complete"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.complete

```java
public boolean complete(T value)
```

If not already completed, sets the value returned by `get` and related methods to the given value.

**参数**

- **value** — the result value

**返回**

- `true` if this invocation caused this CompletableFuture to transition to a completed state, else `false`
