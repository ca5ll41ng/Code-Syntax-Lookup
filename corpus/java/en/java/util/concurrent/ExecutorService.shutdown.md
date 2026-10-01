---
id: "java-en-function-executorservice-shutdown"
language: "java"
lang: "en"
category: "function"
name: "ExecutorService.shutdown"
signature: "void shutdown()"
title: "ExecutorService.shutdown"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExecutorService.shutdown

```java
void shutdown()
```

Initiates an orderly shutdown in which previously submitted
 tasks are executed, but no new tasks will be accepted.
 Invocation has no additional effect if already shut down.

 

This method does not wait for previously submitted tasks to
 complete execution.  Use `awaitTermination awaitTermination`
 to do that.
