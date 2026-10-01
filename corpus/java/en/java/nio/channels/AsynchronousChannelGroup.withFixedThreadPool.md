---
id: "java-en-function-asynchronouschannelgroup-withfixedthreadpool"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousChannelGroup.withFixedThreadPool"
signature: "public static AsynchronousChannelGroup withFixedThreadPool(int nThreads, ThreadFactory threadFactory) throws IOException"
title: "AsynchronousChannelGroup.withFixedThreadPool"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousChannelGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannelGroup.withFixedThreadPool

```java
public static AsynchronousChannelGroup withFixedThreadPool(int nThreads, ThreadFactory threadFactory) throws IOException
```

Creates an asynchronous channel group with a fixed thread pool.

 

 The resulting asynchronous channel group reuses a fixed number of
 threads. At any point, at most `nThreads` threads will be active
 processing tasks that are submitted to handle I/O events and dispatch
 completion results for operations initiated on asynchronous channels in
 the group.

 

 The group is created by invoking the `openAsynchronousChannelGroup(int,ThreadFactory)
 openAsynchronousChannelGroup` method of the system-wide
 default `AsynchronousChannelProvider` object.

**参数**

- **nThreads** — The number of threads in the pool
- **threadFactory** — The factory to use when creating new threads

**返回**

- A new asynchronous channel group

**异常**

- **IllegalArgumentException** — If `nThreads <= 0`
- **IOException** — If an I/O error occurs
