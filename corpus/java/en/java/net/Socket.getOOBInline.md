---
id: "java-en-function-socket-getoobinline"
language: "java"
lang: "en"
category: "function"
name: "Socket.getOOBInline"
signature: "public boolean getOOBInline() throws SocketException"
title: "Socket.getOOBInline"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getOOBInline

```java
public boolean getOOBInline() throws SocketException
```

Tests if `SO_OOBINLINE SO_OOBINLINE` is enabled.

**返回**

- a `boolean` indicating whether or not `SO_OOBINLINE` is enabled.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #setOOBInline(boolean)

> *Since 1.4*
