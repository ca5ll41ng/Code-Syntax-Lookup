---
id: "java-en-function-datagramchannel-send"
language: "java"
lang: "en"
category: "function"
name: "DatagramChannel.send"
signature: "public abstract int send(ByteBuffer src, SocketAddress target) throws IOException"
title: "DatagramChannel.send"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/DatagramChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramChannel.send

```java
public abstract int send(ByteBuffer src, SocketAddress target) throws IOException
```

Sends a datagram via this channel.

 

 If this channel is in non-blocking mode and there is sufficient room
 in the underlying output buffer, or if this channel is in blocking mode
 and sufficient room becomes available, then the remaining bytes in the
 given buffer are transmitted as a single datagram to the given target
 address.

 

 The datagram is transferred from the byte buffer as if by a regular
 `write(java.nio.ByteBuffer) write` operation.

 

 This method may be invoked at any time.  If another thread has
 already initiated a write operation upon this channel, however, then an
 invocation of this method will block until the first operation is
 complete. If this channel's socket is not bound then this method will
 first cause the socket to be bound to an address that is assigned
 automatically, as if by invoking the `bind bind` method with a
 parameter of `null`.

**参数**

- **src** — The buffer containing the datagram to be sent
- **target** — The address to which the datagram is to be sent

**返回**

- The number of bytes sent, which will be either the number of bytes that were remaining in the source buffer when this method was invoked or, if this channel is non-blocking, may be zero if there was insufficient room for the datagram in the underlying output buffer

**异常**

- **AlreadyConnectedException** — If this channel is connected to a different address from that specified by `target`
- **ClosedChannelException** — If this channel is closed
- **AsynchronousCloseException** — If another thread closes this channel while the read operation is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the read operation is in progress, thereby closing the channel and setting the current thread's interrupted status
- **UnresolvedAddressException** — If the given remote address is not fully resolved
- **UnsupportedAddressTypeException** — If the type of the given remote address is not supported
- **IOException** — If some other I/O error occurs
