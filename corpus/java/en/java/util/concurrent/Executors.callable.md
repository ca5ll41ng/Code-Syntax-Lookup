---
id: "java-en-function-executors-callable"
language: "java"
lang: "en"
category: "function"
name: "Executors.callable"
signature: "public static <T> Callable<T> callable(Runnable task, T result)"
title: "Executors.callable"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.callable

```java
public static <T> Callable<T> callable(Runnable task, T result)
```

Returns a `Callable` object that, when
 called, runs the given task and returns the given result.  This
 can be useful when applying methods requiring a
 `Callable` to an otherwise resultless action.

**参数**

- **task** — the task to run
- **result** — the result to return
- **the** — type of the result

**返回**

- a callable object

**异常**

- **NullPointerException** — if task null
