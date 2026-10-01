---
id: "java-en-function-datagramsocket-getlocaladdress"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.getLocalAddress"
signature: "public InetAddress getLocalAddress()"
title: "DatagramSocket.getLocalAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.getLocalAddress

```java
public InetAddress getLocalAddress()
```

Gets the local address to which the socket is bound.
 

If the socket was initially bound to the wildcard address and
 is now `isConnected connected`, then the address returned
 may be the local address selected as the source address for
 datagrams sent on the socket instead of the wildcard address.
 When `disconnect` is called, the bound address reverts
 to the wildcard address.

**返回**

- the local address to which the socket is bound, `null` if the socket is closed, or an `InetAddress` representing `isAnyLocalAddress wildcard` address if the socket is not bound

> *Since 1.1*
