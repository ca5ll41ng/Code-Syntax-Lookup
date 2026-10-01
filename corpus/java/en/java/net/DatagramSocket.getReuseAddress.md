---
id: "java-en-function-datagramsocket-getreuseaddress"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.getReuseAddress"
signature: "public boolean getReuseAddress() throws SocketException"
title: "DatagramSocket.getReuseAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.getReuseAddress

```java
public boolean getReuseAddress() throws SocketException
```

Tests if SO_REUSEADDR is enabled.

 This method is equivalent to calling `getOption(SocketOption)
 getOption`.

**返回**

- a `boolean` indicating whether or not SO_REUSEADDR is enabled.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as an UDP error, or the socket is closed.

**参见**

- #setReuseAddress(boolean)
- StandardSocketOptions#SO_REUSEADDR

> *Since 1.4*
