---
id: "java-en-function-structuredtaskscope-fork"
language: "java"
lang: "en"
category: "function"
name: "StructuredTaskScope.fork"
signature: "<U extends T> Subtask<U> fork(Callable<? extends U> task)"
title: "StructuredTaskScope.fork"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StructuredTaskScope.fork

```java
<U extends T> Subtask<U> fork(Callable<? extends U> task)
```

Forks a subtask by starting a new thread in this scope to execute a value-returning
 method. The new thread executes the subtask concurrently with the current thread.
 The parameter to this method is a `Callable`, the new thread executes its
 `call` method. The thread inherits the current thread's
 `ScopedValue scoped value bindings` that must match the bindings
 captured when the scope was opened.

 

 If the scope was opened with a function to produce the `Configuration
 Configuration` for the scope, and a `ThreadFactory` is `withThreadFactory(ThreadFactory) set`, then its `newThread` method is invoked to create
 the thread that will execute the subtask. `RejectedExecutionException` is
 thrown if the `newThread(Runnable)` method returns `null`.
 If a `ThreadFactory` is not set, the `fork(Callable)` method creates an
 unnamed `#virtual-threads virtual thread` to execute the subtask.

 

 This method returns a `Subtask Subtask` object as a handle to the
 forked subtask. If the scope is `#Cancellation cancelled`, the
 `Subtask` is returned in the `UNAVAILABLE UNAVAILABLE`
 state without creating a thread. In some usages, `Subtask` object will be used
 by the "main" task (the scope owner) to get the subtask's outcome (result or
 exception) after it has invoked `join` to wait for all subtasks to
 complete. In other usages, the scope is created with a `Joiner Joiner` that
 produces the outcome for the main task to process after joining. A `Joiner`
 that produces a result reduces the need for bookkeeping and the need for the
 main task to retain references to `Subtask` objects for correlation purposes.

 

 To ensure correct usage, the `get` method may
 only be called by the scope owner to get the result of a successful subtask after
 it has waited for subtasks to complete with the `join` method.
 Similarly, the `exception` method may only be
 called by the scope owner to get the exception (or error) of a failed subtask after
 it has joined.

 

 This method may only be invoked by the scope owner.

 

 **Joiner Implementers:**

 

 If the scope was opened with a `Joiner Joiner`, its `onFork` method is invoked with the newly created
 `Subtask` object before the thread is created. It is invoked with the subtask
 in the `UNAVAILABLE` state. If the method throws an exception or error then
 it is propagated by the `fork(Callable)` method without creating a thread to
 execute the subtask. If the scope is not already cancelled, and the `onFork`
 method return `false`, then a thread is created and `start()
 scheduled` to start execution of the subtask. If the scope is cancelled, or the
 `onFork` method returns `true` to cancel the scope, `fork(Callable)`
 returns the subtask in the `UNAVAILABLE` state.

 

 If the subtask executes and completes (successfully or with an exception) before
 the scope is cancelled, then the thread invokes the Joiner's `onComplete` method with the subtask in the
 `SUCCESS SUCCESS` or `FAILED FAILED` state.
 If the `onComplete(Subtask`) method returns `true` then the scope is
 cancelled, if not already cancelled. If the `onComplete(Subtask)` method
 completes with an exception or error, then the thread executes the `Thread.UncaughtExceptionHandler uncaught exception handler` before the thread
 terminates.

**参数**

- **task** — the value-returning task for the thread to execute
- **the** — result type

**返回**

- the subtask

**异常**

- **WrongThreadException** — if the current thread is not the scope owner
- **IllegalStateException** — if the owner has already `join() joined` or the scope is closed
- **StructureViolationException** — if the current scoped value bindings are not the same as when the scope was created
- **RejectedExecutionException** — if the thread factory rejected creating a thread to execute the subtask

**参见**

- Thread##inheritance Inheritance When Creating Threads
