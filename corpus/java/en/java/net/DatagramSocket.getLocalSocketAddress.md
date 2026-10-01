---
id: "java-en-function-datagramsocket-getlocalsocketaddress"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.getLocalSocketAddress"
signature: "public SocketAddress getLocalSocketAddress()"
title: "DatagramSocket.getLocalSocketAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.getLocalSocketAddress

```java
public SocketAddress getLocalSocketAddress()
```

Returns the address of the endpoint this socket is bound to.
 

If the socket was initially bound to the wildcard address and
 is now `isConnected connected`, then the address returned
 may be the local address selected as the source address for
 datagrams sent on this socket instead of the wildcard address.
 When `disconnect` is called, the bound address reverts
 to the wildcard address.

**返回**

- a `SocketAddress` representing the local endpoint of this socket, or `null` if it is closed or not bound yet.

**参见**

- #getLocalAddress()
- #getLocalPort()
- #bind(SocketAddress)

> *Since 1.4*
