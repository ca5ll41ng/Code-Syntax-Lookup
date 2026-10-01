---
id: "java-en-function-socket-gettcpnodelay"
language: "java"
lang: "en"
category: "function"
name: "Socket.getTcpNoDelay"
signature: "public boolean getTcpNoDelay() throws SocketException"
title: "Socket.getTcpNoDelay"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getTcpNoDelay

```java
public boolean getTcpNoDelay() throws SocketException
```

Tests if `TCP_NODELAY TCP_NODELAY` is enabled.

**返回**

- a `boolean` indicating whether or not `TCP_NODELAY` is enabled.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #setTcpNoDelay(boolean)

> *Since 1.1*
