---
id: "java-en-function-futuretask-setexception"
language: "java"
lang: "en"
category: "function"
name: "FutureTask.setException"
signature: "protected void setException(Throwable t)"
title: "FutureTask.setException"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/FutureTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FutureTask.setException

```java
protected void setException(Throwable t)
```

Causes this future to report an `ExecutionException`
 with the given throwable as its cause, unless this future has
 already been set or has been cancelled.

 

This method is invoked internally by the `run` method
 upon failure of the computation.

**参数**

- **t** — the cause of failure
