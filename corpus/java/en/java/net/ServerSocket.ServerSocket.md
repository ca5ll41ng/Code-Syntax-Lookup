---
id: "java-en-function-serversocket-serversocket"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.ServerSocket"
signature: "protected ServerSocket(SocketImpl impl)"
title: "ServerSocket.ServerSocket"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.ServerSocket

```java
protected ServerSocket(SocketImpl impl)
```

Creates a server socket with a user-specified `SocketImpl`.

**参数**

- **impl** — an instance of a SocketImpl to use on the ServerSocket.

**异常**

- **NullPointerException** — if impl is `null`.

> *Since 12*
