---
id: "java-en-function-serversocketfactory-createserversocket"
language: "java"
lang: "en"
category: "function"
name: "ServerSocketFactory.createServerSocket"
signature: "public ServerSocket createServerSocket() throws IOException"
title: "ServerSocketFactory.createServerSocket"
directive: "method"
module: "java.base/javax.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ServerSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocketFactory.createServerSocket

```java
public ServerSocket createServerSocket() throws IOException
```

Returns an unbound server socket.  The socket is configured with
 the socket options (such as accept timeout) given to this factory.

**返回**

- the unbound socket

**异常**

- **IOException** — if the socket cannot be created

**参见**

- java.net.ServerSocket#bind(java.net.SocketAddress)
- java.net.ServerSocket#bind(java.net.SocketAddress, int)
- java.net.ServerSocket#ServerSocket()
