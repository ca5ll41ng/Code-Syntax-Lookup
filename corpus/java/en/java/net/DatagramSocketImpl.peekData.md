---
id: "java-en-function-datagramsocketimpl-peekdata"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.peekData"
signature: "protected abstract int peekData(DatagramPacket p) throws IOException"
title: "DatagramSocketImpl.peekData"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.peekData

```java
protected abstract int peekData(DatagramPacket p) throws IOException
```

Peek at the packet to see who it is from. The data is copied into the specified
 `DatagramPacket`. The data is returned,
 but not consumed, so that a subsequent peekData/receive operation
 will see the same data.

**参数**

- **p** — the Packet Received.

**返回**

- the port number which the packet came from.

**异常**

- **IOException** — if an I/O exception occurs
- **PortUnreachableException** — may be thrown if the socket is connected to a currently unreachable destination. Note, there is no guarantee that the exception will be thrown.

> *Since 1.4*
