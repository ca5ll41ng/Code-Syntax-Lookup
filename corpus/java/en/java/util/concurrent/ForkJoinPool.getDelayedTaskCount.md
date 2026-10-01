---
id: "java-en-function-forkjoinpool-getdelayedtaskcount"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.getDelayedTaskCount"
signature: "public long getDelayedTaskCount()"
title: "ForkJoinPool.getDelayedTaskCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.getDelayedTaskCount

```java
public long getDelayedTaskCount()
```

Returns an estimate of the number of delayed (including
 periodic) tasks scheduled in this pool that are not yet ready
 to submit for execution. The returned value is inaccurate while
 delayed tasks are being processed.

**返回**

- an estimate of the number of delayed tasks

> *Since 25*
