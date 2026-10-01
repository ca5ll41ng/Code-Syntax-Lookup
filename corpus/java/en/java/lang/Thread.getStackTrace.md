---
id: "java-en-function-thread-getstacktrace"
language: "java"
lang: "en"
category: "function"
name: "Thread.getStackTrace"
signature: "public StackTraceElement[] getStackTrace()"
title: "Thread.getStackTrace"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.getStackTrace

```java
public StackTraceElement[] getStackTrace()
```

Returns an array of stack trace elements representing the stack dump
 of this thread.  This method will return a zero-length array if
 this thread has not started, has started but has not yet been
 scheduled to run by the system, or has terminated.
 If the returned array is of non-zero length then the first element of
 the array represents the top of the stack, which is the most recent
 method invocation in the sequence.  The last element of the array
 represents the bottom of the stack, which is the least recent method
 invocation in the sequence.

 

Some virtual machines may, under some circumstances, omit one
 or more stack frames from the stack trace.  In the extreme case,
 a virtual machine that has no stack trace information concerning
 this thread is permitted to return a zero-length array from this
 method.

**返回**

- an array of `StackTraceElement`, each represents one stack frame.

**参见**

- Throwable#getStackTrace

> *Since 1.5*
