---
id: "java-en-function-serversocketchannel-accept"
language: "java"
lang: "en"
category: "function"
name: "ServerSocketChannel.accept"
signature: "public abstract SocketChannel accept() throws IOException"
title: "ServerSocketChannel.accept"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ServerSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocketChannel.accept

```java
public abstract SocketChannel accept() throws IOException
```

Accepts a connection made to this channel's socket.

 

 If this channel is in non-blocking mode then this method will
 immediately return `null` if there are no pending connections.
 Otherwise it will block indefinitely until a new connection is available
 or an I/O error occurs.

 

 The socket channel returned by this method, if any, will be in
 blocking mode regardless of the blocking mode of this channel.

**返回**

- The socket channel for the new connection, or `null` if this channel is in non-blocking mode and no connection is available to be accepted

**异常**

- **ClosedChannelException** — If this channel is closed
- **AsynchronousCloseException** — If another thread closes this channel while the accept operation is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the accept operation is in progress, thereby closing the channel and setting the current thread's interrupted status
- **NotYetBoundException** — If this channel's socket has not yet been bound
- **IOException** — If some other I/O error occurs
