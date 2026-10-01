---
id: "java-en-function-multicastsocket-joingroup"
language: "java"
lang: "en"
category: "function"
name: "MulticastSocket.joinGroup"
signature: "public void joinGroup(InetAddress mcastaddr) throws IOException"
title: "MulticastSocket.joinGroup"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket.joinGroup

```java
public void joinGroup(InetAddress mcastaddr) throws IOException
```

Joins a multicast group. Its behavior may be affected by
 `setInterface` or `setNetworkInterface`.

 Calling this method is equivalent to calling
 `joinGroup(SocketAddress, NetworkInterface)
 joinGroup`.

**参数**

- **mcastaddr** — is the multicast address to join

**异常**

- **IOException** — if there is an error joining, or when the address is not a multicast address, or the platform does not support multicasting, or the socket is closed.

> **⚠ Deprecated** — This method does not accept the network interface on which to join the multicast group. Use `joinGroup` instead.
