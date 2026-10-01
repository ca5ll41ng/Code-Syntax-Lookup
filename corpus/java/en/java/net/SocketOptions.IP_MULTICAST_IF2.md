---
id: "java-en-function-socketoptions-ip_multicast_if2"
language: "java"
lang: "en"
category: "function"
name: "SocketOptions.IP_MULTICAST_IF2"
signature: "@Native public static final int IP_MULTICAST_IF2 = 0x1f"
title: "SocketOptions.IP_MULTICAST_IF2"
directive: "field"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketOptions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketOptions.IP_MULTICAST_IF2

```java
@Native public static final int IP_MULTICAST_IF2 = 0x1f
```

This option is used to both set and fetch the outgoing interface on which the multicast
 packets are sent. Useful on hosts with multiple network interfaces, where applications
 want to use other than the system default. This option supports setting outgoing interfaces
 with either IPv4 and IPv6 addresses.

**参见**

- MulticastSocket#setNetworkInterface(NetworkInterface)
- MulticastSocket#getNetworkInterface()

> *Since 1.4*
