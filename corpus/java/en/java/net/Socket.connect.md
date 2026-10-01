---
id: "java-en-function-socket-connect"
language: "java"
lang: "en"
category: "function"
name: "Socket.connect"
signature: "public void connect(SocketAddress endpoint) throws IOException"
title: "Socket.connect"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.connect

```java
public void connect(SocketAddress endpoint) throws IOException
```

Connects this socket to the server.

 

 If the connection cannot be established, then the socket is closed,
 and an `IOException` is thrown.

 

 This method is `interrupt() interruptible` in the
 following circumstances:
 
   
-  The socket is `socket() associated` with
        a `SocketChannel SocketChannel`.
        In that case, interrupting a thread establishing a connection will
        close the underlying channel and cause this method to throw
        `ClosedByInterruptException` with the thread's interrupted
        status set.
   
-  The socket uses the system-default socket implementation and a
        `isVirtual() virtual thread` is establishing a
        connection. In that case, interrupting the virtual thread will
        cause it to wakeup and close the socket. This method will then throw
        `SocketException` with the thread's interrupted status set.

**参数**

- **endpoint** — the `SocketAddress`

**异常**

- **IOException** — if an error occurs during the connection, the socket is already connected or the socket is closed
- **UnknownHostException** — if the connection could not be established because the endpoint is an unresolved `InetSocketAddress`
- **java.nio.channels.IllegalBlockingModeException** — if this socket has an associated channel, and the channel is in non-blocking mode
- **IllegalArgumentException** — if endpoint is null or is a SocketAddress subclass not supported by this socket

> *Since 1.4*
