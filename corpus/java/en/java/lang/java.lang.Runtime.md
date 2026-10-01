---
id: "java-en-function-java-lang-runtime"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Runtime"
title: "Runtime"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime

Every Java application has a single instance of class
 `Runtime` that allows the application to interface with
 the environment in which the application is running. The current
 runtime can be obtained from the `getRuntime` method.

 

An application cannot create its own instance of this class.

 Shutdown Sequence

 

The Java Virtual Machine initiates the shutdown sequence in response
 to one of several events:
 
 
- when the number of `isAlive() live` non-daemon threads drops to zero
 for the first time (see note below on the JNI Invocation API);
 
- when the `exit Runtime.exit` or `exit System.exit` method is called
 for the first time; or
 
- when some external event occurs, such as an interrupt or a signal is received from
 the operating system.
 

 

At the beginning of the shutdown sequence, the registered shutdown hooks are
 `start started` in some unspecified order. They run concurrently
 with any daemon or non-daemon threads that were `isAlive() alive`
 at the beginning of the shutdown sequence.

 

After the shutdown sequence has begun, registration and de-registration of shutdown hooks
 with `addShutdownHook addShutdownHook` and `removeShutdownHook removeShutdownHook`
 is prohibited. However, creating and starting new threads is permitted. New threads run
 concurrently with the registered shutdown hooks and with any daemon or non-daemon threads
 that are already running.

 

The shutdown sequence finishes when all shutdown hooks have terminated. At this point,
 the Java Virtual Machine terminates as described below.

 

It is possible that one or more shutdown hooks do not terminate, for example, because
 of an infinite loop. In this case, the shutdown sequence will never finish. Other threads
 and shutdown hooks continue to run and can terminate the JVM via the `halt halt` method.

 

Prior to the beginning of the shutdown sequence, it is possible for a program to start
 a shutdown hook by calling its `start start` method explicitly. If this occurs, the
 behavior of the shutdown sequence is unspecified.

 Java Virtual Machine Termination

 

The JVM terminates when the shutdown sequence finishes or when `halt halt` is called.
 In contrast to `exit exit`, the `halt halt` method does not initiate the
 shutdown sequence.

 

When the JVM terminates, all threads are immediately prevented from executing any further
 Java code. This includes shutdown hooks as well as daemon and non-daemon threads.
 This means, for example, that:
 
 
- threads' current methods do not complete normally or abruptly;
 
- `finally` clauses are not executed;
 
- `Thread.UncaughtExceptionHandler uncaught exception handlers` are not run; and
 
- resources opened with try-with-resources are not `AutoCloseable closed`;
 

 Native code typically uses the
 JNI Invocation API
 to control launching and termination of the JVM. Such native code invokes the
 `JNI_CreateJavaVM`
 function to launch the JVM. Subsequently, the native code invokes the
 `DestroyJavaVM`
 function to await termination of that JVM. The `DestroyJavaVM` function is responsible
 for initiating the shutdown sequence when the number of `isAlive() live`
 non-daemon threads first drops to zero. When the shutdown sequence completes and the JVM
 terminates, control is returned to the native code that invoked `DestroyJavaVM`. This
 behavior differs from the `exit exit` or `halt halt` methods. These methods
 typically terminate the OS process hosting the JVM and do not interact with the JNI Invocation
 API.

**参见**

- java.lang.Runtime#getRuntime()

> *Since 1.0*
