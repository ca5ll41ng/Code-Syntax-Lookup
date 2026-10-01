---
id: "java-en-function-java-lang-thread"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Thread"
title: "Thread"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread

A thread is a thread of execution in a program. The Java
 virtual machine allows an application to have multiple threads of
 execution running concurrently.

 

 `Thread` defines constructors and a `Builder` to create threads.
 `start() Starting` a thread schedules it to execute its `run() run`
 method. The newly started thread executes concurrently with the thread that caused
 it to start.

 

 A thread terminates if either its `run` method completes normally,
 or if its `run` method completes abruptly and the appropriate `Thread.UncaughtExceptionHandler uncaught exception handler` completes normally or
 abruptly. With no code left to run, the thread has completed execution. The `isAlive isAlive` method can be used to test if a started thread has terminated.
 The `join() join` method can be used to wait for a thread to terminate.

 

 Threads have a unique `threadId() identifier` and a `getName() name`. The identifier is generated when a `Thread` is created
 and cannot be changed. The thread name can be specified when creating a thread
 or can be `setName(String) changed` at a later time.

 

 Threads support `ThreadLocal` variables. These are variables that are
 local to a thread, meaning a thread can have a copy of a variable that is set to
 a value that is independent of the value set by other threads. `Thread` also
 supports `InheritableThreadLocal` variables that are thread local variables
 that are inherited at thread creation time from the parent `Thread`.
 `Thread` supports a special inheritable thread local for the thread
 `getContextClassLoader() context-class-loader`.

 Platform Threads
 

 `Thread` supports the creation of platform threads that are
 typically mapped 1:1 to kernel threads scheduled by the operating system.
 Platform threads will usually have a large stack and other resources that are
 maintained by the operating system. Platforms threads are suitable for executing
 all types of tasks but may be a limited resource.

 

 Platform threads get an automatically generated thread name by default.

 

 Platform threads are designated daemon or non-daemon threads.
 When the Java virtual machine starts up, there is usually one non-daemon
 thread (the thread that typically calls the application's `main` method).
 The shutdown sequence begins when all started
 non-daemon threads have terminated. Unstarted non-daemon threads do not prevent
 the shutdown sequence from beginning.

 

 In addition to the daemon status, platform threads have a `getPriority() thread priority` and are members of a `ThreadGroup
 thread group`.

 Virtual Threads
 

 `Thread` also supports the creation of virtual threads.
 Virtual threads are typically user-mode threads scheduled by the Java
 runtime rather than the operating system. Virtual threads will typically require
 few resources and a single Java virtual machine may support millions of virtual
 threads. Virtual threads are suitable for executing tasks that spend most of
 the time blocked, often waiting for I/O operations to complete. Virtual threads
 are not intended for long running CPU intensive operations.

 

 Virtual threads typically employ a small set of platform threads used as
 carrier threads. Locking and I/O operations are examples of operations
 where a carrier thread may be re-scheduled from one virtual thread to another.
 Code executing in a virtual thread is not aware of the underlying carrier thread.
 The `currentThread` method, used to obtain a reference
 to the current thread, will always return the `Thread` object
 for the virtual thread.

 

 Virtual threads do not have a thread name by default. The `getName()
 getName` method returns the empty string if a thread name is not set.

 

 Virtual threads are daemon threads and so do not prevent the
 shutdown sequence from beginning.
 Virtual threads have a fixed `getPriority() thread priority`
 that cannot be changed.

 Creating And Starting Threads

 

 `Thread` defines public constructors for creating platform threads and
 the `start() start` method to schedule threads to execute. `Thread`
 may be extended for customization and other advanced reasons although most
 applications should have little need to do this.

 

 `Thread` defines a `Builder` API for creating and starting both
 platform and virtual threads. The following are examples that use the builder:
 {@snippet :
   Runnable runnable = ...

   // Start a daemon thread to run a task
   Thread thread = Thread.ofPlatform().daemon().start(runnable);

   // Create an unstarted thread with name "duke", its start() method
   // must be invoked to schedule it to execute.
   Thread thread = Thread.ofPlatform().name("duke").unstarted(runnable);

   // A ThreadFactory that creates daemon threads named "worker-0", "worker-1", ...
   ThreadFactory factory = Thread.ofPlatform().daemon().name("worker-", 0).factory();

   // Start a virtual thread to run a task
   Thread thread = Thread.ofVirtual().start(runnable);

   // A ThreadFactory that creates virtual threads
   ThreadFactory factory = Thread.ofVirtual().factory();
 }

 Inheritance When Creating Threads
 A `Thread` created with one of the public constructors inherits the daemon
 status and thread priority from the parent thread at the time that the child `Thread` is created. The `ThreadGroup thread group` is also inherited when
 not provided to the constructor. When using a `Thread.Builder` to create a
 platform thread, the daemon status, thread priority, and thread group are inherited
 when not set on the builder. As with the constructors, inheriting from the parent
 thread is done when the child `Thread` is created.

 

 A `Thread` inherits its initial values of `InheritableThreadLocal
 inheritable-thread-local` variables (including the context class loader) from
 the parent thread values at the time that the child `Thread` is created.
 The 5-param `Thread(ThreadGroup, Runnable, String, long, boolean)
 constructor` can be used to create a thread that does not inherit its initial
 values from the constructing thread. When using a `Thread.Builder`, the
 `inheritInheritableThreadLocals(boolean) inheritInheritableThreadLocals`
 method can be used to select if the initial values are inherited.

 Thread Interruption
 A `Thread` has an interrupted status which serves as a "request" for
 code executing in the thread to "stop or cancel its current activity". The interrupted
 status is set by invoking the target thread's `interrupt` method. Many methods
 that cause a thread to block or wait are interruptible, meaning they detect
 that the thread's interrupted status is set and cause execution to return early from
 the method, usually by throwing an exception.

 

 If a thread executing `sleep(long) Thread.sleep` or `wait()
 Object.wait` is interrupted then it causes the method to throw `InterruptedException`.
 Methods that throw `InterruptedException` do so after first clearing the
 interrupted status. Code that catches `InterruptedException` should rethrow the
 exception, or restore the current thread's interrupted status, with
 `currentThread`.`interrupt`, before
 continuing normally or handling it by throwing another type of exception. Code that
 throws another type of exception with the `InterruptedException` as `getCause() cause`, or the `InterruptedException` as a `addSuppressed(Throwable) suppressed exception`, should also restore the
 interrupted status before throwing the exception.

 

 If a thread executing a blocking I/O operation on an `java.nio.channels.InterruptibleChannel` is interrupted then it causes the channel to be
 closed, and the blocking I/O operation to throw `java.nio.channels.ClosedByInterruptException`
 with the thread's interrupted status set. If a thread blocked in a `java.nio.channels.Selector selection operation` is interrupted then it causes the
 selection operation to return early, with the thread's interrupted status set.

 

 Code that doesn't invoke any interruptible methods can still respond to interrupt
 by polling the current thread's interrupted status with
 `currentThread`.`isInterrupted()
 isInterrupted`.

 

 In addition to the `interrupt` and `isInterrupted` methods,
 `Thread` also defines the static `interrupted`
 method to test the current thread's interrupted status and clear it. It should be rare
 to need to use this method.

 Null Handling
 Unless otherwise specified, passing a `null` argument to a constructor
 or method in this class will cause a `NullPointerException` to be thrown.

 In the JDK Reference Implementation, the virtual thread scheduler may be configured
 with the following system properties:
 
 System properties
   
   
     System property
     Description
   
   
   
   
     
       {@systemProperty jdk.virtualThreadScheduler.parallelism}
     
      The scheduler's target parallelism. This is the number of platform threads
       available for scheduling virtual threads. It defaults to the number of available
       processors. 
   
   
     
       {@systemProperty jdk.virtualThreadScheduler.maxPoolSize}
     
      The maximum number of platform threads available to the scheduler.
       It defaults to 256. 
   
   
 
 

 The virtual thread scheduler can be monitored and managed with the
 `jdk.management.VirtualThreadSchedulerMXBean` management interface.

> *Since 1.0*
