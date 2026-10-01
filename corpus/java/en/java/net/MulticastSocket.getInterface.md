---
id: "java-en-function-multicastsocket-getinterface"
language: "java"
lang: "en"
category: "function"
name: "MulticastSocket.getInterface"
signature: "public InetAddress getInterface() throws SocketException"
title: "MulticastSocket.getInterface"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket.getInterface

```java
public InetAddress getInterface() throws SocketException
```

Retrieve the address of the network interface used for
 multicast packets.

**返回**

- An `InetAddress` representing the address of the network interface used for multicast packets, or if no interface has been set, an `InetAddress` representing any local address.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #setInterface(java.net.InetAddress)

> **⚠ Deprecated** — The network interface may not be uniquely identified by the InetAddress returned. Use `getNetworkInterface` instead.
