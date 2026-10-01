---
id: "java-en-function-asynchronouschannelprovider-openasynchronouschannelgroup"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousChannelProvider.openAsynchronousChannelGroup"
signature: "public abstract AsynchronousChannelGroup openAsynchronousChannelGroup(int nThreads, ThreadFactory threadFactory) throws IOException"
title: "AsynchronousChannelProvider.openAsynchronousChannelGroup"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AsynchronousChannelProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannelProvider.openAsynchronousChannelGroup

```java
public abstract AsynchronousChannelGroup openAsynchronousChannelGroup(int nThreads, ThreadFactory threadFactory) throws IOException
```

Constructs a new asynchronous channel group with a fixed thread pool.

**参数**

- **nThreads** — The number of threads in the pool
- **threadFactory** — The factory to use when creating new threads

**返回**

- A new asynchronous channel group

**异常**

- **IllegalArgumentException** — If `nThreads <= 0`
- **IOException** — If an I/O error occurs

**参见**

- AsynchronousChannelGroup#withFixedThreadPool
