---
id: "java-en-function-serversocketchannel-getlocaladdress"
language: "java"
lang: "en"
category: "function"
name: "ServerSocketChannel.getLocalAddress"
signature: "public abstract SocketAddress getLocalAddress() throws IOException"
title: "ServerSocketChannel.getLocalAddress"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ServerSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocketChannel.getLocalAddress

```java
public abstract SocketAddress getLocalAddress() throws IOException
```

{@inheritDoc}

 

 Where the channel is bound to a Unix Domain socket address, the socket
 address is a `UnixDomainSocketAddress`.

**返回**

- The `SocketAddress` that the socket is bound to or `null` if the channel's socket is not bound

**异常**

- **ClosedChannelException** — {@inheritDoc}
- **IOException** — {@inheritDoc}
