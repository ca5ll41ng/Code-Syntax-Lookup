---
id: "java-en-function-thread-getallstacktraces"
language: "java"
lang: "en"
category: "function"
name: "Thread.getAllStackTraces"
signature: "public static Map<Thread, StackTraceElement[]> getAllStackTraces()"
title: "Thread.getAllStackTraces"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.getAllStackTraces

```java
public static Map<Thread, StackTraceElement[]> getAllStackTraces()
```

Returns a map of stack traces for all live platform threads. The map
 does not include virtual threads.
 The map keys are threads and each map value is an array of
 `StackTraceElement` that represents the stack dump
 of the corresponding `Thread`.
 The returned stack traces are in the format specified for
 the `getStackTrace getStackTrace` method.

 

The threads may be executing while this method is called.
 The stack trace of each thread only represents a snapshot and
 each stack trace may be obtained at different time.  A zero-length
 array will be returned in the map value if the virtual machine has
 no stack trace information about a thread.

**返回**

- a `Map` from `Thread` to an array of `StackTraceElement` that represents the stack trace of the corresponding thread.

**参见**

- #getStackTrace
- Throwable#getStackTrace

> *Since 1.5*
