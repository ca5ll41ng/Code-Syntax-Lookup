---
id: "java-en-function-asynchronousserversocketchannel-open"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousServerSocketChannel.open"
signature: "public static AsynchronousServerSocketChannel open(AsynchronousChannelGroup group) throws IOException"
title: "AsynchronousServerSocketChannel.open"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousServerSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousServerSocketChannel.open

```java
public static AsynchronousServerSocketChannel open(AsynchronousChannelGroup group) throws IOException
```

Opens an asynchronous server-socket channel.

 

 The new channel is created by invoking the `openAsynchronousServerSocketChannel
 openAsynchronousServerSocketChannel` method on the `java.nio.channels.spi.AsynchronousChannelProvider` object that created
 the given group. If the group parameter is `null` then the
 resulting channel is created by the system-wide default provider, and
 bound to the default group.

**参数**

- **group** — The group to which the newly constructed channel should be bound, or `null` for the default group

**返回**

- A new asynchronous server socket channel

**异常**

- **ShutdownChannelGroupException** — If the channel group is shutdown
- **IOException** — If an I/O error occurs
