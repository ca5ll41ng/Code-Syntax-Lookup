---
id: "java-en-function-forkjoinpool-draintasksto"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.drainTasksTo"
signature: "protected int drainTasksTo(Collection<? super ForkJoinTask<?>> c)"
title: "ForkJoinPool.drainTasksTo"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.drainTasksTo

```java
protected int drainTasksTo(Collection<? super ForkJoinTask<?>> c)
```

Removes all available unexecuted submitted and forked tasks
 from scheduling queues and adds them to the given collection,
 without altering their execution status. These may include
 artificially generated or wrapped tasks. This method is
 designed to be invoked only when the pool is known to be
 quiescent. Invocations at other times may not remove all
 tasks. A failure encountered while attempting to add elements
 to collection `c` may result in elements being in
 neither, either or both collections when the associated
 exception is thrown.  The behavior of this operation is
 undefined if the specified collection is modified while the
 operation is in progress.

**参数**

- **c** — the collection to transfer elements into

**返回**

- the number of elements transferred
