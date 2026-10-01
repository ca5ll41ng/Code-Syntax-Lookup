---
id: "java-en-function-serversocket-supportedoptions"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.supportedOptions"
signature: "public Set<SocketOption<?>> supportedOptions()"
title: "ServerSocket.supportedOptions"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.supportedOptions

```java
public Set<SocketOption<?>> supportedOptions()
```

Returns a set of the socket options supported by this server socket.

 This method will continue to return the set of options even after
 the socket has been closed.

**返回**

- A set of the socket options supported by this socket. This set may be empty if the socket's SocketImpl cannot be created.

> *Since 9*
