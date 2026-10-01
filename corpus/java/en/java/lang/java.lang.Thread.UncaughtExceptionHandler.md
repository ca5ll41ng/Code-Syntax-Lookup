---
id: "java-en-function-java-lang-thread-uncaughtexceptionhandler"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Thread.UncaughtExceptionHandler"
title: "UncaughtExceptionHandler"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UncaughtExceptionHandler

Interface for handlers invoked when a `Thread` abruptly
 terminates due to an uncaught exception.
 

When a thread is about to terminate due to an uncaught exception
 the Java Virtual Machine will query the thread for its
 `UncaughtExceptionHandler` using
 `getUncaughtExceptionHandler` and will invoke the handler's
 `uncaughtException` method, passing the thread and the
 exception as arguments.
 If a thread has not had its `UncaughtExceptionHandler`
 explicitly set, then its `ThreadGroup` object acts as its
 `UncaughtExceptionHandler`. If the `ThreadGroup` object
 has no
 special requirements for dealing with the exception, it can forward
 the invocation to the `getDefaultUncaughtExceptionHandler
 default uncaught exception handler`.

**参见**

- #setDefaultUncaughtExceptionHandler
- #setUncaughtExceptionHandler
- ThreadGroup#uncaughtException

> *Since 1.5*
