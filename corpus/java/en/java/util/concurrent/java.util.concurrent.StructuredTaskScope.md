---
id: "java-en-function-java-util-concurrent-structuredtaskscope"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.StructuredTaskScope"
title: "StructuredTaskScope"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StructuredTaskScope

An API for structured concurrency. `StructuredTaskScope` supports cases
 where execution of a task (a unit of work) splits into several concurrent
 subtasks, and where the subtasks must complete before the task continues. A `StructuredTaskScope` can be used to ensure that the lifetime of a concurrent operation
 is confined by a syntactic block, similar to that of a sequential operation in
 structured programming.

 

 `StructuredTaskScope` defines the static `open` method to create
 and open a new `StructuredTaskScope`. It defines the `close`
 method to close it. The API is designed to be used with the `try`-with-resources
 statement where a `StructuredTaskScope` is opened as a resource and then closed
 automatically. The code inside the `try` block uses the `fork`
 method to fork subtasks. Each call to the `fork(Callable)` method starts
 a new `Thread` (typically a `#virtual-threads virtual thread`)
 to execute a subtask as a `Callable value-returning method`. The subtask
 executes concurrently with the code inside the `try` block, and concurrently with
 other subtasks forked in the scope. After forking all subtasks, the code inside the
 block uses the `join` method to wait for all subtasks to finish (or
 some other outcome) as a single operation. The code after the `join()` method
 processes the outcome. Execution does not continue beyond the `try` block (or
 `close` method) until all threads started in the scope to execute subtasks have
 finished.

 

 To ensure correct usage, the `fork`, `join` and `close` methods may only be invoked by the owner thread (the thread that
 opened the `StructuredTaskScope`), the `fork(Callable)` method may not be
 called after `join()`, the `join()` method must be invoked to get the outcome
 after forking subtasks, and the `close()` method throws an exception after closing
 if the owner did not invoke the `join()` method after forking subtasks.

 

 As a first example, consider a "main" task that splits into two subtasks to
 concurrently fetch values from two remote services. The main task aggregates the results
 of both subtasks. The example invokes `fork` to fork the two subtasks.
 Each call to `fork(Callable)` returns a `Subtask Subtask` as a handle to
 the forked subtask. Both subtasks may complete successfully, one subtask may succeed
 and the other may fail, or both subtasks may fail.

 

 The main task in the example is interested in the successful result from both
 subtasks. It waits in the `join` method for both subtasks to complete
 successfully or for either subtask to fail. If both subtasks complete successfully then
 the `join()` method completes normally and the task uses the `get()
 Subtask.get` method to get the result of each subtask. If one of the subtasks fails
 then the other subtask is cancelled, and the `join()` method throws `ExecutionException` with the exception from the failed subtask as the `getCause() cause`.
 {@snippet lang=java :
    // @link substring="open()" target="#open()" :
    try (var scope = StructuredTaskScope.open()) {

        // @link substring="fork" target="#fork(Callable)" :
        Subtask subtask1 = scope.fork(() -> fetchFromRemoteService1());
        Subtask subtask2 = scope.fork(() -> fetchFromRemoteService2());

        // throws ExecutionException if either subtask fails
        scope.join();  // @link substring="join()" target="#join()"

        // both subtasks completed successfully
        // @link substring="get()" target="Subtask#get()" :
        var result = new MyResult(subtask1.get(), subtask2.get());

    // @link substring="close" target="#close()" :
    } // close
 }

 

 The `close` method always waits for threads executing subtasks to
 finish, even if the `join()` method throws, so that execution cannot continue
 beyond the `close()` method until the interrupted threads finish.

 

 To allow for cancellation, subtasks must be coded so that they finish as soon as
 possible when interrupted. Subtasks that do not respond to interrupt, e.g. block on
 methods that are not interruptible, may delay the `close` method
 indefinitely.

 

 In the example, the subtasks produce results of different types (`String` and
 `Integer`). In other cases the subtasks may all produce results of the same type.
 If the example had used `StructuredTaskScope.open()` to open the scope
 then it could only be used to fork subtasks that return a `String` result.

 Joiners

 

 The `join` method in the example above completes normally, and returns
 `null`, if all subtasks succeed. It throws `ExecutionException` if any subtask
 fails. Other policies and outcomes are possible by creating a `StructuredTaskScope`
 with a `Joiner Joiner` that implements the desired policy and outcome. A `Joiner` handles subtasks as they are forked and when they complete, and produces the
 outcome for the `join()` method. Instead of `null`, a `Joiner` may
 cause `join()` to return the result of a specific subtask, a collection of results,
 or an object constructed from the results of some or all subtasks. When the outcome
 is an exception, a `Joiner` may cause `join()` to throw an exception
 other than `ExecutionException`.

 

 A `Joiner` may cancel the scope (sometimes
 called "short-circuiting") when some condition is reached, e.g. a subtask fails, that
 does not require the outcome of other subtasks that are still executing. Cancelling the
 scope prevents new threads from being started in the scope, cancels subtasks in the
 scope that have not completed execution, and causes the `join()` method to wake up
 with the outcome (result or exception). In the above example, the outcome is that `join()` completes normally when all subtasks succeed. The scope is cancelled if any
 subtask fails and `join()` throws `ExecutionException` with the exception
 from the failed subtask as the `getCause() cause`. Other `Joiner` implementations may cancel the scope for other reasons, and may cause `join()` to throw a different exception when the outcome is an exception.

 

 The `Joiner Joiner` interface defines static factory methods to create a
 `Joiner` for a number of common cases. The interface can be implemented when a
 more advanced or custom policy is required. A `Joiner` that returns a
 non-`null` result may remove the need for bookkeeping and the need to keep
 a reference to `Subtask` objects returned by the `fork` method.
 

 Now consider another example where a main task splits into two subtasks. In this
 example, each subtask produces a `String` result and the main task is only
 interested in the result from the first subtask to complete successfully. The example
 uses `anySuccessfulOrThrow` to create a
 `Joiner` that produces the result of any subtask that completes successfully.
 {@snippet lang=java :
    // @link substring="anySuccessfulOrThrow()" target="Joiner#anySuccessfulOrThrow()" :
    try (var scope = StructuredTaskScope.open(Joiner.anySuccessfulOrThrow())) {

        // @link substring="fork" target="#fork(Callable)" :
        scope.fork(callable1);
        scope.fork(callable2);

        // throws ExecutionException if both subtasks fail
        String firstResult = scope.join(); // @link substring="join" target="#join()"

    // @link substring="close" target="#close()" :
    } // close
 }

 

 In the example, the task forks the two subtasks, then waits in the `join()` method for either subtask to complete successfully or for both subtasks to fail.
 If one of the subtasks completes successfully then the `Joiner` causes the other
 subtask to be cancelled (this will interrupt the thread executing the subtask), and
 the `join()` method returns the result from the successful subtask. Cancelling the
 other subtask avoids the task waiting for a result that it doesn't care about. If
 both subtasks fail then the `join()` method throws `ExecutionException` with
 the exception from one of the subtasks as the `getCause() cause`.
 `anySuccessfulOrThrow` can
 be used with a function that produces an exception other than `ExecutionException`
 to throw when all subtasks fail.

 Configuration

 A `StructuredTaskScope` is opened with `Configuration configuration`
 that consists of a `ThreadFactory` to create threads, an optional name for the
 scope, and an optional timeout. The name is intended for monitoring and management
 purposes.

 

 The `open` and `open` methods create a `StructuredTaskScope`
 with the  default configuration. The default
 configuration has a `ThreadFactory` that creates unnamed `#virtual-threads virtual threads`, does not name the scope, and has no timeout.

 

 The `open` and `open` methods
 can be used to create a `StructuredTaskScope` that uses a different `ThreadFactory`, is named for monitoring and management purposes, or has a timeout that
 cancels the scope if the timeout expires before or while waiting for subtasks to
 complete. The `open` methods are called with an `UnaryOperator operator`
 that is applied to the default configuration and returns a `Configuration
 Configuration` for the `StructuredTaskScope` under construction.

 

 The following example opens a new `StructuredTaskScope` with a `ThreadFactory` that creates virtual threads `getName() named`
 "duke-0", "duke-1" ...
 {@snippet lang = java:
    // @link substring="name" target="Thread.Builder#name(String, long)" :
    ThreadFactory factory = Thread.ofVirtual().name("duke-", 0).factory();

    // @link substring="withThreadFactory" target="Configuration#withThreadFactory(ThreadFactory)" :
    try (var scope = StructuredTaskScope.open(cf -> cf.withThreadFactory(factory))) {

        var subtask1 = scope.fork( .. );   // runs in a virtual thread with name "duke-0"
        var subtask2 = scope.fork( .. );   // runs in a virtual thread with name "duke-1"

        scope.join();

        var result = new MyResult(subtask1.get(), subtask2.get());

     }
}

 

 A second example sets a timeout, represented by a `Duration`. The timeout
 starts when the new scope is opened. If the timeout expires before or while waiting in
 the `join` method then the scope is `#Cancellation cancelled`
 (this interrupts the threads executing the subtasks that have not completed), and the
 `join()` method throws `ExecutionException` with a `CancelledByTimeoutException CancelledByTimeoutException` as the cause.
 {@snippet lang=java :
    Duration timeout = Duration.ofSeconds(10);

    // @link substring="allSuccessfulOrThrow" target="Joiner#allSuccessfulOrThrow()" :
    try (var scope = StructuredTaskScope.open(Joiner.allSuccessfulOrThrow(),
    // @link substring="withTimeout" target="Configuration#withTimeout(Duration)" :
                                              cf -> cf.withTimeout(timeout))) {

        scope.fork(callable1);   // subtask takes a really long time
        scope.fork(callable2);

        // throws ExecutionException with CancelledByTimeoutException as cause
        List results = scope.join();

    }
 }

 Exception handling

 

 The outcome of the `join` method is a result or exception. When the outcome
 is an exception then its `getCause() cause` will typically be
 the exception from a failed subtask or `CancelledByTimeoutException
 CancelledByTimeoutException` if a timeout was configured.

 

 In some cases it may be useful to add a `catch` block to the
 `try`-with-resources statement to handle the exception. The following example
 uses the `open` method to open a scope with a timeout configured.
 The `join()` method in this example throws `ExecutionException` if any
 subtask fails or the timeout expires. The exception cause is the exception from a failed
 subtask or `CancelledByTimeoutException`. The example uses the `switch`
 statement to select based on the cause.
 {@snippet lang=java :
    try (var scope = StructuredTaskScope.open(cf -> cf.withTimeout(timeout))) {

        ..

    } catch (ExecutionException e) {
        switch (e.getCause()) {
            case CancelledByTimeoutException ->
            case IOException ioe -> ..
            default -> ..
        }
    }
 }

 

 In other cases it may not be useful to catch the exception but instead leave it to
 propagate to the configured `Thread.UncaughtExceptionHandler uncaught
 exception handler` for logging purposes.

 

 For cases where a specific exception triggers the use of a default result then it
 may be more appropriate to handle this in the subtask itself rather than the subtask
 failing and the scope owner handling the exception.

 

 The `join` method throws `InterruptedException` when interrupted
 before or while waiting in the `join()` method.
 The `#thread-interruption Thread Interruption` section of the `Thread`
 specification provides guidance on handling this exception.

 Inheritance of scoped value bindings

 `ScopedValue` supports the execution of a method with a `ScopedValue` bound
 to a value for the bounded period of execution of the method by the current thread.
 It allows a value to be safely and efficiently shared to methods without using method
 parameters.

 

 When used in conjunction with a `StructuredTaskScope`, a `ScopedValue`
 can also safely and efficiently share a value to methods executed by subtasks forked
 in the scope. When a `ScopedValue` object is bound to a value in the thread
 executing a "main" task then that binding is inherited by the threads created to
 execute subtasks. The thread executing the main task does not continue beyond the
 `close` method until all threads executing the subtasks have finished.
 This ensures that the `ScopedValue` is not reverted to being `isBound() unbound` (or its previous value) while subtasks are executing.
 In addition to providing a safe and efficient means to inherit a value into subtasks,
 the inheritance allows sequential code using `ScopedValue` to be refactored to
 use structured concurrency.

 

 To ensure correctness, opening a new `StructuredTaskScope` captures the
 current thread's scoped value bindings. These are the scoped values bindings that are
 inherited by the threads created to execute subtasks in the scope. Forking a
 subtask checks that the bindings in effect at the time that the subtask is forked
 match the bindings when the `StructuredTaskScope` was created. This check ensures
 that a subtask does not inherit a binding that is reverted in the main task before the
 subtask has completed.

 

 A `ScopedValue` that is shared across threads requires that the value be an
 immutable object or for all access to the value to be appropriately synchronized.

 

 The following example demonstrates the inheritance of scoped value bindings. The
 scoped value USERNAME is bound to the value "duke" for the bounded period of a lambda
 expression by the thread executing it. The code in the block opens a `StructuredTaskScope` and forks two subtasks, it then waits in the `join()` method
 and aggregates the results from both subtasks. If code executed by the threads
 running subtask1 and subtask2 uses `get`, to get the value of
 USERNAME, then value "duke" will be returned.
 {@snippet lang=java :
     // @link substring="newInstance" target="ScopedValue#newInstance()" :
     private static final ScopedValue USERNAME = ScopedValue.newInstance();

     // @link substring="where" target="ScopedValue#where(ScopedValue, Object)" :
     MyResult result = ScopedValue.where(USERNAME, "duke").call(() -> {

         try (var scope = StructuredTaskScope.open()) {

             Subtask subtask1 = scope.fork( .. );    // inherits binding
             Subtask subtask2 = scope.fork( .. );   // inherits binding

             scope.join();
             return new MyResult(subtask1.get(), subtask2.get());
         }

     });
 }

 

 A scoped value inherited into a subtask may be `#rebind
 rebound` to a new value in the subtask for the bounded execution of some method executed
 in the subtask. When the method completes, the value of the `ScopedValue` reverts
 to its previous value, the value inherited from the thread executing the main task.

 

 A subtask may execute code that itself opens a new `StructuredTaskScope`.
 A main task executing in thread T1 opens a `StructuredTaskScope` and forks a
 subtask that runs in thread T2. The scoped value bindings captured when T1 opens the
 scope are inherited into T2. The subtask (in thread T2) executes code that opens a
 new `StructuredTaskScope` and forks a (sub-)subtask that runs in thread T3. The
 scoped value bindings captured when T2 opens the scope are inherited into T3. These
 include the bindings that were inherited from T1. In effect, scoped values are
 inherited into a tree of subtasks, not just one level of subtask.

 Memory consistency effects

 

 Actions in the owner thread of a `StructuredTaskScope` prior to `fork forking` of a subtask `#MemoryVisibility
 happen-before` any actions taken by the thread that executes the subtask, which
 in turn happen-before actions in any thread that successfully obtains the
 subtask outcome with `get` or `exception()
 Subtask.exception`. If a subtask's outcome contributes to the result or exception
 from `join`, then any actions taken by the thread executing that subtask
 happen-before the owner thread returns from `join()` with the outcome.

 General exceptions

 

 Unless otherwise specified, passing a `null` argument to a method in this
 class will cause a `NullPointerException` to be thrown.

**参数**

- **the** — result type of subtasks `fork(Callable) forked` in the scope
- **the** — type of the result returned by the `join` method
- **the** — type of the exception thrown by the `join` method

> *Since 21*
