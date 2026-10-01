---
id: "java-en-function-java-util-concurrent-forkjointask"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ForkJoinTask"
title: "ForkJoinTask"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask

Abstract base class for tasks that run within a `ForkJoinPool`.
 A `ForkJoinTask` is a thread-like entity that is much
 lighter weight than a normal thread.  Huge numbers of tasks and
 subtasks may be hosted by a small number of actual threads in a
 ForkJoinPool, at the price of some usage limitations.

 

A "main" `ForkJoinTask` begins execution when it is
 explicitly submitted to a `ForkJoinPool`, or, if not already
 engaged in a ForkJoin computation, commenced in the `commonPool` via `fork`, `invoke`, or
 related methods.  Once started, it will usually in turn start other
 subtasks.  As indicated by the name of this class, many programs
 using `ForkJoinTask` employ only methods `fork` and
 `join`, or derivatives such as `invokeAll(ForkJoinTask...) invokeAll`.  However, this class also
 provides a number of other methods that can come into play in
 advanced usages, as well as extension mechanics that allow support
 of new forms of fork/join processing.

 

A `ForkJoinTask` is a lightweight form of `Future`.
 The efficiency of `ForkJoinTask`s stems from a set of
 restrictions (that are only partially statically enforceable)
 reflecting their main use as computational tasks calculating pure
 functions or operating on purely isolated objects.  The primary
 coordination mechanisms are `fork`, that arranges
 asynchronous execution, and `join`, that doesn't proceed
 until the task's result has been computed.  Computations should
 ideally avoid `synchronized` methods or blocks, and should
 minimize other blocking synchronization apart from joining other
 tasks or using synchronizers such as Phasers that are advertised to
 cooperate with fork/join scheduling. Subdividable tasks should also
 not perform blocking I/O, and should ideally access variables that
 are completely independent of those accessed by other running
 tasks. These guidelines are loosely enforced by not permitting
 checked exceptions such as `IOExceptions` to be
 thrown. However, computations may still encounter unchecked
 exceptions, that are rethrown to callers attempting to join
 them. These exceptions may additionally include `RejectedExecutionException` stemming from internal resource
 exhaustion, such as failure to allocate internal task
 queues. Rethrown exceptions behave in the same way as regular
 exceptions, but, when possible, contain stack traces (as displayed
 for example using `ex.printStackTrace()`) of both the thread
 that initiated the computation as well as the thread actually
 encountering the exception; minimally only the latter.

 

It is possible to define and use ForkJoinTasks that may block,
 but doing so requires three further considerations: (1) Completion
 of few if any other tasks should be dependent on a task
 that blocks on external synchronization or I/O. Event-style async
 tasks that are never joined (for example, those subclassing `CountedCompleter`) often fall into this category.  (2) To minimize
 resource impact, tasks should be small; ideally performing only the
 (possibly) blocking action. (3) Unless the `ForkJoinPool.ManagedBlocker` API is used, or the number of possibly
 blocked tasks is known to be less than the pool's `getParallelism` level, the pool cannot guarantee that
 enough threads will be available to ensure progress or good
 performance.

 

The primary method for awaiting completion and extracting
 results of a task is `join`, but there are several variants:
 The `get` methods support interruptible and/or timed
 waits for completion and report results using `Future`
 conventions. Method `invoke` is semantically
 equivalent to `fork(); join()` but always attempts to begin
 execution in the current thread. The "quiet" forms of
 these methods do not extract results or report exceptions. These
 may be useful when a set of tasks are being executed, and you need
 to delay processing of results or exceptions until all complete.
 Method `invokeAll` (available in multiple versions)
 performs the most common form of parallel invocation: forking a set
 of tasks and joining them all.

 

In the most typical usages, a fork-join pair act like a call
 (fork) and return (join) from a parallel recursive function. As is
 the case with other forms of recursive calls, returns (joins)
 should be performed innermost-first. For example, `a.fork();
 b.fork(); b.join(); a.join();` is likely to be substantially more
 efficient than joining `a` before `b`.

 

The execution status of tasks may be queried at several levels
 of detail: `isDone` is true if a task completed in any way
 (including the case where a task was cancelled without executing);
 `isCompletedNormally` is true if a task completed without
 cancellation or encountering an exception; `isCancelled` is
 true if the task was cancelled (in which case `getException`
 returns a `CancellationException`); and
 `isCompletedAbnormally` is true if a task was either
 cancelled or encountered an exception, in which case `getException` will return either the encountered exception or
 `CancellationException`.

 

The ForkJoinTask class is not usually directly subclassed.
 Instead, you subclass one of the abstract classes that support a
 particular style of fork/join processing, typically `RecursiveAction` for most computations that do not return results,
 `RecursiveTask` for those that do, and `CountedCompleter` for those in which completed actions trigger
 other actions.  Normally, a concrete ForkJoinTask subclass declares
 fields comprising its parameters, established in a constructor, and
 then defines a `compute` method that somehow uses the control
 methods supplied by this base class.

 

Method `join` and its variants are appropriate for use
 only when completion dependencies are acyclic; that is, the
 parallel computation can be described as a directed acyclic graph
 (DAG). Otherwise, executions may encounter a form of deadlock as
 tasks cyclically wait for each other.  However, this framework
 supports other methods and techniques (for example the use of
 `Phaser`, `helpQuiesce`, and `complete`) that
 may be of use in constructing custom subclasses for problems that
 are not statically structured as DAGs. To support such usages, a
 ForkJoinTask may be atomically tagged with a `short`
 value using `setForkJoinTaskTag` or `compareAndSetForkJoinTaskTag` and checked using `getForkJoinTaskTag`. The ForkJoinTask implementation does not use
 these `protected` methods or tags for any purpose, but they
 may be of use in the construction of specialized subclasses.  For
 example, parallel graph traversals can use the supplied methods to
 avoid revisiting nodes/tasks that have already been processed.
 (Method names for tagging are bulky in part to encourage definition
 of methods that reflect their usage patterns.)

 

Most base support methods are `final`, to prevent
 overriding of implementations that are intrinsically tied to the
 underlying lightweight task scheduling framework.  Developers
 creating new basic styles of fork/join processing should minimally
 implement `protected` methods `exec`, `setRawResult`, and `getRawResult`, while also introducing
 an abstract computational method that can be implemented in its
 subclasses, possibly relying on other `protected` methods
 provided by this class.

 

ForkJoinTasks should perform relatively small amounts of
 computation. Large tasks should be split into smaller subtasks,
 usually via recursive decomposition. As a very rough rule of thumb,
 a task should perform more than 100 and less than 10000 basic
 computational steps, and should avoid indefinite looping. If tasks
 are too big, then parallelism cannot improve throughput. If too
 small, then memory and internal task maintenance overhead may
 overwhelm processing.

 

This class provides `adapt` methods for `Runnable`
 and `Callable`, that may be of use when mixing execution of
 `ForkJoinTasks` with other kinds of tasks. When all tasks are
 of this form, consider using a pool constructed in asyncMode.

 

ForkJoinTasks are `Serializable`, which enables them to be
 used in extensions such as remote execution frameworks. It is
 sensible to serialize tasks only before or after, but not during,
 execution. Serialization is not relied on during execution itself.

**参数**

- **the** — type of the result of the task

> *Since 1.7*
