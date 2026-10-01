---
id: "java-en-function-networkinterface-ispointtopoint"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.isPointToPoint"
signature: "public boolean isPointToPoint() throws SocketException"
title: "NetworkInterface.isPointToPoint"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.isPointToPoint

```java
public boolean isPointToPoint() throws SocketException
```

Returns whether a network interface is a point to point interface.
 A typical point to point interface would be a PPP connection through
 a modem.

**返回**

- `true` if the interface is a point to point interface.

**异常**

- **SocketException** — if an I/O error occurs.

> *Since 1.6*
