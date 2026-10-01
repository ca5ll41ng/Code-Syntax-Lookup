---
id: "java-en-function-threadinfo-getstacktrace"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.getStackTrace"
signature: "public StackTraceElement[] getStackTrace()"
title: "ThreadInfo.getStackTrace"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.getStackTrace

```java
public StackTraceElement[] getStackTrace()
```

Returns the stack trace of the thread
 associated with this `ThreadInfo`.
 If no stack trace was requested for this thread info, this method
 will return a zero-length array.
 If the returned array is of non-zero length then the first element of
 the array represents the top of the stack, which is the most recent
 method invocation in the sequence.  The last element of the array
 represents the bottom of the stack, which is the least recent method
 invocation in the sequence.

 

Some Java virtual machines may, under some circumstances, omit one
 or more stack frames from the stack trace.  In the extreme case,
 a virtual machine that has no stack trace information concerning
 the thread associated with this `ThreadInfo`
 is permitted to return a zero-length array from this method.

**返回**

- an array of `StackTraceElement` objects of the thread.
