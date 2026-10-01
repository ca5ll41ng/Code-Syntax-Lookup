---
id: "java-en-function-thread-getdefaultuncaughtexceptionhandler"
language: "java"
lang: "en"
category: "function"
name: "Thread.getDefaultUncaughtExceptionHandler"
signature: "public static UncaughtExceptionHandler getDefaultUncaughtExceptionHandler()"
title: "Thread.getDefaultUncaughtExceptionHandler"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.getDefaultUncaughtExceptionHandler

```java
public static UncaughtExceptionHandler getDefaultUncaughtExceptionHandler()
```

Returns the default handler invoked when a thread abruptly terminates
 due to an uncaught exception. If the returned value is `null`,
 there is no default.

**返回**

- the default uncaught exception handler for all threads

**参见**

- #setDefaultUncaughtExceptionHandler

> *Since 1.5*
