---
id: "java-en-function-forkjoinpool-submitwithtimeout"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.submitWithTimeout"
signature: "public <V> ForkJoinTask<V> submitWithTimeout(Callable<V> callable, long timeout, TimeUnit unit, Consumer<? super ForkJoinTask<V>> timeoutAction)"
title: "ForkJoinPool.submitWithTimeout"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.submitWithTimeout

```java
public <V> ForkJoinTask<V> submitWithTimeout(Callable<V> callable, long timeout, TimeUnit unit, Consumer<? super ForkJoinTask<V>> timeoutAction)
```

Submits a task executing the given function, cancelling the
 task or performing a given timeoutAction if not completed
 within the given timeout period. If the optional `timeoutAction` is null, the task is cancelled (via `cancel(true)`.  Otherwise, the action is applied and the task
 may be interrupted if running. Actions may include `complete` to set a replacement value or `completeExceptionally` to throw an appropriate
 exception. Note that these can succeed only if the task has
 not already completed when the timeoutAction executes.

**参数**

- **callable** — the function to execute
- **the** — type of the callable's result
- **timeout** — the time to wait before cancelling if not completed
- **timeoutAction** — if nonnull, an action to perform on timeout, otherwise the default action is to cancel using `cancel(true)`.
- **unit** — the time unit of the timeout parameter

**返回**

- a Future that can be used to extract result or cancel

**异常**

- **RejectedExecutionException** — if the task cannot be scheduled for execution
- **NullPointerException** — if callable or unit is null

> *Since 25*
