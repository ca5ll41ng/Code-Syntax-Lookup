---
id: "java-en-function-socket-getreuseaddress"
language: "java"
lang: "en"
category: "function"
name: "Socket.getReuseAddress"
signature: "public boolean getReuseAddress() throws SocketException"
title: "Socket.getReuseAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getReuseAddress

```java
public boolean getReuseAddress() throws SocketException
```

Tests if `SO_REUSEADDR SO_REUSEADDR` is enabled.

**返回**

- a `boolean` indicating whether or not `SO_REUSEADDR` is enabled.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #setReuseAddress(boolean)

> *Since 1.4*
