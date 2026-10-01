---
id: "java-en-function-datagrampacket-getport"
language: "java"
lang: "en"
category: "function"
name: "DatagramPacket.getPort"
signature: "public synchronized int getPort()"
title: "DatagramPacket.getPort"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramPacket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramPacket.getPort

```java
public synchronized int getPort()
```

Returns the port number on the remote host to which this datagram is
 being sent or from which the datagram was received, or 0 if not set.

**返回**

- the port number on the remote host to which this datagram is being sent or from which the datagram was received.

**参见**

- #setPort(int)
