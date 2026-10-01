---
id: "java-en-function-java-util-concurrent-future"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.Future"
title: "Future"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Future.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Future

A `Future` represents the result of an asynchronous
 computation.  Methods are provided to check if the computation is
 complete, to wait for its completion, and to retrieve the result of
 the computation.  The result can only be retrieved using method
 `get` when the computation has completed, blocking if
 necessary until it is ready.  Cancellation is performed by the
 `cancel` method.  Additional methods are provided to
 determine if the task completed normally or was cancelled. Once a
 computation has completed, the computation cannot be cancelled.
 If you would like to use a `Future` for the sake
 of cancellability but not provide a usable result, you can
 declare types of the form `Future<?>` and
 return `null` as a result of the underlying task.

 

Cancellation of a Future need not abruptly terminate its
 computation. Method `cancel` causes `isCancelled()` to
 return `true` unless already `isDone()`; in either case
 `isDone()` subsequently reports `true`. This suppresses
 execution by an `ExecutorService` if not already started.
 There are several options for suppressing unnecessary computation
 or unblocking a running Future that will not generate a
 result. When task bodies are simple and short, no special attention
 is warranted.  Computational methods in Future-aware code bodies
 (for example `ForkJoinTask`, `FutureTask`) may inspect
 their own `isDone()` status before or while engaging in
 expensive computations. In blocking I/O or communication contexts,
 the optional `mayInterruptIfRunning` argument of `cancel` may be used to support conventions that tasks should
 unblock and exit when `interrupted`, whether checked
 inside a task body or as a response to an `InterruptedException`.  It is still preferable to additionally
 check `isDone()` status when possible to avoid unintended
 effects of other uses of `interrupt`.

 

**Sample Usage** (Note that the following classes are all
 made-up.)

 
```
 `interface ArchiveSearcher { String search(String target); `
 class App {
   ExecutorService executor = ...;
   ArchiveSearcher searcher = ...;
   void showSearch(String target) throws InterruptedException {
     Callable task = () -> searcher.search(target);
     Future future = executor.submit(task);
     displayOtherThings(); // do other things while searching
     try {
       displayText(future.get()); // use future
     } catch (ExecutionException ex) { cleanup(); return; }
   }
 }}
```

 The `FutureTask` class is an implementation of `Future` that
 implements `Runnable`, and so may be executed by an `Executor`.
 For example, the above construction with `submit` could be replaced by:
 
```
 `FutureTask future = new FutureTask<>(task);
 executor.execute(future);`
```

 

Memory consistency effects: Actions taken by the asynchronous computation
  happen-before
 actions following the corresponding `Future.get()` in another thread.

**参数**

- **The** — result type returned by this Future's `get` method

**参见**

- FutureTask
- Executor

> *Since 1.5*
