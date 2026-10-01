---
id: "java-en-function-java-util-concurrent-scheduledexecutorservice"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ScheduledExecutorService"
title: "ScheduledExecutorService"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledExecutorService

An `ExecutorService` that can schedule commands to run after a given
 delay, or to execute periodically.

 

The `schedule` methods create tasks with various delays
 and return `ScheduledFuture` objects that can be used to cancel or check
 execution. When delays elapse, tasks are enabled for execution and
 behave in accord with other `ExecutorService` tasks, except
 that `scheduleAtFixedRate` and `scheduleWithFixedDelay`
 methods create and execute tasks that run periodically until
 cancelled.

 

Commands submitted using the `execute`
 and `ExecutorService` `submit` methods are scheduled
 with a requested delay of zero. Zero and negative delays (but not
 periods) are also allowed in `schedule` methods, and are
 treated as requests for immediate execution.

 

All `schedule` methods accept relative delays and
 periods as arguments, not absolute times or dates. It is a simple
 matter to transform an absolute time represented as a `java.util.Date` to the required form. For example, to schedule at
 a certain future `date`, you can use: `schedule(task,
 date.getTime() - System.currentTimeMillis(),
 TimeUnit.MILLISECONDS)`. Beware however that expiration of a
 relative delay need not coincide with the current `Date` at
 which the task is enabled due to network time synchronization
 protocols, clock drift, or other factors.

 

The `Executors` class provides convenient factory methods for
 the ScheduledExecutorService implementations provided in this package.

 Usage Example

 Here is a class with a method that sets up a ScheduledExecutorService
 to beep every ten seconds for an hour:

 
```
 `import static java.util.concurrent.TimeUnit.*;
 class BeeperControl {
   private final ScheduledExecutorService scheduler =
     Executors.newScheduledThreadPool(1);

   public void beepForAnHour() {
     Runnable beeper = () -> System.out.println("beep");
     ScheduledFuture<?> beeperHandle =
       scheduler.scheduleAtFixedRate(beeper, 10, 10, SECONDS);
     Runnable canceller = () -> beeperHandle.cancel(false);
     scheduler.schedule(canceller, 1, HOURS);
   `
 }}
```

> *Since 1.5*
