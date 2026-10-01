---
id: "java-en-function-java-util-concurrent-threadpoolexecutor-discardoldestpolicy"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ThreadPoolExecutor.DiscardOldestPolicy"
title: "DiscardOldestPolicy"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DiscardOldestPolicy

A handler for rejected tasks that discards the oldest unhandled
 request and then retries `execute`, unless the executor
 is shut down, in which case the task is discarded. This policy is
 rarely useful in cases where other threads may be waiting for
 tasks to terminate, or failures must be recorded. Instead consider
 using a handler of the form:
 
```
 `new RejectedExecutionHandler() {
   public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
     Runnable dropped = e.getQueue().poll();
     if (dropped instanceof Future<?>) {
       ((Future<?>)dropped).cancel(false);
       // also consider logging the failure
     `
     e.execute(r);  // retry
 }}}
```
