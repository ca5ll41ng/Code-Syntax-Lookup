---
id: "java-en-function-forkjoinpool-getstealcount"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.getStealCount"
signature: "public long getStealCount()"
title: "ForkJoinPool.getStealCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.getStealCount

```java
public long getStealCount()
```

Returns an estimate of the total number of completed tasks that
 were executed by a thread other than their submitter. The
 reported value underestimates the actual total number of steals
 when the pool is not quiescent. This value may be useful for
 monitoring and tuning fork/join programs: in general, steal
 counts should be high enough to keep threads busy, but low
 enough to avoid overhead and contention across threads.

**返回**

- the number of steals
