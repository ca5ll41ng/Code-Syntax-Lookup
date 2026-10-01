---
id: "java-en-function-forkjoinworkerthread-forkjoinworkerthread"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinWorkerThread.ForkJoinWorkerThread"
signature: "protected ForkJoinWorkerThread(ThreadGroup group, ForkJoinPool pool, boolean preserveThreadLocals)"
title: "ForkJoinWorkerThread.ForkJoinWorkerThread"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinWorkerThread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinWorkerThread.ForkJoinWorkerThread

```java
protected ForkJoinWorkerThread(ThreadGroup group, ForkJoinPool pool, boolean preserveThreadLocals)
```

Creates a ForkJoinWorkerThread operating in the given thread group and
 pool, and with the given policy for preserving ThreadLocals.

**参数**

- **group** — if non-null, the thread group for this thread. Otherwise, the thread group is set to the current thread's thread group.
- **pool** — the pool this thread works in
- **preserveThreadLocals** — if true, always preserve the values of ThreadLocal variables across tasks; otherwise they may be cleared.

**异常**

- **NullPointerException** — if pool is null

> *Since 19*
