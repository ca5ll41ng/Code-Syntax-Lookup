---
id: "java-en-function-datagramsocket-bind"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.bind"
signature: "public void bind(SocketAddress addr) throws SocketException"
title: "DatagramSocket.bind"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.bind

```java
public void bind(SocketAddress addr) throws SocketException
```

Binds this DatagramSocket to a specific address and port.
 

 If the address is `null`, then the system will pick up
 an ephemeral port and a valid local address to bind the socket.

**参数**

- **addr** — The address and port to bind to.

**异常**

- **SocketException** — if any error happens during the bind, or if the socket is already bound or is closed.
- **IllegalArgumentException** — if addr is a SocketAddress subclass not supported by this socket.

> *Since 1.4*
