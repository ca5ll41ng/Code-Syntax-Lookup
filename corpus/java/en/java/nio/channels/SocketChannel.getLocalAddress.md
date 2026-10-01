---
id: "java-en-function-socketchannel-getlocaladdress"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.getLocalAddress"
signature: "public abstract SocketAddress getLocalAddress() throws IOException"
title: "SocketChannel.getLocalAddress"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.getLocalAddress

```java
public abstract SocketAddress getLocalAddress() throws IOException
```

{@inheritDoc}

 

 Where the channel is bound to a Unix Domain socket address, the socket
 address is a `UnixDomainSocketAddress`.

**返回**

- The `SocketAddress` that the socket is bound to; `null` if the channel's socket is not bound

**异常**

- **ClosedChannelException** — {@inheritDoc}
- **IOException** — {@inheritDoc}
