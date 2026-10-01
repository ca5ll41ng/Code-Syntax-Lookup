---
id: "java-en-function-socket-getremotesocketaddress"
language: "java"
lang: "en"
category: "function"
name: "Socket.getRemoteSocketAddress"
signature: "public SocketAddress getRemoteSocketAddress()"
title: "Socket.getRemoteSocketAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getRemoteSocketAddress

```java
public SocketAddress getRemoteSocketAddress()
```

Returns the address of the endpoint this socket is connected to, or
 `null` if it is unconnected.
 

 If the socket was connected prior to being `close closed`,
 then this method will continue to return the connected address
 after the socket is closed.

**返回**

- a `SocketAddress` representing the remote endpoint of this socket, or `null` if it is not connected yet.

**参见**

- #getInetAddress()
- #getPort()
- #connect(SocketAddress, int)
- #connect(SocketAddress)

> *Since 1.4*
