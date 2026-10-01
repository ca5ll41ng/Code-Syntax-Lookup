---
id: "java-en-function-socketoptions-so_bindaddr"
language: "java"
lang: "en"
category: "function"
name: "SocketOptions.SO_BINDADDR"
signature: "@Native public static final int SO_BINDADDR = 0x000F"
title: "SocketOptions.SO_BINDADDR"
directive: "field"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketOptions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketOptions.SO_BINDADDR

```java
@Native public static final int SO_BINDADDR = 0x000F
```

Fetch the local address binding of a socket. This option cannot be set and can only be
 fetched. The default local address of a socket is
 `isAnyLocalAddress() INADDR_ANY`, meaning any local
 address on a multi-homed host. A multi-homed host can use this option to accept
 connections to only one of its addresses (in the case of a
 `ServerSocket` or `DatagramSocket`), or to specify its return address
 to the peer (for a `Socket` or `DatagramSocket`). The type of this option's
 value is an `InetAddress`.

**参见**

- Socket#getLocalAddress
- DatagramSocket#getLocalAddress
