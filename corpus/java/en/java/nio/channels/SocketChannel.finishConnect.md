---
id: "java-en-function-socketchannel-finishconnect"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.finishConnect"
signature: "public abstract boolean finishConnect() throws IOException"
title: "SocketChannel.finishConnect"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.finishConnect

```java
public abstract boolean finishConnect() throws IOException
```

Finishes the process of connecting a socket channel.

 

 A non-blocking connection operation is initiated by placing a socket
 channel in non-blocking mode and then invoking its `connect
 connect` method.  Once the connection is established, or the attempt has
 failed, the socket channel will become connectable and this method may
 be invoked to complete the connection sequence.  If the connection
 operation failed then invoking this method will cause an appropriate
 `java.io.IOException` to be thrown.

 

 If this channel is already connected then this method will not block
 and will immediately return `true`.  If this channel is in
 non-blocking mode then this method will return `false` if the
 connection process is not yet complete.  If this channel is in blocking
 mode then this method will block until the connection either completes
 or fails, and will always either return `true` or throw a checked
 exception describing the failure.

 

 This method may be invoked at any time.  If a read or write
 operation upon this channel is invoked while an invocation of this
 method is in progress then that operation will first block until this
 invocation is complete.  If a connection attempt fails, that is, if an
 invocation of this method throws a checked exception, then the channel
 will be closed.

**返回**

- `true` if, and only if, this channel's socket is now connected

**异常**

- **NoConnectionPendingException** — If this channel is not connected and a connection operation has not been initiated
- **ClosedChannelException** — If this channel is closed
- **AsynchronousCloseException** — If another thread closes this channel while the connect operation is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the connect operation is in progress, thereby closing the channel and setting the current thread's interrupted status
- **IOException** — If some other I/O error occurs
