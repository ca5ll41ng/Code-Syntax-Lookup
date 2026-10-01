---
id: "java-en-function-structuredtaskscope-open"
language: "java"
lang: "en"
category: "function"
name: "StructuredTaskScope.open"
signature: "static <T, R, R_X extends Throwable> StructuredTaskScope<T, R, R_X> open(Joiner<? super T, ? extends R, R_X> joiner, UnaryOperator<Configuration> configOperator)"
title: "StructuredTaskScope.open"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StructuredTaskScope.open

```java
static <T, R, R_X extends Throwable> StructuredTaskScope<T, R, R_X> open(Joiner<? super T, ? extends R, R_X> joiner, UnaryOperator<Configuration> configOperator)
```

Opens a new `StructuredTaskScope` that uses the given `Joiner` object
 and the `Configuration` that is the result of applying the given operator to
 the `#DefaultConfiguration default configuration`.

 

 The `Joiner` specified to this method implements the desired policy and
 produces the outcome (result or exception) for the `join` method when all
 subtasks forked in the scope complete execution or the scope is `#Cancellation cancelled`.

 

 This method invokes the operator's `apply(Object) apply`
 method with the default configuration to produce the configuration for the new
 scope:
 
 
-  If the `apply` method returns a `Configuration` with a `ThreadFactory`, set using `withThreadFactory(ThreadFactory)
 withThreadFactory`, its `newThread(Runnable)
 newThread` method will be invoked to create threads when `fork(Callable) forking` subtasks in the scope. If a `ThreadFactory` is not set
 then forking subtasks will create an unnamed virtual thread for each subtask. 
 
-  If the `apply` method returns a `Configuration` with a timeout, set
 using `withTimeout`, the timeout
 will start when the scope is opened. If the timeout expires before or while waiting in
 `join` then the scope will be `#Cancellation cancelled`. It is
 `Joiner Joiner` specific as to whether the `join()` method returns a
 result or throws an exception when a timeout occurs. If the outcome is an exception
 then it will be thrown with a `CancelledByTimeoutException
 CancelledByTimeoutException` as the `getCause() cause`. 
 
-  If the `apply` method returns a `Configuration` with a name, set
 using `withName`, the name will
 be used for monitoring and management purposes. 
 
-  If the `apply` method throws an exception or error then it is propagated
 by this method. 
 
-  If the `apply` method returns `null` then `NullPointerException`
 is thrown. 
 

 

 The new scope is owned by the current thread. Only code executing in this
 thread can `fork(Callable) fork`, `join() join`, or
 `close close` the scope.

 

 Construction captures the current thread's `ScopedValue scoped
 value` bindings for inheritance by threads forked in the scope.

**参数**

- **joiner** — the Joiner
- **configOperator** — the operator to produce the configuration
- **the** — result type of subtasks `fork(Callable) forked` in the scope
- **the** — type of the result returned by the `join` method
- **the** — type of the exception thrown by the `join` method

**返回**

- a new scope

> *Since 26*
