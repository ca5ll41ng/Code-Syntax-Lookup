---
id: "java-en-function-completablefuture-completeontimeout"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.completeOnTimeout"
signature: "public CompletableFuture<T> completeOnTimeout(T value, long timeout, TimeUnit unit)"
title: "CompletableFuture.completeOnTimeout"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.completeOnTimeout

```java
public CompletableFuture<T> completeOnTimeout(T value, long timeout, TimeUnit unit)
```

Completes this CompletableFuture with the given value if not
 otherwise completed before the given timeout elapsed.

**参数**

- **value** — the value to use upon timeout
- **timeout** — how long to wait before completing normally with the given value, in units of `unit`
- **unit** — a `TimeUnit` determining how to interpret the `timeout` parameter

**返回**

- this CompletableFuture

> *Since 9*
