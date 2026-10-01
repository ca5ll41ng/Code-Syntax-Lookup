---
id: "java-en-function-datagramsocket-send"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.send"
signature: "public void send(DatagramPacket p) throws IOException"
title: "DatagramSocket.send"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.send

```java
public void send(DatagramPacket p) throws IOException
```

Sends a datagram packet from this socket. The
 `DatagramPacket` includes information indicating the
 data to be sent, its length, the IP address of the remote host,
 and the port number on the remote host.

**参数**

- **p** — the `DatagramPacket` to be sent.

**异常**

- **IOException** — if an I/O error occurs, or the socket is closed.
- **PortUnreachableException** — may be thrown if the socket is connected to a currently unreachable destination. Note, there is no guarantee that the exception will be thrown.
- **java.nio.channels.IllegalBlockingModeException** — if this socket has an associated channel, and the channel is in non-blocking mode.
- **IllegalArgumentException** — if the socket is connected, and connected address and packet address differ, or if the socket is not connected and the packet address is not set or if its port is out of range.

**参见**

- java.net.DatagramPacket
