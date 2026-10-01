---
id: "java-en-function-uncaughtexceptionhandler-uncaughtexception"
language: "java"
lang: "en"
category: "function"
name: "UncaughtExceptionHandler.uncaughtException"
signature: "void uncaughtException(Thread t, Throwable e)"
title: "UncaughtExceptionHandler.uncaughtException"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UncaughtExceptionHandler.uncaughtException

```java
void uncaughtException(Thread t, Throwable e)
```

Method invoked when the given thread terminates due to the
 given uncaught exception.
 

Any exception thrown by this method will be ignored by the
 Java Virtual Machine.

**参数**

- **t** — the thread
- **e** — the exception
