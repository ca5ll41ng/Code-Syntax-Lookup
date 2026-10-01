---
id: "java-en-function-throwable-fillinstacktrace"
language: "java"
lang: "en"
category: "function"
name: "Throwable.fillInStackTrace"
signature: "public synchronized Throwable fillInStackTrace()"
title: "Throwable.fillInStackTrace"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Throwable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Throwable.fillInStackTrace

```java
public synchronized Throwable fillInStackTrace()
```

Fills in the execution stack trace. This method records within this
 `Throwable` object information about the current state of
 the stack frames for the current thread.

 

If the stack trace of this `Throwable` `Throwable(String, Throwable, boolean, boolean) is not
 writable`, calling this method has no effect.

**返回**

- a reference to this `Throwable` instance.

**参见**

- java.lang.Throwable#printStackTrace()
