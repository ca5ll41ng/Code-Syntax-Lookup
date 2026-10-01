---
id: "java-en-function-datagramchannel-write"
language: "java"
lang: "en"
category: "function"
name: "DatagramChannel.write"
signature: "public abstract int write(ByteBuffer src) throws IOException"
title: "DatagramChannel.write"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/DatagramChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramChannel.write

```java
public abstract int write(ByteBuffer src) throws IOException
```

Writes a datagram to this channel.

 

 This method may only be invoked if this channel's socket is
 connected, in which case it sends datagrams directly to the socket's
 peer.  Otherwise it behaves exactly as specified in the `WritableByteChannel` interface.

**异常**

- **NotYetConnectedException** — If this channel's socket is not connected
- **ClosedChannelException** — {@inheritDoc}
- **AsynchronousCloseException** — {@inheritDoc}
- **ClosedByInterruptException** — {@inheritDoc}
