---
id: "java-en-function-datagrampacket-setport"
language: "java"
lang: "en"
category: "function"
name: "DatagramPacket.setPort"
signature: "public synchronized void setPort(int iport)"
title: "DatagramPacket.setPort"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramPacket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramPacket.setPort

```java
public synchronized void setPort(int iport)
```

Sets the port number on the remote host to which this datagram
 is being sent.

**参数**

- **iport** — the port number

**异常**

- **IllegalArgumentException** — if the port is out of range

**参见**

- #getPort()

> *Since 1.1*
