---
id: "java-en-function-asynchronoussocketchannel-bind"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousSocketChannel.bind"
signature: "public abstract AsynchronousSocketChannel bind(SocketAddress local) throws IOException"
title: "AsynchronousSocketChannel.bind"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousSocketChannel.bind

```java
public abstract AsynchronousSocketChannel bind(SocketAddress local) throws IOException
```

**异常**

- **ConnectionPendingException** — If a connection operation is already in progress on this channel
- **AlreadyBoundException** — {@inheritDoc}
- **UnsupportedAddressTypeException** — {@inheritDoc}
- **ClosedChannelException** — {@inheritDoc}
- **IOException** — {@inheritDoc}
