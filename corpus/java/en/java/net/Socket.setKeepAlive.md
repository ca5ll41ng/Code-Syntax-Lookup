---
id: "java-en-function-socket-setkeepalive"
language: "java"
lang: "en"
category: "function"
name: "Socket.setKeepAlive"
signature: "public void setKeepAlive(boolean on) throws SocketException"
title: "Socket.setKeepAlive"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.setKeepAlive

```java
public void setKeepAlive(boolean on) throws SocketException
```

Enable/disable `SO_KEEPALIVE SO_KEEPALIVE`.

**参数**

- **on** — whether or not to have socket keep alive turned on.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #getKeepAlive()

> *Since 1.3*
