---
id: "java-en-function-datagramchannel-read"
language: "java"
lang: "en"
category: "function"
name: "DatagramChannel.read"
signature: "public abstract int read(ByteBuffer dst) throws IOException"
title: "DatagramChannel.read"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/DatagramChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramChannel.read

```java
public abstract int read(ByteBuffer dst) throws IOException
```

Reads a datagram from this channel.

 

 This method may only be invoked if this channel's socket is
 connected, and it only accepts datagrams from the socket's peer.  If
 there are more bytes in the datagram than remain in the given buffer
 then the remainder of the datagram is silently discarded.  Otherwise
 this method behaves exactly as specified in the `ReadableByteChannel` interface.

**异常**

- **NotYetConnectedException** — If this channel's socket is not connected
- **ClosedChannelException** — {@inheritDoc}
- **AsynchronousCloseException** — {@inheritDoc}
- **ClosedByInterruptException** — {@inheritDoc}
