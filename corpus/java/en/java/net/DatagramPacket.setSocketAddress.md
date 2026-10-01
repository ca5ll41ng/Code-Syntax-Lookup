---
id: "java-en-function-datagrampacket-setsocketaddress"
language: "java"
lang: "en"
category: "function"
name: "DatagramPacket.setSocketAddress"
signature: "public synchronized void setSocketAddress(SocketAddress address)"
title: "DatagramPacket.setSocketAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramPacket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramPacket.setSocketAddress

```java
public synchronized void setSocketAddress(SocketAddress address)
```

Sets the SocketAddress (usually IP address + port number) of the remote
 host to which this datagram is being sent.

**参数**

- **address** — the `SocketAddress`

**异常**

- **IllegalArgumentException** — if address is null or is a SocketAddress subclass not supported.

**参见**

- #getSocketAddress

> *Since 1.4*
