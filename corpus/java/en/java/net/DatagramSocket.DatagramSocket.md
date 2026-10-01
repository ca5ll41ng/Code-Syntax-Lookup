---
id: "java-en-function-datagramsocket-datagramsocket"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.DatagramSocket"
signature: "public DatagramSocket() throws SocketException"
title: "DatagramSocket.DatagramSocket"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.DatagramSocket

```java
public DatagramSocket() throws SocketException
```

Constructs a datagram socket and binds it to any available port
 on the local host machine.  The socket will be bound to the
 `isAnyLocalAddress wildcard` address.

**异常**

- **SocketException** — if the socket could not be opened, or the socket could not be bound.
