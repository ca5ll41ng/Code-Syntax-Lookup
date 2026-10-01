---
id: "java-en-function-throwable-getstacktrace"
language: "java"
lang: "en"
category: "function"
name: "Throwable.getStackTrace"
signature: "public StackTraceElement[] getStackTrace()"
title: "Throwable.getStackTrace"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Throwable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Throwable.getStackTrace

```java
public StackTraceElement[] getStackTrace()
```

Provides programmatic access to the stack trace information printed by
 `printStackTrace`.  Returns an array of stack trace elements,
 each representing one stack frame.  The zeroth element of the array
 (assuming the array's length is non-zero) represents the top of the
 stack, which is the last method invocation in the sequence.  Typically,
 this is the point at which this throwable was created and thrown.
 The last element of the array (assuming the array's length is non-zero)
 represents the bottom of the stack, which is the first method invocation
 in the sequence.

 

Some virtual machines may, under some circumstances, omit one
 or more stack frames from the stack trace.  In the extreme case,
 a virtual machine that has no stack trace information concerning
 this throwable is permitted to return a zero-length array from this
 method.  Generally speaking, the array returned by this method will
 contain one element for every frame that would be printed by
 `printStackTrace`.  Writes to the returned array do not
 affect future calls to this method.

**返回**

- an array of stack trace elements representing the stack trace pertaining to this throwable.

> *Since 1.4*
