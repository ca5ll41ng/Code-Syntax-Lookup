---
id: "java-en-function-socket-getkeepalive"
language: "java"
lang: "en"
category: "function"
name: "Socket.getKeepAlive"
signature: "public boolean getKeepAlive() throws SocketException"
title: "Socket.getKeepAlive"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getKeepAlive

```java
public boolean getKeepAlive() throws SocketException
```

Tests if `SO_KEEPALIVE SO_KEEPALIVE` is enabled.

**返回**

- a `boolean` indicating whether or not `SO_KEEPALIVE` is enabled.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #setKeepAlive(boolean)

> *Since 1.3*
