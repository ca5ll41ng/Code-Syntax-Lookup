---
id: "java-en-function-socket-settcpnodelay"
language: "java"
lang: "en"
category: "function"
name: "Socket.setTcpNoDelay"
signature: "public void setTcpNoDelay(boolean on) throws SocketException"
title: "Socket.setTcpNoDelay"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.setTcpNoDelay

```java
public void setTcpNoDelay(boolean on) throws SocketException
```

Enable/disable `TCP_NODELAY TCP_NODELAY`
 (disable/enable Nagle's algorithm).

**参数**

- **on** — `true` to enable `TCP_NODELAY`, `false` to disable.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #getTcpNoDelay()

> *Since 1.1*
