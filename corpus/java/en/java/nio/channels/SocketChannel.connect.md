---
id: "java-en-function-socketchannel-connect"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.connect"
signature: "public abstract boolean connect(SocketAddress remote) throws IOException"
title: "SocketChannel.connect"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.connect

```java
public abstract boolean connect(SocketAddress remote) throws IOException
```

Connects this channel's socket.

 

 If this channel is in non-blocking mode then an invocation of this
 method initiates a non-blocking connection operation.  If the connection
 is established immediately, as can happen with a local connection, then
 this method returns `true`.  Otherwise this method returns
 `false` and the connection operation must later be completed by
 invoking the `finishConnect finishConnect` method.

 

 If this channel is in blocking mode then an invocation of this
 method will block until the connection is established or an I/O error
 occurs.

 

 This method may be invoked at any time.  If a read or write
 operation upon this channel is invoked while an invocation of this
 method is in progress then that operation will first block until this
 invocation is complete.  If a connection attempt is initiated but fails,
 that is, if an invocation of this method throws a checked exception,
 then the channel will be closed.

**参数**

- **remote** — The remote address to which this channel is to be connected

**返回**

- `true` if a connection was established, `false` if this channel is in non-blocking mode and the connection operation is in progress

**异常**

- **AlreadyConnectedException** — If this channel is already connected
- **ConnectionPendingException** — If a non-blocking connection operation is already in progress on this channel
- **ClosedChannelException** — If this channel is closed
- **AsynchronousCloseException** — If another thread closes this channel while the connect operation is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the connect operation is in progress, thereby closing the channel and setting the current thread's interrupted status
- **UnresolvedAddressException** — If the given remote address is an InetSocketAddress that is not fully resolved
- **UnsupportedAddressTypeException** — If the type of the given remote address is not supported
- **IOException** — If some other I/O error occurs
