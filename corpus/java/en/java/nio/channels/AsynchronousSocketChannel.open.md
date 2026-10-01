---
id: "java-en-function-asynchronoussocketchannel-open"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousSocketChannel.open"
signature: "public static AsynchronousSocketChannel open(AsynchronousChannelGroup group) throws IOException"
title: "AsynchronousSocketChannel.open"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousSocketChannel.open

```java
public static AsynchronousSocketChannel open(AsynchronousChannelGroup group) throws IOException
```

Opens an asynchronous socket channel.

 

 The new channel is created by invoking the `openAsynchronousSocketChannel
 openAsynchronousSocketChannel` method on the `AsynchronousChannelProvider` that created the group. If the group parameter
 is `null` then the resulting channel is created by the system-wide
 default provider, and bound to the default group.

**参数**

- **group** — The group to which the newly constructed channel should be bound, or `null` for the default group

**返回**

- A new asynchronous socket channel

**异常**

- **ShutdownChannelGroupException** — If the channel group is shutdown
- **IOException** — If an I/O error occurs
