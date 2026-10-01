---
id: "java-en-function-networkinterface-getbyname"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.getByName"
signature: "public static NetworkInterface getByName(String name) throws SocketException"
title: "NetworkInterface.getByName"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.getByName

```java
public static NetworkInterface getByName(String name) throws SocketException
```

Searches for the network interface with the specified name.

 The returned interface instance may reflect a snapshot of the
 configuration taken at the time the instance is created.
 See the general discussion of `#lookup
 snapshots and configuration` for the semantics of the returned interface.

**参数**

- **name** — The name of the network interface.

**返回**

- A `NetworkInterface` with the specified name, or `null` if there is no network interface with the specified name.

**异常**

- **SocketException** — If an I/O error occurs.
- **NullPointerException** — If the specified name is `null`.
