---
id: "java-en-function-thread-getuncaughtexceptionhandler"
language: "java"
lang: "en"
category: "function"
name: "Thread.getUncaughtExceptionHandler"
signature: "public UncaughtExceptionHandler getUncaughtExceptionHandler()"
title: "Thread.getUncaughtExceptionHandler"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.getUncaughtExceptionHandler

```java
public UncaughtExceptionHandler getUncaughtExceptionHandler()
```

Returns the handler invoked when this thread abruptly terminates
 due to an uncaught exception. If this thread has not had an
 uncaught exception handler explicitly set then this thread's
 `ThreadGroup` object is returned, unless this thread
 has terminated, in which case `null` is returned.

**返回**

- the uncaught exception handler for this thread

> *Since 1.5*
