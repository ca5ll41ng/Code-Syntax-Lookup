---
id: "java-en-function-socketimpl-bind"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.bind"
signature: "protected abstract void bind(InetAddress host, int port) throws IOException"
title: "SocketImpl.bind"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.bind

```java
protected abstract void bind(InetAddress host, int port) throws IOException
```

Binds this socket to the specified local IP address and port number.

**参数**

- **host** — an IP address that belongs to a local interface.
- **port** — the port number.

**异常**

- **IOException** — if an I/O error occurs when binding this socket.
