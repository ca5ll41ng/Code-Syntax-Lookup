---
id: "java-en-function-threadgroup-uncaughtexception"
language: "java"
lang: "en"
category: "function"
name: "ThreadGroup.uncaughtException"
signature: "public void uncaughtException(Thread t, Throwable e)"
title: "ThreadGroup.uncaughtException"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadGroup.uncaughtException

```java
public void uncaughtException(Thread t, Throwable e)
```

Called by the Java Virtual Machine when a thread in this
 thread group stops because of an uncaught exception, and the thread
 does not have a specific `Thread.UncaughtExceptionHandler`
 installed.
 

 The `uncaughtException` method of
 `ThreadGroup` does the following:
 
 
- If this thread group has a parent thread group, the
     `uncaughtException` method of that parent is called
     with the same two arguments.
 
- Otherwise, this method checks to see if there is a
     `getDefaultUncaughtExceptionHandler default
     uncaught exception handler` installed, and if so, its
     `uncaughtException` method is called with the same
     two arguments.
 
- Otherwise, a message containing the thread's name, as returned
     from the thread's `getName getName` method, and a
     stack backtrace, using the `Throwable`'s `printStackTrace() printStackTrace` method, is
     printed to the `err standard error stream`.
 

 

 Applications can override this method in subclasses of
 `ThreadGroup` to provide alternative handling of
 uncaught exceptions.

**参数**

- **t** — the thread that is about to exit.
- **e** — the uncaught exception.
