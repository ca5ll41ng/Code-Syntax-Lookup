---
id: "java-en-function-completablefuture-delayedexecutor"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.delayedExecutor"
signature: "public static Executor delayedExecutor(long delay, TimeUnit unit, Executor executor)"
title: "CompletableFuture.delayedExecutor"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.delayedExecutor

```java
public static Executor delayedExecutor(long delay, TimeUnit unit, Executor executor)
```

Returns a new Executor that submits a task to the given base
 executor after the given delay (or no delay if non-positive).
 Each delay commences upon invocation of the returned executor's
 `execute` method.

**参数**

- **delay** — how long to delay, in units of `unit`
- **unit** — a `TimeUnit` determining how to interpret the `delay` parameter
- **executor** — the base executor

**返回**

- the new delayed executor

> *Since 9*
