---
id: "java-en-function-networkchannel-getlocaladdress"
language: "java"
lang: "en"
category: "function"
name: "NetworkChannel.getLocalAddress"
signature: "SocketAddress getLocalAddress() throws IOException"
title: "NetworkChannel.getLocalAddress"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/NetworkChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkChannel.getLocalAddress

```java
SocketAddress getLocalAddress() throws IOException
```

Returns the socket address that this channel's socket is bound to.

 

 Where the channel is `bind bound` to an Internet Protocol
 socket address then the return value from this method is of type `java.net.InetSocketAddress`.

**返回**

- The socket address that the socket is bound to, or `null` if the channel's socket is not bound

**异常**

- **ClosedChannelException** — If the channel is closed
- **IOException** — If an I/O error occurs
