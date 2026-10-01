---
id: "java-en-function-runtime-addshutdownhook"
language: "java"
lang: "en"
category: "function"
name: "Runtime.addShutdownHook"
signature: "public void addShutdownHook(Thread hook)"
title: "Runtime.addShutdownHook"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.addShutdownHook

```java
public void addShutdownHook(Thread hook)
```

Registers a new virtual-machine shutdown hook.

 

 A shutdown hook is simply an initialized but unstarted thread. Shutdown hooks
 are started at the beginning of the `#shutdown shutdown sequence`.
 Registration and de-registration of shutdown hooks is disallowed once the shutdown
 sequence has begun.
 

 Uncaught exceptions are handled in shutdown hooks just as in any other thread, as
 specified in `Thread.UncaughtExceptionHandler`. After the uncaught exception
 handler has completed, the shutdown hook is considered to have terminated and is not
 treated differently from a hook that has terminated without having thrown an
 uncaught exception.

 Shutdown hooks run at a delicate time in the life cycle of a virtual
 machine and should therefore be coded defensively. They should, in
 particular, be written to be thread-safe and to avoid deadlocks insofar
 as possible. They should also not rely blindly upon services that may
 have registered their own shutdown hooks and therefore may themselves be
 in the process of shutting down. Attempts to use other thread-based
 services such as the AWT event-dispatch thread, for example, may lead to
 deadlocks.
 

 Shutdown hooks should also finish their work quickly.  When a
 program invokes `exit exit`, the expectation is
 that the virtual machine will promptly shut down and exit.  When the
 virtual machine is terminated due to user logoff or system shutdown the
 underlying operating system may only allow a limited amount of time in
 which to shut down and exit. It is therefore inadvisable to attempt any
 user interaction or to perform a long-running computation in a shutdown
 hook.

**参数**

- **hook** — An initialized but unstarted `Thread` object

**异常**

- **IllegalArgumentException** — If the same hook (compared using `==`) as the specified hook has already been registered, or if it can be determined that the hook is already running or has already been run
- **IllegalStateException** — If the shutdown sequence has already begun

**参见**

- #removeShutdownHook
- #halt(int)
- #exit(int)

> *Since 1.3*
