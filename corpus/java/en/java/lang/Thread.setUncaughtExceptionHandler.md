---
id: "java-en-function-thread-setuncaughtexceptionhandler"
language: "java"
lang: "en"
category: "function"
name: "Thread.setUncaughtExceptionHandler"
signature: "public void setUncaughtExceptionHandler(UncaughtExceptionHandler ueh)"
title: "Thread.setUncaughtExceptionHandler"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.setUncaughtExceptionHandler

```java
public void setUncaughtExceptionHandler(UncaughtExceptionHandler ueh)
```

Set the handler invoked when this thread abruptly terminates
 due to an uncaught exception.
 

A thread can take full control of how it responds to uncaught
 exceptions by having its uncaught exception handler explicitly set.
 If no such handler is set then the thread's `ThreadGroup`
 object acts as its handler.

**参数**

- **ueh** — the object to use as this thread's uncaught exception handler. If `null` then this thread has no explicit handler.

**参见**

- #setDefaultUncaughtExceptionHandler
- ThreadGroup#uncaughtException

> *Since 1.5*
