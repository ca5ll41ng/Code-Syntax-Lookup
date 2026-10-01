---
id: "java-en-function-future-exceptionnow"
language: "java"
lang: "en"
category: "function"
name: "Future.exceptionNow"
signature: "default Throwable exceptionNow()"
title: "Future.exceptionNow"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Future.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Future.exceptionNow

```java
default Throwable exceptionNow()
```

Returns the exception thrown by the task, without waiting.

 

 This method is for cases where the caller knows that the task
 has already completed with an exception.

 The default implementation invokes `isDone()` to test if the task
 has completed. If done and not cancelled, it invokes `get()` and
 catches the `ExecutionException` to obtain the exception.

**返回**

- the exception thrown by the task

**异常**

- **IllegalStateException** — if the task has not completed, the task completed normally, or the task was cancelled

> *Since 19*
