---
id: "java-en-function-forkjoinworkerthreadfactory-newthread"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinWorkerThreadFactory.newThread"
signature: "public ForkJoinWorkerThread newThread(ForkJoinPool pool)"
title: "ForkJoinWorkerThreadFactory.newThread"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinWorkerThreadFactory.newThread

```java
public ForkJoinWorkerThread newThread(ForkJoinPool pool)
```

Returns a new worker thread operating in the given pool.
 Returning null or throwing an exception may result in tasks
 never being executed.  If this method throws an exception,
 it is relayed to the caller of the method (for example
 `execute`) causing attempted thread creation. If this
 method returns null or throws an exception, it is not
 retried until the next attempted creation (for example
 another call to `execute`).

**参数**

- **pool** — the pool this thread works in

**返回**

- the new worker thread, or `null` if the request to create a thread is rejected

**异常**

- **NullPointerException** — if the pool is null
