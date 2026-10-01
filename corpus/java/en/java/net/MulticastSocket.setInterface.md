---
id: "java-en-function-multicastsocket-setinterface"
language: "java"
lang: "en"
category: "function"
name: "MulticastSocket.setInterface"
signature: "public void setInterface(InetAddress inf) throws SocketException"
title: "MulticastSocket.setInterface"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket.setInterface

```java
public void setInterface(InetAddress inf) throws SocketException
```

Set the multicast network interface used by methods
 whose behavior would be affected by the value of the
 network interface. Useful for multihomed hosts.

**参数**

- **inf** — the InetAddress

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #getInterface()

> **⚠ Deprecated** — The InetAddress may not uniquely identify the network interface. Use `setNetworkInterface` instead.
