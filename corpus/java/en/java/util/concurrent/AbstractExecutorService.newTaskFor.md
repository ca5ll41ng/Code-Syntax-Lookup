---
id: "java-en-function-abstractexecutorservice-newtaskfor"
language: "java"
lang: "en"
category: "function"
name: "AbstractExecutorService.newTaskFor"
signature: "protected <T> RunnableFuture<T> newTaskFor(Runnable runnable, T value)"
title: "AbstractExecutorService.newTaskFor"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/AbstractExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractExecutorService.newTaskFor

```java
protected <T> RunnableFuture<T> newTaskFor(Runnable runnable, T value)
```

Returns a `RunnableFuture` for the given runnable and default
 value.

**参数**

- **runnable** — the runnable task being wrapped
- **value** — the default value for the returned future
- **the** — type of the given value

**返回**

- a `RunnableFuture` which, when run, will run the underlying runnable and which, as a `Future`, will yield the given value as its result and provide for cancellation of the underlying task

> *Since 1.6*
