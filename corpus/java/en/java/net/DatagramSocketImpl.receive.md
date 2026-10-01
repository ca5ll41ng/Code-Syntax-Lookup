---
id: "java-en-function-datagramsocketimpl-receive"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.receive"
signature: "protected abstract void receive(DatagramPacket p) throws IOException"
title: "DatagramSocketImpl.receive"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.receive

```java
protected abstract void receive(DatagramPacket p) throws IOException
```

Receive the datagram packet.

**参数**

- **p** — the Packet Received.

**异常**

- **IOException** — if an I/O exception occurs while receiving the datagram packet.
- **PortUnreachableException** — may be thrown if the socket is connected to a currently unreachable destination. Note, there is no guarantee that the exception will be thrown.
