---
id: "java-en-function-datagramchannel-getremoteaddress"
language: "java"
lang: "en"
category: "function"
name: "DatagramChannel.getRemoteAddress"
signature: "public abstract SocketAddress getRemoteAddress() throws IOException"
title: "DatagramChannel.getRemoteAddress"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/DatagramChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramChannel.getRemoteAddress

```java
public abstract SocketAddress getRemoteAddress() throws IOException
```

Returns the remote address to which this channel's socket is connected.

**返回**

- The remote address; `null` if the channel's socket is not connected

**异常**

- **ClosedChannelException** — If the channel is closed
- **IOException** — If an I/O error occurs

> *Since 1.7*
