---
id: "java-en-function-completablefuture-failedfuture"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.failedFuture"
signature: "public static <U> CompletableFuture<U> failedFuture(Throwable ex)"
title: "CompletableFuture.failedFuture"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.failedFuture

```java
public static <U> CompletableFuture<U> failedFuture(Throwable ex)
```

Returns a new CompletableFuture that is already completed
 exceptionally with the given exception.

**参数**

- **ex** — the exception
- **the** — type of the value

**返回**

- the exceptionally completed CompletableFuture

> *Since 9*
