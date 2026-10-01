---
id: "java-en-function-java-util-concurrent-forkjoinpool"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ForkJoinPool"
title: "ForkJoinPool"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool

An `ExecutorService` for running `ForkJoinTask`s.
 A `ForkJoinPool` provides the entry point for submissions
 from non-`ForkJoinTask` clients, as well as management and
 monitoring operations.

 

A `ForkJoinPool` differs from other kinds of `ExecutorService` mainly by virtue of employing
 work-stealing: all threads in the pool attempt to find and
 execute tasks submitted to the pool and/or created by other active
 tasks (eventually blocking waiting for work if none exist). This
 enables efficient processing when most tasks spawn other subtasks
 (as do most `ForkJoinTask`s), as well as when many small
 tasks are submitted to the pool from external clients.  Especially
 when setting asyncMode to true in constructors, `ForkJoinPool`s may also be appropriate for use with event-style
 tasks that are never joined. All worker threads are initialized
 with `isDaemon` set `true`.

 

A static `commonPool` is available and appropriate for
 most applications. The common pool is used by any ForkJoinTask that
 is not explicitly submitted to a specified pool. Using the common
 pool normally reduces resource usage (its threads are slowly
 reclaimed during periods of non-use, and reinstated upon subsequent
 use).

 

For applications that require separate or custom pools, a `ForkJoinPool` may be constructed with a given target parallelism
 level; by default, equal to the number of available processors.
 The pool attempts to maintain enough active (or available) threads
 by dynamically adding, suspending, or resuming internal worker
 threads, even if some tasks are stalled waiting to join others.
 However, no such adjustments are guaranteed in the face of blocked
 I/O or other unmanaged synchronization. The nested `ManagedBlocker` interface enables extension of the kinds of
 synchronization accommodated. The default policies may be
 overridden using a constructor with parameters corresponding to
 those documented in class `ThreadPoolExecutor`.

 

In addition to execution and lifecycle control methods, this
 class provides status check methods (for example
 `getStealCount`) that are intended to aid in developing,
 tuning, and monitoring fork/join applications. Also, method
 `toString` returns indications of pool state in a
 convenient form for informal monitoring.

 

As is the case with other ExecutorServices, there are three
 main task execution methods summarized in the following table.
 These are designed to be used primarily by clients not already
 engaged in fork/join computations in the current pool.  The main
 forms of these methods accept instances of `ForkJoinTask`,
 but overloaded forms also allow mixed execution of plain `Runnable`- or `Callable`- based activities as well.  However,
 tasks that are already executing in a pool should normally instead
 use the within-computation forms listed in the table unless using
 async event-style tasks that are not usually joined, in which case
 there is little difference among choice of methods.

 
 Summary of task execution methods
  
    
     Call from non-fork/join clients
     Call from within fork/join computations
  
  
     Arrange async execution
     `execute`
     `fork`
  
  
     Await and obtain result
     `invoke`
     `invoke`
  
  
     Arrange exec and obtain Future
     `submit`
     `fork` (ForkJoinTasks are Futures)
  
 

 

Additionally, this class supports `ScheduledExecutorService` methods to delay or periodically execute
 tasks, as well as method `submitWithTimeout` to cancel tasks
 that take too long. The scheduled functions or actions may create
 and invoke other `ForkJoinTask ForkJoinTasks`. Delayed
 actions become enabled for execution and behave as ordinary submitted
 tasks when their delays elapse.  Scheduling methods return
 `ForkJoinTask ForkJoinTasks` that implement the `ScheduledFuture` interface. Resource exhaustion encountered after
 initial submission results in task cancellation. When time-based
 methods are used, shutdown policies match the default policies of
 class `ScheduledThreadPoolExecutor`: upon `shutdown`,
 existing periodic tasks will not re-execute, and the pool
 terminates when quiescent and existing delayed tasks
 complete. Method `cancelDelayedTasksOnShutdown` may be used
 to disable all delayed tasks upon shutdown, and method `shutdownNow` may be used to instead unconditionally initiate pool
 termination. Monitoring methods such as `getQueuedTaskCount`
 do not include scheduled tasks that are not yet enabled for execution,
 which are reported separately by method `getDelayedTaskCount`.

 

The parameters used to construct the common pool may be controlled by
 setting the following `getProperty system properties`:
 
 
- {@systemProperty java.util.concurrent.ForkJoinPool.common.parallelism}
 - the parallelism level, a non-negative integer. Usage is discouraged.
   Use `setParallelism` instead.
 
- {@systemProperty java.util.concurrent.ForkJoinPool.common.threadFactory}
 - the class name of a `ForkJoinWorkerThreadFactory`.
 The `getSystemClassLoader() system class loader`
 is used to load this class.
 
- {@systemProperty java.util.concurrent.ForkJoinPool.common.exceptionHandler}
 - the class name of a `UncaughtExceptionHandler`.
 The `getSystemClassLoader() system class loader`
 is used to load this class.
 
- {@systemProperty java.util.concurrent.ForkJoinPool.common.maximumSpares}
 - the maximum number of allowed extra threads to maintain target
 parallelism (default 256).
 

 If no thread factory is supplied via a system property, then the
 common pool uses a factory that uses the system class loader as the
 `getContextClassLoader() thread context class loader`.

 Upon any error in establishing these settings, default parameters
 are used. It is possible to disable use of threads by using a
 factory that may return `null`, in which case some tasks may
 never execute. While possible, it is strongly discouraged to set
 the parallelism property to zero, which may be internally
 overridden in the presence of intrinsically async tasks.

 running threads to 32767. Attempts to create pools with greater
 than the maximum number result in `IllegalArgumentException`. Also, this implementation rejects
 submitted tasks (that is, by throwing `RejectedExecutionException`) only when the pool is shut down or
 internal resources have been exhausted.

> *Since 1.7*
