---
id: "java-en-function-socket-bind"
language: "java"
lang: "en"
category: "function"
name: "Socket.bind"
signature: "public void bind(SocketAddress bindpoint) throws IOException"
title: "Socket.bind"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.bind

```java
public void bind(SocketAddress bindpoint) throws IOException
```

Binds the socket to a local address.
 

 If the address is `null`, then the system will pick up
 an ephemeral port and a valid local address to bind the socket.

**参数**

- **bindpoint** — the `SocketAddress` to bind to

**异常**

- **IOException** — if the bind operation fails, the socket is already bound or the socket is closed.
- **IllegalArgumentException** — if bindpoint is a SocketAddress subclass not supported by this socket

**参见**

- #isBound()

> *Since 1.4*
