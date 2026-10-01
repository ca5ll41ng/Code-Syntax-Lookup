---
id: "java-en-function-asynchronoussocketchannel-getlocaladdress"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousSocketChannel.getLocalAddress"
signature: "public abstract SocketAddress getLocalAddress() throws IOException"
title: "AsynchronousSocketChannel.getLocalAddress"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousSocketChannel.getLocalAddress

```java
public abstract SocketAddress getLocalAddress() throws IOException
```

{@inheritDoc}

**返回**

- The `SocketAddress` that the socket is bound to; `null` if the channel's socket is not bound

**异常**

- **ClosedChannelException** — {@inheritDoc}
- **IOException** — {@inheritDoc}
