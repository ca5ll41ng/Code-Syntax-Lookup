---
id: "java-en-function-thread-setdefaultuncaughtexceptionhandler"
language: "java"
lang: "en"
category: "function"
name: "Thread.setDefaultUncaughtExceptionHandler"
signature: "public static void setDefaultUncaughtExceptionHandler(UncaughtExceptionHandler ueh)"
title: "Thread.setDefaultUncaughtExceptionHandler"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.setDefaultUncaughtExceptionHandler

```java
public static void setDefaultUncaughtExceptionHandler(UncaughtExceptionHandler ueh)
```

Set the default handler invoked when a thread abruptly terminates
 due to an uncaught exception, and no other handler has been defined
 for that thread.

 

Uncaught exception handling is controlled first by the thread, then
 by the thread's `ThreadGroup` object and finally by the default
 uncaught exception handler. If the thread does not have an explicit
 uncaught exception handler set, and the thread's thread group
 (including parent thread groups)  does not specialize its
 `uncaughtException` method, then the default handler's
 `uncaughtException` method will be invoked.
 

By setting the default uncaught exception handler, an application
 can change the way in which uncaught exceptions are handled (such as
 logging to a specific device, or file) for those threads that would
 already accept whatever &quot;default&quot; behavior the system
 provided.

 

Note that the default uncaught exception handler should not usually
 defer to the thread's `ThreadGroup` object, as that could cause
 infinite recursion.

**参数**

- **ueh** — the object to use as the default uncaught exception handler. If `null` then there is no default handler.

**参见**

- #setUncaughtExceptionHandler
- #getUncaughtExceptionHandler
- ThreadGroup#uncaughtException

> *Since 1.5*
