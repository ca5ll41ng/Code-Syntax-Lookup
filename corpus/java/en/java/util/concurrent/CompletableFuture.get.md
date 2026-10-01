---
id: "java-en-function-completablefuture-get"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.get"
signature: "public T get() throws InterruptedException, ExecutionException"
title: "CompletableFuture.get"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.get

```java
public T get() throws InterruptedException, ExecutionException
```

Waits if necessary for this future to complete, and then
 returns its result.

**返回**

- the result value

**异常**

- **CancellationException** — if this future was cancelled
- **ExecutionException** — if this future completed exceptionally
- **InterruptedException** — if the current thread was interrupted while waiting
