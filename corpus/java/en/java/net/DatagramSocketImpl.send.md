---
id: "java-en-function-datagramsocketimpl-send"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.send"
signature: "protected abstract void send(DatagramPacket p) throws IOException"
title: "DatagramSocketImpl.send"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.send

```java
protected abstract void send(DatagramPacket p) throws IOException
```

Sends a datagram packet. The packet contains the data and the
 destination address to send the packet to.

**参数**

- **p** — the packet to be sent.

**异常**

- **IOException** — if an I/O exception occurs while sending the datagram packet.
- **PortUnreachableException** — may be thrown if the socket is connected to a currently unreachable destination. Note, there is no guarantee that the exception will be thrown.
