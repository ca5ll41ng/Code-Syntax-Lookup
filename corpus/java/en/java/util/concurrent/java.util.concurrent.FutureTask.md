---
id: "java-en-function-java-util-concurrent-futuretask"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.FutureTask"
title: "FutureTask"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/FutureTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FutureTask

A cancellable asynchronous computation.  This class provides a base
 implementation of `Future`, with methods to start and cancel
 a computation, query to see if the computation is complete, and
 retrieve the result of the computation.  The result can only be
 retrieved when the computation has completed; the `get`
 methods will block if the computation has not yet completed.  Once
 the computation has completed, the computation cannot be restarted
 or cancelled (unless the computation is invoked using
 `runAndReset`).

 

A `FutureTask` can be used to wrap a `Callable` or
 `Runnable` object.  Because `FutureTask` implements
 `Runnable`, a `FutureTask` can be submitted to an
 `Executor` for execution.

 

In addition to serving as a standalone class, this class provides
 `protected` functionality that may be useful when creating
 customized task classes.

**参数**

- **The** — result type returned by this FutureTask's `get` methods

> *Since 1.5*
