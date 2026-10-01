---
id: "java-en-function-multicastsocket-leavegroup"
language: "java"
lang: "en"
category: "function"
name: "MulticastSocket.leaveGroup"
signature: "public void leaveGroup(InetAddress mcastaddr) throws IOException"
title: "MulticastSocket.leaveGroup"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket.leaveGroup

```java
public void leaveGroup(InetAddress mcastaddr) throws IOException
```

Leave a multicast group. Its behavior may be affected by
 `setInterface` or `setNetworkInterface`.

 Calling this method is equivalent to calling
 `leaveGroup(SocketAddress, NetworkInterface)
 leaveGroup`.

**参数**

- **mcastaddr** — is the multicast address to leave

**异常**

- **IOException** — if there is an error leaving or when the address is not a multicast address, or the socket is closed.

> **⚠ Deprecated** — This method does not accept the network interface on which to leave the multicast group. Use `leaveGroup` instead.
