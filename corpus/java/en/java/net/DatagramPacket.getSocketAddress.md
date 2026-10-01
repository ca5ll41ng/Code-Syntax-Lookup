---
id: "java-en-function-datagrampacket-getsocketaddress"
language: "java"
lang: "en"
category: "function"
name: "DatagramPacket.getSocketAddress"
signature: "public synchronized SocketAddress getSocketAddress()"
title: "DatagramPacket.getSocketAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramPacket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramPacket.getSocketAddress

```java
public synchronized SocketAddress getSocketAddress()
```

Returns the `InetSocketAddress(InetAddress, int)
 SocketAddress` (usually `getAddress() IP address` +
 `getPort() port number`) of the remote host that this packet
 is being sent to or is coming from.

**返回**

- the `SocketAddress`

**参见**

- #setSocketAddress

> *Since 1.4*
