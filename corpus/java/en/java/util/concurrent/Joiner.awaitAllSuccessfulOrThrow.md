---
id: "java-en-function-joiner-awaitallsuccessfulorthrow"
language: "java"
lang: "en"
category: "function"
name: "Joiner.awaitAllSuccessfulOrThrow"
signature: "static <T, R_X extends Throwable> Joiner<T, Void, R_X> awaitAllSuccessfulOrThrow(Function<Throwable, R_X> esf)"
title: "Joiner.awaitAllSuccessfulOrThrow"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Joiner.awaitAllSuccessfulOrThrow

```java
static <T, R_X extends Throwable> Joiner<T, Void, R_X> awaitAllSuccessfulOrThrow(Function<Throwable, R_X> esf)
```

{@return a new Joiner that causes the `join` method to wait
 for all subtasks to complete successfully}
 The `Joiner` `#Cancellation cancels` the
 scope and causes the `join` method to throw if any subtask fails.

 

 The `join` method of a `StructuredTaskScope` opened
 with this Joiner returns `null` when all subtasks complete successfully.
 If any subtask fails then the Joiner causes the `join()` method to throw
 the exception returned by the given exception supplying function when `apply(Object) applied` to the exception from the first subtask to fail.
 The function should return an exception with the exception from the failed
 subtask (the function argument) as the `getCause() cause`.
 If the function returns `null` then it causes the `join()` method
 to throw `NullPointerException`.

 

 **Timeout Handling:** The `Joiner` cannot produce a result when
 the scope is cancelled by a timeout. If the scope was opened with a `withTimeout(Duration) timeout`, and the timeout expires before or
 while waiting for all subtasks to complete successfully, then the `Joiner`
 causes the `join()` method to throw the exception returned by the
 exception supplying function when applied to a `CancelledByTimeoutException
 CancelledByTimeoutException`.

 return results of different types and where it is necessary to keep a reference
 to each `Subtask Subtask`. Joiners returned by `allSuccessfulOrThrow` and `allSuccessfulOrThrow` are suited
 to cases where the subtasks return a result of the same type.

 

 The following example opens a `StructuredTaskScope` with a Joiner
 created with `awaitAllSuccessfulOrThrow()`. It `fork(Callable) forks` two subtasks, then waits in `join` for
 both subtasks to complete successfully or either subtask to fail. If both
 subtasks complete successfully then it invokes `get`
 on both subtasks to get their results. It throws the runtime exception `CompletionException` if any subtask fails, with the exception from a failed
 subtask as the cause.
 {@snippet lang=java :
   try (var scope = StructuredTaskScope.open(
            Joiner.awaitAllSuccessfulOrThrow(CompletionException::new))) {
       Subtask subtask1 = scope.fork(callable1);
       Subtask subtask2 = scope.fork(callable2);

       // throws CompletionException if either subtask fails
       scope.join();

       // both subtasks completed successfully
       var result = new MyResult(subtask1.get(), subtask2.get());
   }
 }

**参数**

- **esf** — the exception supplying function
- **the** — result type of subtasks
- **the** — type of the exception thrown by the `join` method

> *Since 27*
