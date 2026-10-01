---
id: "java-en-function-socket-getlocalsocketaddress"
language: "java"
lang: "en"
category: "function"
name: "Socket.getLocalSocketAddress"
signature: "public SocketAddress getLocalSocketAddress()"
title: "Socket.getLocalSocketAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getLocalSocketAddress

```java
public SocketAddress getLocalSocketAddress()
```

Returns the address of the endpoint this socket is bound to.
 

 If a socket bound to an endpoint represented by an
 `InetSocketAddress ` is `close closed`,
 then this method will continue to return an `InetSocketAddress`
 after the socket is closed. In that case the returned
 `InetSocketAddress`'s address is the
 `isAnyLocalAddress wildcard` address
 and its port is the local port that it was bound to.

**返回**

- a `SocketAddress` representing the local endpoint of this socket, or `null` if the socket is not bound yet.

**参见**

- #getLocalAddress()
- #getLocalPort()
- #bind(SocketAddress)

> *Since 1.4*
