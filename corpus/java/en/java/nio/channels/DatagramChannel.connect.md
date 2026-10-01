---
id: "java-en-function-datagramchannel-connect"
language: "java"
lang: "en"
category: "function"
name: "DatagramChannel.connect"
signature: "public abstract DatagramChannel connect(SocketAddress remote) throws IOException"
title: "DatagramChannel.connect"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/DatagramChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramChannel.connect

```java
public abstract DatagramChannel connect(SocketAddress remote) throws IOException
```

Connects this channel's socket.

 

 The channel's socket is configured so that it only receives
 datagrams from, and sends datagrams to, the given remote peer
 address.  Once connected, datagrams may not be received from or sent to
 any other address.  Datagrams in the channel's `SO_RCVBUF socket receive buffer`, which
 have not been `receive(ByteBuffer) received` before invoking
 this method, may be discarded.  The channel's socket remains connected
 until it is explicitly disconnected or until it is closed.

 

 This method may be invoked at any time.  If another thread has
 already initiated a read or write operation upon this channel, then an
 invocation of this method will block until any such operation is
 complete.  If this channel's socket is not bound then this method will
 first cause the socket to be bound to an address that is assigned
 automatically, as if invoking the `bind bind` method with a
 parameter of `null`.

**参数**

- **remote** — The remote address to which this channel is to be connected

**返回**

- This datagram channel

**异常**

- **AlreadyConnectedException** — If this channel is already connected
- **ClosedChannelException** — If this channel is closed
- **AsynchronousCloseException** — If another thread closes this channel while the connect operation is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the connect operation is in progress, thereby closing the channel and setting the current thread's interrupted status
- **UnresolvedAddressException** — If the given remote address is not fully resolved
- **UnsupportedAddressTypeException** — If the type of the given remote address is not supported
- **IOException** — If some other I/O error occurs
