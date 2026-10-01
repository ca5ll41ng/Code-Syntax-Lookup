---
id: "java-en-function-datagramchannel-receive"
language: "java"
lang: "en"
category: "function"
name: "DatagramChannel.receive"
signature: "public abstract SocketAddress receive(ByteBuffer dst) throws IOException"
title: "DatagramChannel.receive"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/DatagramChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramChannel.receive

```java
public abstract SocketAddress receive(ByteBuffer dst) throws IOException
```

Receives a datagram via this channel.

 

 If a datagram is immediately available, or if this channel is in
 blocking mode and one eventually becomes available, then the datagram is
 copied into the given byte buffer and its source address is returned.
 If this channel is in non-blocking mode and a datagram is not
 immediately available then this method immediately returns
 `null`.

 

 The datagram is transferred into the given byte buffer starting at
 its current position, as if by a regular `read(java.nio.ByteBuffer) read` operation.  If there
 are fewer bytes remaining in the buffer than are required to hold the
 datagram then the remainder of the datagram is silently discarded.

 

 This method may be invoked at any time.  If another thread has
 already initiated a read operation upon this channel, however, then an
 invocation of this method will block until the first operation is
 complete. If this channel's socket is not bound then this method will
 first cause the socket to be bound to an address that is assigned
 automatically, as if invoking the `bind bind` method with a
 parameter of `null`.

**参数**

- **dst** — The buffer into which the datagram is to be transferred

**返回**

- The datagram's source address, or `null` if this channel is in non-blocking mode and no datagram was immediately available

**异常**

- **IllegalArgumentException** — If the buffer is read-only
- **ClosedChannelException** — If this channel is closed
- **AsynchronousCloseException** — If another thread closes this channel while the read operation is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the read operation is in progress, thereby closing the channel and setting the current thread's interrupted status
- **IOException** — If some other I/O error occurs
