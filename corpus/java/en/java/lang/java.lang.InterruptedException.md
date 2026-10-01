---
id: "java-en-function-java-lang-interruptedexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.InterruptedException"
title: "InterruptedException"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/InterruptedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InterruptedException

Thrown when a thread executing a blocking method is `interrupt()
 interrupted`. `sleep(long) Thread.sleep`, `wait()
 Object.wait` and many other blocking methods throw this exception if interrupted.

 

 Blocking methods that throw `InterruptedException` clear the thread's
 interrupted status before throwing the exception. Code that catches `InterruptedException` should rethrow the exception, or restore the current thread's
 interrupted status, with `currentThread()
 Thread.currentThread`.`interrupt`, before continuing
 normally or handling it by throwing another type of exception.

**参见**

- Thread##thread-interruption Thread Interruption

> *Since 1.0*
