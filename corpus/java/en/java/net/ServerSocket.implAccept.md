---
id: "java-en-function-serversocket-implaccept"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.implAccept"
signature: "protected final void implAccept(Socket s) throws IOException"
title: "ServerSocket.implAccept"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.implAccept

```java
protected final void implAccept(Socket s) throws IOException
```

Subclasses of ServerSocket use this method to override accept()
 to return their own subclass of socket.  So a FooServerSocket
 will typically hand this method a newly created, unbound, FooSocket.
 On return from implAccept the FooSocket will be connected to a client.

 

 The behavior of this method is unspecified when invoked with a
 socket that is not newly created and unbound. Any socket options set
 on the given socket prior to invoking this method may or may not be
 preserved when the connection is accepted. It may not be possible to
 accept a connection when this socket has a `SocketImpl` of one
 type and the given socket has a `SocketImpl` of a completely
 different type.

 An instance of this class using a system-default `SocketImpl`
 can accept a connection with a Socket using a `SocketImpl` of
 the same type: `IOException` is thrown if the Socket is using
 a custom `SocketImpl`. An instance of this class using a
 custom `SocketImpl` cannot accept a connection with a Socket
 using a system-default `SocketImpl`.

**参数**

- **s** — the Socket

**异常**

- **java.nio.channels.IllegalBlockingModeException** — if this socket has an associated channel, and the channel is in non-blocking mode
- **IOException** — if an I/O error occurs when waiting for a connection, or if it is not possible for this socket to accept a connection with the given socket

> *Since 1.1*
