---
id: "java-en-function-serversocket-getlocalsocketaddress"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.getLocalSocketAddress"
signature: "public SocketAddress getLocalSocketAddress()"
title: "ServerSocket.getLocalSocketAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.getLocalSocketAddress

```java
public SocketAddress getLocalSocketAddress()
```

Returns the address of the endpoint this socket is bound to.
 

 If the socket was bound prior to being `close closed`,
 then this method will continue to return the address of the endpoint
 after the socket is closed.

**返回**

- a `SocketAddress` representing the local endpoint of this socket, or `null` if the socket is not bound yet.

**参见**

- #getInetAddress()
- #getLocalPort()
- #bind(SocketAddress)

> *Since 1.4*
