---
id: "java-en-function-structuredtaskscope-join"
language: "java"
lang: "en"
category: "function"
name: "StructuredTaskScope.join"
signature: "R join() throws R_X, InterruptedException"
title: "StructuredTaskScope.join"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StructuredTaskScope.join

```java
R join() throws R_X, InterruptedException
```

Returns a result, or throws, after waiting for all subtasks to complete or the
 scope to be `#Cancellation cancelled`.

 

 If the scope was opened with the `open` or `open`
 method, then `join()` waits for all subtasks to succeed or any subtask to fail.
 It returns `null` if all subtasks complete successfully. It throws `ExecutionException` if any subtask fails, with exception from the first subtask to
 fail as the `getCause() cause`. If a `withTimeout(Duration) timeout` is configured and the timeout expires
 before or while waiting, it throws `ExecutionException` with a `CancelledByTimeoutException CancelledByTimeoutException` as the cause.

 

 If the scope was opened with a `Joiner Joiner`, it is invoked after
 waiting or cancellation to produce the outcome (result or exception). This includes
 the timeout case where a timeout is configured and it expires before or
 while waiting in the `join()` method.

 

 This method may only be invoked by the scope owner. It may only be invoked once
 to get the result, exception or timeout outcome, unless the previous invocation
 resulted in an `InterruptedException` being thrown.

 

 **Joiner Implementers:**

 

 When all subtasks complete, or the scope cancelled, this method invokes the
 `Joiner`'s `result` or `timeout`
 method to produce the outcome (result or exception) for the `join()` method.
 The `result()` method is invoked for the "no timeout" case. The `timeout()`
 method is invoked for the timeout case. If the outcome for the timeout case is an
 exception then it is thrown with a `CancelledByTimeoutException` as the cause.

 stack trace` will be the stack trace of the call to the `join()` method.
 Its `getCause() cause` will typically be the exception
 thrown by a failed subtask with the stack trace of the failed subtask.

**返回**

- the result

**异常**

- **WrongThreadException** — if the current thread is not the scope owner
- **IllegalStateException** — if already joined or this scope is closed
- **R_X** — when the outcome is an exception
- **InterruptedException** — if the current thread is `interrupt() interrupted` while waiting or this method is invoked with the current thread's `isInterrupted() interrupted status` set. The current thread's interrupted status is cleared when this exception is thrown.

**参见**

- Thread##thread-interruption Thread Interruption

> *Since 25*
