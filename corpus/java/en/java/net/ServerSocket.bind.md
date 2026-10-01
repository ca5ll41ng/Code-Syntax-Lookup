---
id: "java-en-function-serversocket-bind"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.bind"
signature: "public void bind(SocketAddress endpoint) throws IOException"
title: "ServerSocket.bind"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.bind

```java
public void bind(SocketAddress endpoint) throws IOException
```

Binds the `ServerSocket` to a specific address
 (IP address and port number).
 

 If the address is `null`, then the system will pick up
 an ephemeral port and a valid local address to bind the socket.

**参数**

- **endpoint** — The IP address and port number to bind to.

**异常**

- **IOException** — if the bind operation fails, the socket is already bound or the socket is closed.
- **IllegalArgumentException** — if endpoint is a SocketAddress subclass not supported by this socket

> *Since 1.4*
