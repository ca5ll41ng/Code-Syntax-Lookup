---
id: "java-en-function-java-lang-thread-builder"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Thread.Builder"
title: "Builder"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder

A builder for `Thread` and `ThreadFactory` objects.

 

 `Builder` defines methods to set `Thread` properties such
 as the thread `name(String) name`. This includes properties that would
 otherwise be inherited. Once set, a
 `Thread` or `ThreadFactory` is created with the following methods:

 
     
-  The `unstarted(Runnable) unstarted` method creates a new
          unstarted `Thread` to run a task. The `Thread`'s
          `start() start` method must be invoked to schedule the
          thread to execute.
     
-  The `start(Runnable) start` method creates a new `Thread` to run a task and schedules the thread to execute.
     
-  The `factory() factory` method creates a `ThreadFactory`.
 

 

 A `Thread.Builder` is not thread safe. The `ThreadFactory`
 returned by the builder's `factory()` method is thread safe.

 

 Unless otherwise specified, passing a null argument to a method in
 this interface causes a `NullPointerException` to be thrown.

**参见**

- Thread#ofPlatform()
- Thread#ofVirtual()

> *Since 21*
