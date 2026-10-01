---
id: "java-en-function-asynchronouschannelprovider-openasynchronoussocketchannel"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousChannelProvider.openAsynchronousSocketChannel"
signature: "public abstract AsynchronousSocketChannel openAsynchronousSocketChannel (AsynchronousChannelGroup group) throws IOException"
title: "AsynchronousChannelProvider.openAsynchronousSocketChannel"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AsynchronousChannelProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannelProvider.openAsynchronousSocketChannel

```java
public abstract AsynchronousSocketChannel openAsynchronousSocketChannel (AsynchronousChannelGroup group) throws IOException
```

Opens an asynchronous socket channel.

**参数**

- **group** — The group to which the channel is bound, or `null` to bind to the default group

**返回**

- The new channel

**异常**

- **IllegalChannelGroupException** — If the provider that created the group differs from this provider
- **ShutdownChannelGroupException** — The group is shutdown
- **IOException** — If an I/O error occurs
