---
id: "java-en-function-threadpoolexecutor-shutdown"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.shutdown"
signature: "public void shutdown()"
title: "ThreadPoolExecutor.shutdown"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.shutdown

```java
public void shutdown()
```

Initiates an orderly shutdown in which previously submitted
 tasks are executed, but no new tasks will be accepted.
 Invocation has no additional effect if already shut down.

 

This method does not wait for previously submitted tasks to
 complete execution.  Use `awaitTermination awaitTermination`
 to do that.
