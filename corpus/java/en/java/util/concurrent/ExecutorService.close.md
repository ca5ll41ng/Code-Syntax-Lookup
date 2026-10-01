---
id: "java-en-function-executorservice-close"
language: "java"
lang: "en"
category: "function"
name: "ExecutorService.close"
signature: "default void close()"
title: "ExecutorService.close"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExecutorService.close

```java
default void close()
```

Initiates an orderly shutdown in which previously submitted tasks are
 executed, but no new tasks will be accepted. This method waits until all
 tasks have completed execution and the executor has terminated.

 

 If interrupted while waiting, this method stops all executing tasks as
 if by invoking `shutdownNow`. It then continues to wait until all
 actively executing tasks have completed. Tasks that were awaiting
 execution are not executed. The interrupted status will be re-asserted
 before this method returns.

 

 If already terminated, invoking this method has no effect.

 The default implementation invokes `shutdown()` and waits for tasks
 to complete execution with `awaitTermination`.

> *Since 19*
