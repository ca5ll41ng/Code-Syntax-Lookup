---
id: "java-en-function-forkjoinpool-getqueuedsubmissioncount"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.getQueuedSubmissionCount"
signature: "public int getQueuedSubmissionCount()"
title: "ForkJoinPool.getQueuedSubmissionCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.getQueuedSubmissionCount

```java
public int getQueuedSubmissionCount()
```

Returns an estimate of the number of tasks submitted to this
 pool that have not yet begun executing.  This method may take
 time proportional to the number of submissions.

**返回**

- the number of queued submissions
