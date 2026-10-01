---
id: "java-en-function-asynchronouschannelgroup-withcachedthreadpool"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousChannelGroup.withCachedThreadPool"
signature: "public static AsynchronousChannelGroup withCachedThreadPool(ExecutorService executor, int initialSize) throws IOException"
title: "AsynchronousChannelGroup.withCachedThreadPool"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousChannelGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannelGroup.withCachedThreadPool

```java
public static AsynchronousChannelGroup withCachedThreadPool(ExecutorService executor, int initialSize) throws IOException
```

Creates an asynchronous channel group with a given thread pool that
 creates new threads as needed.

 

 The `executor` parameter is an `ExecutorService` that
 creates new threads as needed to execute tasks that are submitted to
 handle I/O events and dispatch completion results for operations initiated
 on asynchronous channels in the group. It may reuse previously constructed
 threads when they are available.

 

 The `initialSize` parameter may be used by the implementation
 as a hint as to the initial number of tasks it may submit. For
 example, it may be used to indicate the initial number of threads that
 wait on I/O events.

 

 The executor is intended to be used exclusively by the resulting
 asynchronous channel group. Termination of the group results in the
 orderly  `shutdown shutdown` of the executor
 service. Shutting down the executor service by other means results in
 unspecified behavior.

 

 The group is created by invoking the `openAsynchronousChannelGroup(ExecutorService,int)
 openAsynchronousChannelGroup` method of the system-wide
 default `AsynchronousChannelProvider` object.

**参数**

- **executor** — The thread pool for the resulting group
- **initialSize** — A value `>=0` or a negative value for implementation specific default

**返回**

- A new asynchronous channel group

**异常**

- **IOException** — If an I/O error occurs

**参见**

- java.util.concurrent.Executors#newCachedThreadPool
