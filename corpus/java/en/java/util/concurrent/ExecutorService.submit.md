---
id: "java-en-function-executorservice-submit"
language: "java"
lang: "en"
category: "function"
name: "ExecutorService.submit"
signature: "<T> Future<T> submit(Callable<T> task)"
title: "ExecutorService.submit"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExecutorService.submit

```java
<T> Future<T> submit(Callable<T> task)
```

Submits a value-returning task for execution and returns a
 Future representing the pending results of the task. The
 Future's `get` method will return the task's result upon
 successful completion.

 

 If you would like to immediately block waiting
 for a task, you can use constructions of the form
 `result = exec.submit(aCallable).get();`

 

Note: The `Executors` class includes a set of methods
 that can convert some other common closure-like objects,
 for example, `java.security.PrivilegedAction` to
 `Callable` form so they can be submitted.

**参数**

- **task** — the task to submit
- **the** — type of the task's result

**返回**

- a Future representing pending completion of the task

**异常**

- **RejectedExecutionException** — if the task cannot be scheduled for execution
- **NullPointerException** — if the task is null
