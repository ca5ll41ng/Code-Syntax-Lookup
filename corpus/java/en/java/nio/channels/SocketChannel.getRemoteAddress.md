---
id: "java-en-function-socketchannel-getremoteaddress"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.getRemoteAddress"
signature: "public abstract SocketAddress getRemoteAddress() throws IOException"
title: "SocketChannel.getRemoteAddress"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.getRemoteAddress

```java
public abstract SocketAddress getRemoteAddress() throws IOException
```

Returns the remote address to which this channel's socket is connected.

 

 Where the channel's socket is bound and connected to an Internet
 Protocol socket address then the return value is of type
 `java.net.InetSocketAddress`.

 

 Where the channel's socket is bound and connected to a Unix Domain
 socket address, the returned address is a `UnixDomainSocketAddress`.

**返回**

- The remote address; `null` if the channel's socket is not connected

**异常**

- **ClosedChannelException** — If the channel is closed
- **IOException** — If an I/O error occurs

> *Since 1.7*
