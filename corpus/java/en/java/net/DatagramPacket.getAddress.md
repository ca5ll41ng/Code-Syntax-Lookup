---
id: "java-en-function-datagrampacket-getaddress"
language: "java"
lang: "en"
category: "function"
name: "DatagramPacket.getAddress"
signature: "public synchronized InetAddress getAddress()"
title: "DatagramPacket.getAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramPacket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramPacket.getAddress

```java
public synchronized InetAddress getAddress()
```

Returns the IP address of the machine to which this datagram is being
 sent or from which the datagram was received, or `null` if not
 set.

**返回**

- the IP address of the machine to which this datagram is being sent or from which the datagram was received.

**参见**

- java.net.InetAddress
- #setAddress(java.net.InetAddress)
