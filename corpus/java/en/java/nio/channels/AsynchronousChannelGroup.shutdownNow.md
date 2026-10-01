---
id: "java-en-function-asynchronouschannelgroup-shutdownnow"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousChannelGroup.shutdownNow"
signature: "public abstract void shutdownNow() throws IOException"
title: "AsynchronousChannelGroup.shutdownNow"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousChannelGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannelGroup.shutdownNow

```java
public abstract void shutdownNow() throws IOException
```

Shuts down the group and closes all open channels in the group.

 

 In addition to the actions performed by the `shutdown() shutdown`
 method, this method invokes the `close close`
 method on all open channels in the group. This method does not attempt to
 stop or interrupt threads that are executing completion handlers. The
 group terminates when all actively executing completion handlers have run
 to completion and all resources have been released. This method may be
 invoked at any time. If some other thread has already invoked it, then
 another invocation will block until the first invocation is complete,
 after which it will return without effect.

**异常**

- **IOException** — If an I/O error occurs
