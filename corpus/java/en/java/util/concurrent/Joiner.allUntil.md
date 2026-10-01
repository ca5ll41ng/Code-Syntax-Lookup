---
id: "java-en-function-joiner-alluntil"
language: "java"
lang: "en"
category: "function"
name: "Joiner.allUntil"
signature: "static <T> Joiner<T, List<Subtask<T>>, RuntimeException> allUntil(Predicate<? super Subtask<T>> isDone)"
title: "Joiner.allUntil"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Joiner.allUntil

```java
static <T> Joiner<T, List<Subtask<T>>, RuntimeException> allUntil(Predicate<? super Subtask<T>> isDone)
```

{@return a new Joiner that produces a list of all subtasks when all subtasks
 complete or `test(Object) evaluating` a predicate on a
 completed subtask causes the scope to be `#Cancellation cancelled`}
 The `Joiner` does not cause the `join` method to throw
 if subtasks fail or a configured `withTimeout(Duration)
 timeout` expires. This method can be used to create a `Joiner` that
 implements a cancellation policy.

 

 The `join` method of a `StructuredTaskScope` opened
 with this Joiner returns a list of all subtasks, in the order that they were
 `fork(Callable) forked`, when all subtasks complete or the scope is
 cancelled. The returned list may contain subtasks that completed (in the `SUCCESS SUCCESS` or `FAILED FAILED` state),
 or subtasks in the `UNAVAILABLE UNAVAILABLE` state if
 they were forked or completed after the scope was cancelled. The scope is
 cancelled if the given predicate `test(Object) evaluates`
 to `true`, or a configured timeout expires before or while waiting in the
 `join()` method.

 

 The given `Predicate`'s `test`
 method is invoked on a completed subtask by the thread that executed the subtask.
 The method is invoked after the subtask completes (successfully or with an
 exception) before the thread terminates. The scope is cancelled if the `test` method returns `true`. The `test` method must be thread safe.
 It may be invoked concurrently from several threads as multiple subtasks can
 complete at the same time. If the method throws an exception or error, the thread
 invokes the `Thread.UncaughtExceptionHandler uncaught exception handler`
 with the exception or error before the thread terminates.

 

 **Timeout Handling:** If used with a scope that has a `withTimeout(Duration) timeout` set, and the timeout expires before
 all subtasks complete then the `join()` method returns the list of
 all subtasks. It does not throw an exception. Subtasks that did not complete
 before the timeout expires will be in the `UNAVAILABLE` state.

 `#Cancellation cancels` the scope when two or
 more subtasks fail.
 {@snippet lang=java :
    class CancelAfterTwoFailures implements Predicate> {
         private final AtomicInteger failedCount = new AtomicInteger();
         public boolean test(Subtask<?> subtask) {
             return subtask.state() == Subtask.State.FAILED
                     && failedCount.incrementAndGet() >= 2;
         }
     }

     var joiner = Joiner.allUntil(new CancelAfterTwoFailures());
 }

 

 The following example uses `allUntil` to create a Joiner that
 cancels the scope when any subtask completes successfully. The subtasks are
 grouped according to their `Subtask.State state` to produce a map
 with up to three key-value mappings. The map key is the subtask state, the
 value is the list of subtasks in that state.
 {@snippet lang=java :
     Predicate> isSuccessful = s -> s.state() == Subtask.State.SUCCESS;

     try (var scope = StructuredTaskScope.open(Joiner.allUntil(isSuccessful))) {
         tasks.forEach(scope::fork);

         Map>> subtasksByState = scope.join()
                 .stream()
                 // @link substring="Collectors.groupingBy" target="java.util.stream.Collectors#groupingBy" :
                 .collect(Collectors.groupingBy(Subtask::state));
     }
 }

 

 The following example is a method that uses `allUntil` to create a
 Joiner that does not cancel the scope. The method waits for all subtasks to
 complete or a timeout to expire. It returns a list of all subtasks, in the
 same order as the collection of callables, even if the timeout expires before
 or while waiting in `join()`.
 {@snippet lang=java :
     List> invokeAll(Collection> tasks, Duration timeout) throws InterruptedException {
        // @link substring="withTimeout" target="Configuration#withTimeout(Duration)" :
        try (var scope = StructuredTaskScope.open(Joiner.allUntil(_ -> false), cf -> cf.withTimeout(timeout))) {
            tasks.forEach(scope::fork);
            return scope.join();
        }
    }
 }

**参数**

- **isDone** — the predicate to evaluate completed subtasks
- **the** — result type of subtasks
