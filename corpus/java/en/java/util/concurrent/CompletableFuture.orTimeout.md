---
id: "java-en-function-completablefuture-ortimeout"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.orTimeout"
signature: "public CompletableFuture<T> orTimeout(long timeout, TimeUnit unit)"
title: "CompletableFuture.orTimeout"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.orTimeout

```java
public CompletableFuture<T> orTimeout(long timeout, TimeUnit unit)
```

Exceptionally completes this CompletableFuture with
 a `TimeoutException` if not otherwise completed
 before the given timeout elapsed.

**参数**

- **timeout** — how long to wait before completing exceptionally with a TimeoutException, in units of `unit`
- **unit** — a `TimeUnit` determining how to interpret the `timeout` parameter

**返回**

- this CompletableFuture

> *Since 9*
