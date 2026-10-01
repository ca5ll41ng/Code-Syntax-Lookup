---
id: "java-en-function-serversocket-getinetaddress"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.getInetAddress"
signature: "public InetAddress getInetAddress()"
title: "ServerSocket.getInetAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.getInetAddress

```java
public InetAddress getInetAddress()
```

Returns the local address of this server socket.
 

 If the socket was bound prior to being `close closed`,
 then this method will continue to return the local address
 after the socket is closed.

**返回**

- the address to which this socket is bound, or `null` if the socket is unbound.
