---
id: "java-en-function-forkjointask-pollsubmission"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.pollSubmission"
signature: "protected static ForkJoinTask<?> pollSubmission()"
title: "ForkJoinTask.pollSubmission"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.pollSubmission

```java
protected static ForkJoinTask<?> pollSubmission()
```

If the current thread is operating in a ForkJoinPool,
 unschedules and returns, without executing, a task externally
 submitted to the pool, if one is available. Availability may be
 transient, so a `null` result does not necessarily imply
 quiescence of the pool.  This method is designed primarily to
 support extensions, and is unlikely to be useful otherwise.

**返回**

- a task, or `null` if none are available

> *Since 9*
