---
id: "java-en-function-forkjointask-getexception"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.getException"
signature: "public final Throwable getException()"
title: "ForkJoinTask.getException"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.getException

```java
public final Throwable getException()
```

Returns the exception thrown by the base computation, or a
 `CancellationException` if cancelled, or `null` if
 none or if the method has not yet completed.

**返回**

- the exception, or `null` if none
