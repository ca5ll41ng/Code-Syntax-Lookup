---
id: "java-en-function-serversocket-accept"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.accept"
signature: "public Socket accept() throws IOException"
title: "ServerSocket.accept"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.accept

```java
public Socket accept() throws IOException
```

Listens for a connection to be made to this socket and accepts
 it. The method blocks until a connection is made.

 

 This method is `interrupt() interruptible` in the
 following circumstances:
 
   
-  The socket is `socket() associated`
        with a `ServerSocketChannel ServerSocketChannel`. In that
        case, interrupting a thread accepting a connection will close the
        underlying channel and cause this method to throw `java.nio.channels.ClosedByInterruptException` with the thread's
        interrupted status set.
   
-  The socket uses the system-default socket implementation and a
        `isVirtual() virtual thread` is accepting a
        connection. In that case, interrupting the virtual thread will
        cause it to wakeup and close the socket. This method will then throw
        `SocketException` with the thread's interrupted status set.
 

 An instance of this class using a system-default `SocketImpl`
 accepts sockets with a `SocketImpl` of the same type, regardless
 of the `setSocketImplFactory(SocketImplFactory)
 client socket implementation factory`, if one has been set.

**返回**

- the new Socket

**异常**

- **IOException** — if an I/O error occurs when waiting for a connection, the socket is not bound or the socket is closed.
- **SocketTimeoutException** — if a timeout was previously set with setSoTimeout and the timeout has been reached.
- **java.nio.channels.IllegalBlockingModeException** — if this socket has an associated channel, the channel is in non-blocking mode, and there is no connection ready to be accepted
