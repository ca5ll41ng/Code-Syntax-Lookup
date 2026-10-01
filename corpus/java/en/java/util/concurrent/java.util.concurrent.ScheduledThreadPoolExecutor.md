---
id: "java-en-function-java-util-concurrent-scheduledthreadpoolexecutor"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ScheduledThreadPoolExecutor"
title: "ScheduledThreadPoolExecutor"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor

A `ThreadPoolExecutor` that can additionally schedule
 commands to run after a given delay, or to execute periodically.
 This class is preferable to `java.util.Timer` when multiple
 worker threads are needed, or when the additional flexibility or
 capabilities of `ThreadPoolExecutor` (which this class
 extends) are required.

 

Delayed tasks execute no sooner than they are enabled for execution, but
 without any real-time guarantees about when, after they are
 enabled, they will commence. Tasks scheduled for exactly the same
 execution time are enabled in first-in-first-out (FIFO) order of
 submission.

 

When a submitted task is cancelled before it is run, execution
 is suppressed.  By default, such a cancelled task is not
 automatically removed from the work queue until its delay elapses.
 While this enables further inspection and monitoring, it may also
 cause unbounded retention of cancelled tasks.  To avoid this, use
 `setRemoveOnCancelPolicy` to cause tasks to be immediately
 removed from the work queue at time of cancellation.

 

Successive executions of a periodic task scheduled via
 `scheduleAtFixedRate scheduleAtFixedRate` or
 `scheduleWithFixedDelay scheduleWithFixedDelay`
 do not overlap. While different executions may be performed by
 different threads, the effects of prior executions
 happen-before
 those of subsequent ones.

 

While this class inherits from `ThreadPoolExecutor`, a few
 of the inherited tuning methods are not useful for it. In
 particular, because it acts as a fixed-sized pool using
 `corePoolSize` threads and an unbounded queue, adjustments
 to `maximumPoolSize` have no useful effect. Additionally, it
 is almost never a good idea to set `corePoolSize` to zero or
 use `allowCoreThreadTimeOut` because this may leave the pool
 without threads to handle tasks once they become eligible to run.

 

As with `ThreadPoolExecutor`, if not otherwise specified,
 this class uses `defaultThreadFactory` as the
 default thread factory, and `ThreadPoolExecutor.AbortPolicy`
 as the default rejected execution handler.

 

**Extension notes:** This class overrides the
 `execute(Runnable) execute` and
 `submit(Runnable) submit`
 methods to generate internal `ScheduledFuture` objects to
 control per-task delays and scheduling.  To preserve
 functionality, any further overrides of these methods in
 subclasses must invoke superclass versions, which effectively
 disables additional task customization.  However, this class
 provides alternative protected extension method
 `decorateTask` (one version each for `Runnable` and
 `Callable`) that can be used to customize the concrete task
 types used to execute commands entered via `execute`,
 `submit`, `schedule`, `scheduleAtFixedRate`,
 and `scheduleWithFixedDelay`.  By default, a
 `ScheduledThreadPoolExecutor` uses a task type extending
 `FutureTask`. However, this may be modified or replaced using
 subclasses of the form:

 
```
 `public class CustomScheduledExecutor extends ScheduledThreadPoolExecutor {

   static class CustomTask implements RunnableScheduledFuture { ... `

   protected  RunnableScheduledFuture decorateTask(
                Runnable r, RunnableScheduledFuture task) {
       return new CustomTask(r, task);
   }

   protected  RunnableScheduledFuture decorateTask(
                Callable c, RunnableScheduledFuture task) {
       return new CustomTask(c, task);
   }
   // ... add constructors, etc.
 }}
```

> *Since 1.5*
