---
id: "java-en-function-asynchronousserversocketchannel-bind"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousServerSocketChannel.bind"
signature: "public final AsynchronousServerSocketChannel bind(SocketAddress local) throws IOException"
title: "AsynchronousServerSocketChannel.bind"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousServerSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousServerSocketChannel.bind

```java
public final AsynchronousServerSocketChannel bind(SocketAddress local) throws IOException
```

Binds the channel's socket to a local address and configures the socket to
 listen for connections.

 

 An invocation of this method is equivalent to the following:
 {@snippet lang=java :
     bind(local, 0);
 }

**参数**

- **local** — The local address to bind the socket, or `null` to bind to an automatically assigned socket address

**返回**

- This channel

**异常**

- **AlreadyBoundException** — {@inheritDoc}
- **UnsupportedAddressTypeException** — {@inheritDoc}
- **ClosedChannelException** — {@inheritDoc}
- **IOException** — {@inheritDoc}
