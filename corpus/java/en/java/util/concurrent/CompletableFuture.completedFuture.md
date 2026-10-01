---
id: "java-en-function-completablefuture-completedfuture"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.completedFuture"
signature: "public static <U> CompletableFuture<U> completedFuture(U value)"
title: "CompletableFuture.completedFuture"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.completedFuture

```java
public static <U> CompletableFuture<U> completedFuture(U value)
```

Returns a new CompletableFuture that is already completed with
 the given value.

**参数**

- **value** — the value
- **the** — type of the value

**返回**

- the completed CompletableFuture
