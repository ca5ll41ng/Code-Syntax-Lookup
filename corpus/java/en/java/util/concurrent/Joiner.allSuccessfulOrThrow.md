---
id: "java-en-function-joiner-allsuccessfulorthrow"
language: "java"
lang: "en"
category: "function"
name: "Joiner.allSuccessfulOrThrow"
signature: "static <T, R_X extends Throwable> Joiner<T, List<T>, R_X> allSuccessfulOrThrow(Function<Throwable, R_X> esf)"
title: "Joiner.allSuccessfulOrThrow"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Joiner.allSuccessfulOrThrow

```java
static <T, R_X extends Throwable> Joiner<T, List<T>, R_X> allSuccessfulOrThrow(Function<Throwable, R_X> esf)
```

{@return a new Joiner that produces a list of all results when all subtasks
 complete successfully}
 The `Joiner` `#Cancellation cancels` the
 scope and causes the `join` method to throw if any subtask fails.

 

 The `join` method of a `StructuredTaskScope` opened
 with this Joiner returns the list of the results, in the order that the subtasks
 were `fork(Callable) forked`, when all subtasks complete successfully.
 An empty list is returned if no subtasks were forked. If any subtask fails then
 the `Joiner` causes the `join()` method to throw the exception
 returned by the given exception supplying function when `apply(Object) applied` to the exception from the first subtask to fail.
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

 return a result of the same type. It removes the need for bookkeeping
 and the need to keep a reference to the `Subtask Subtask` objects returned
 by the `fork` method. Joiners returned by `awaitAllSuccessfulOrThrow` and `awaitAllSuccessfulOrThrow`
 are suited to cases where the subtasks return results of different types and
 where it is necessary to keep a reference to the `Subtask` objects.

 

 The following example is a method that opens a `StructuredTaskScope`
 with a Joiner created with `allSuccessfulOrThrow(Function)`. The method
 is invoked with a collection of `Callable callables`. It `fork(Callable) forks` a subtask to execute each callable, waits in `join` for all subtasks to complete successfully, and then returns a
 list of the results. It throws the runtime exception `CompletionException`
 if any subtask fails, with the exception from the first subtask to fail as the
 cause.
 {@snippet lang=java :
    List invokeAll(Collection> tasks) throws InterruptedException {
         try (var scope = StructuredTaskScope.open(
                 Joiner.allSuccessfulOrThrow(CompletionException::new))) {
             tasks.forEach(scope::fork);
             List results = scope.join();
             return results;
         }
   }
 }

**参数**

- **esf** — the exception supplying function
- **the** — result type of subtasks
- **the** — type of the exception thrown by the `join` method

**参见**

- #allSuccessfulOrThrow()

> *Since 27*
