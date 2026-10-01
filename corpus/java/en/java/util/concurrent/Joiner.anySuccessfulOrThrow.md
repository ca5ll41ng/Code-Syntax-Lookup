---
id: "java-en-function-joiner-anysuccessfulorthrow"
language: "java"
lang: "en"
category: "function"
name: "Joiner.anySuccessfulOrThrow"
signature: "static <T, R_X extends Throwable> Joiner<T, T, R_X> anySuccessfulOrThrow(Function<Throwable, R_X> esf)"
title: "Joiner.anySuccessfulOrThrow"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Joiner.anySuccessfulOrThrow

```java
static <T, R_X extends Throwable> Joiner<T, T, R_X> anySuccessfulOrThrow(Function<Throwable, R_X> esf)
```

{@return a new Joiner that produces the result of any successful subtask}
 The `Joiner` `#Cancellation cancels` the
 scope when a subtask completes successfully. It causes the `join`
 method to throw if all subtasks fail.

 

 The `join` method of a `StructuredTaskScope` opened
 with this Joiner returns the result of a successful subtask. If a subtask
 completes successfully then the scope is cancelled and the `join()`
 method returns its result. If all subtasks fail then the Joiner causes the
 `join()` method to throw the exception returned by the given exception
 supplying function when `apply(Object) applied` to the
 exception from one of the failed subtasks. The function should return an
 exception with the exception from the failed subtask (the function argument) as
 the `getCause() cause`. If the function returns `null`
 then it causes the `join()` method to throw `NullPointerException`.
 If no subtasks were forked then the Joiner causes the `join()` method to
 throw the exception returned by the function when applied to an instance of
 `java.util.NoSuchElementException`.

 

 **Timeout Handling:** The `Joiner` cannot produce a result when
 the scope is cancelled by a timeout. If the scope was opened with a `withTimeout(Duration) timeout`, and the timeout expires before or
 while waiting for a subtask to complete successfully, then the `Joiner`
 causes the `join()` method to throw the exception returned by the
 exception supplying function when applied to a `CancelledByTimeoutException
 CancelledByTimeoutException`.

 with a Joiner created with `anySuccessfulOrThrow(Function)`. The method
 is invoked with a collection of `Callable callables`. It `fork(Callable) forks` a subtask to execute each callable, waits in `join` for any subtask to complete successfully, returning its result.
 It throws the runtime exception `CompletionException` if all subtasks fail,
 with the exception from a failed subtask as the cause.
 {@snippet lang=java :
    T invokeAny(Collection> tasks) throws InterruptedException {
         try (var scope = StructuredTaskScope.open(
               Joiner.anySuccessfulOrThrow(CompletionException::new))) {
             tasks.forEach(scope::fork);
             T result = scope.join();
             return result;
         }
   }
 }

**参数**

- **esf** — the exception supplying function
- **the** — result type of subtasks
- **the** — type of the exception thrown by the `join` method

**参见**

- #anySuccessfulOrThrow()

> *Since 27*
