---
id: "java-en-function-forkjoinpool-close"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.close"
signature: "public void close()"
title: "ForkJoinPool.close"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.close

```java
public void close()
```

Unless this is the `commonPool`, initiates an orderly
 shutdown in which previously submitted tasks are executed, but
 no new tasks will be accepted, and waits until all tasks have
 completed execution and the executor has terminated.

 

 If already terminated, or this is the `commonPool`, this method has no effect on execution, and
 does not wait. Otherwise, if interrupted while waiting, this
 method stops all executing tasks as if by invoking `shutdownNow`. It then continues to wait until all actively
 executing tasks have completed. Tasks that were awaiting
 execution are not executed. The interrupted status will be
 re-asserted before this method returns.

> *Since 19*
