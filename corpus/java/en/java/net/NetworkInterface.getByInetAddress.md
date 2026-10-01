---
id: "java-en-function-networkinterface-getbyinetaddress"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.getByInetAddress"
signature: "public static NetworkInterface getByInetAddress(InetAddress addr) throws SocketException"
title: "NetworkInterface.getByInetAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.getByInetAddress

```java
public static NetworkInterface getByInetAddress(InetAddress addr) throws SocketException
```

Convenience method to search for a network interface that
 has the specified Internet Protocol (IP) address bound to
 it.
 

 If the specified IP address is bound to multiple network
 interfaces it is not defined which network interface is
 returned.

 The returned interface instance may reflect a snapshot of the
 configuration taken at the time the instance is created.
 See the general discussion of `#lookup
 snapshots and configuration` for the semantics of the returned interface.

**参数**

- **addr** — The `InetAddress` to search with.

**返回**

- A `NetworkInterface` or `null` if there is no network interface with the specified IP address.

**异常**

- **SocketException** — If an I/O error occurs.
- **NullPointerException** — If the specified address is `null`.
