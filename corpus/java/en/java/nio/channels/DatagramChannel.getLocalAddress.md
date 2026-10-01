---
id: "java-en-function-datagramchannel-getlocaladdress"
language: "java"
lang: "en"
category: "function"
name: "DatagramChannel.getLocalAddress"
signature: "public abstract SocketAddress getLocalAddress() throws IOException"
title: "DatagramChannel.getLocalAddress"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/DatagramChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramChannel.getLocalAddress

```java
public abstract SocketAddress getLocalAddress() throws IOException
```

{@inheritDoc}
 

 If the channel's socket was initially bound to the wildcard address and
 is now `isConnected connected`, then the address returned
 may be the local address selected as the source address for
 datagrams sent via this channel instead of the wildcard address.
 When `disconnect` is called, the bound address reverts
 to the wildcard address.

**返回**

- The `SocketAddress` that the socket is bound to; `null` if the channel's socket is not bound

**异常**

- **ClosedChannelException** — {@inheritDoc}
- **IOException** — {@inheritDoc}
