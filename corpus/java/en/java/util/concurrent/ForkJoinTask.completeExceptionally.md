---
id: "java-en-function-forkjointask-completeexceptionally"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.completeExceptionally"
signature: "public void completeExceptionally(Throwable ex)"
title: "ForkJoinTask.completeExceptionally"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.completeExceptionally

```java
public void completeExceptionally(Throwable ex)
```

Completes this task abnormally, and if not already aborted or
 cancelled, causes it to throw the given exception upon
 `join` and related operations. This method may be used
 to induce exceptions in asynchronous tasks, or to force
 completion of tasks that would not otherwise complete.  Its use
 in other situations is discouraged.  This method is
 overridable, but overridden versions must invoke `super`
 implementation to maintain guarantees.

**参数**

- **ex** — the exception to throw. If this exception is not a `RuntimeException` or `Error`, the actual exception thrown will be a `RuntimeException` with cause `ex`.
