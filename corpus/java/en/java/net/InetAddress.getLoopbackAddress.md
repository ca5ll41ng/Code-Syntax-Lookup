---
id: "java-en-function-inetaddress-getloopbackaddress"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.getLoopbackAddress"
signature: "public static InetAddress getLoopbackAddress()"
title: "InetAddress.getLoopbackAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.getLoopbackAddress

```java
public static InetAddress getLoopbackAddress()
```

Returns the loopback address.
 

 The InetAddress returned will represent the IPv4
 loopback address, 127.0.0.1, or the IPv6 loopback
 address, ::1. The IPv4 loopback address returned
 is only one of many in the form 127.*.*.*

**返回**

- the InetAddress loopback instance.

> *Since 1.7*
