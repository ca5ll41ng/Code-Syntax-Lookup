---
id: "java-en-function-asynchronouschannelgroup-withthreadpool"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousChannelGroup.withThreadPool"
signature: "public static AsynchronousChannelGroup withThreadPool(ExecutorService executor) throws IOException"
title: "AsynchronousChannelGroup.withThreadPool"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousChannelGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannelGroup.withThreadPool

```java
public static AsynchronousChannelGroup withThreadPool(ExecutorService executor) throws IOException
```

Creates an asynchronous channel group with a given thread pool.

 

 The `executor` parameter is an `ExecutorService` that
 executes tasks submitted to dispatch completion results for operations
 initiated on asynchronous channels in the group.

 

 Care should be taken when configuring the executor service. It
 should support direct handoff or unbounded queuing of
 submitted tasks, and the thread that invokes the `execute execute` method should never invoke the task
 directly. An implementation may mandate additional constraints.

 

 The executor is intended to be used exclusively by the resulting
 asynchronous channel group. Termination of the group results in the
 orderly  `shutdown shutdown` of the executor
 service. Shutting down the executor service by other means results in
 unspecified behavior.

 

 The group is created by invoking the `openAsynchronousChannelGroup(ExecutorService,int)
 openAsynchronousChannelGroup` method of the system-wide
 default `AsynchronousChannelProvider` object with an `initialSize` of `0`.

**参数**

- **executor** — The thread pool for the resulting group

**返回**

- A new asynchronous channel group

**异常**

- **IOException** — If an I/O error occurs
