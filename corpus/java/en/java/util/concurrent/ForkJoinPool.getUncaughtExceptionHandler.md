---
id: "java-en-function-forkjoinpool-getuncaughtexceptionhandler"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.getUncaughtExceptionHandler"
signature: "public UncaughtExceptionHandler getUncaughtExceptionHandler()"
title: "ForkJoinPool.getUncaughtExceptionHandler"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.getUncaughtExceptionHandler

```java
public UncaughtExceptionHandler getUncaughtExceptionHandler()
```

Returns the handler for internal worker threads that terminate
 due to unrecoverable errors encountered while executing tasks.

**返回**

- the handler, or `null` if none
