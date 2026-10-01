---
id: "java-en-function-forkjoinpool-shutdown"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.shutdown"
signature: "public void shutdown()"
title: "ForkJoinPool.shutdown"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.shutdown

```java
public void shutdown()
```

Possibly initiates an orderly shutdown in which previously
 submitted tasks are executed, but no new tasks will be
 accepted. Invocation has no effect on execution state if this
 is the `commonPool`, and no additional effect if
 already shut down.  Tasks that are in the process of being
 submitted concurrently during the course of this method may or
 may not be rejected.
