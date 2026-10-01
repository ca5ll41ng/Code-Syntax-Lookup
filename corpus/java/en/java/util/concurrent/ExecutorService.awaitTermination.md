---
id: "java-en-function-executorservice-awaittermination"
language: "java"
lang: "en"
category: "function"
name: "ExecutorService.awaitTermination"
signature: "boolean awaitTermination(long timeout, TimeUnit unit) throws InterruptedException"
title: "ExecutorService.awaitTermination"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExecutorService.awaitTermination

```java
boolean awaitTermination(long timeout, TimeUnit unit) throws InterruptedException
```

Blocks until all tasks have completed execution after a shutdown
 request, or the timeout occurs, or the current thread is
 interrupted, whichever happens first.

**参数**

- **timeout** — the maximum time to wait
- **unit** — the time unit of the timeout argument

**返回**

- `true` if this executor terminated and `false` if the timeout elapsed before termination

**异常**

- **InterruptedException** — if interrupted while waiting
